import helpers from '../helpers/config.js';
import produtoModel from '../models/produto.schema.js';

//console.log(db);
/*
############
# ENDPOINT #
############
*/
module.exports = (server) => {
  server.post(helpers.endpoints.cadastro, async (req, res) => {
    try {
      // Validando dados
      if (
        req.body.nome != undefined &&
        req.body.fabricante != undefined &&
        req.body.preco != undefined &&
        req.body.preco > 0
      ) {
        let { nome, fabricante, preco } = req.body;

        const novoProduto = await produtoModel.create({
          nome: nome,
          fabricante: fabricante,
          preco: preco,
        });

        // Salvando um novo produto
        novoProduto
          .save()
          .then(() => {
            res.status(201).send({ resultado: 'Dado salvo com sucesso' });
          })
          .catch((error) => {
            if (error) throw error;
          });
      } else {
        res.status(406).send({
          resultado: 'Dados Invalidos',
        });
      }
    } catch (error) {
      // Qualquer erro no decorrer do processo enviar mensagem de erro
      // e status 400
      res.status(417).send({
        resultado: 'Erro ao salvar os dados',
        error: error.message,
      });
    }
  });
};
