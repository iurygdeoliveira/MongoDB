import produtoModel from '../models/produto.schema.js';

/*
############
# ENDPOINT #
############
*/
module.exports = (server) => {
  server.post('/cadastro', async (req, res) => {
    try {
      let { nome, fabricante, preco } = req.body;

      // Construindo um novo produto
      let novoProduto = new produtoModel({
        nome: nome,
        fabricante: fabricante,
        preco: preco,
      });

      //console.log(novoProduto);

      // Salvando um novo produto
      novoProduto
        .save()
        .then(() => {
          res.status(201).send({ resultado: 'Dado salvo com sucesso' });
        })
        .catch((error) => {
          if (error) throw error;
        });
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
