import helpers from '../helpers/config.js';
import db from '../helpers/middlewares.js';

/*
############
# ENDPOINT #
############
*/
module.exports = (server) => {
  server.get('/produtos', async (req, res) => {
    let { nome, fabricante, preco } = req.body;

    try {
      // helpers.getConnect();

      //let Produtos = helpers.createModel('Produto', produtoSchema);

      console.log(Produtos);

      // Buscando todos os produtos
      Produtos.find({}, (error, dados) => {
        if (error) {
          res.status(400).send({
            resultado: 'Erro ao listar produtos',
            error: error.message,
          });
        }

        res.status(200).send(dados);
      });
    } catch (error) {
      // Qualquer erro no decorrer do processo enviar mensagem de erro
      // e status 400
      res.status(417).send({
        resultado: 'Erro ao listar produtos',
        error: error.message,
      });
    }
  });

  server.get('/produto/:nome', async (req, res) => {
    try {
      helpers.getConnect();

      //let Produto = helpers.createModel('Produto', produtoSchema);

      //console.log(Produto);

      // Buscando todos os produtos
      Produto.find({ nome: req.params.nome }, (error, dados) => {
        if (error) {
          res.status(400).send({
            resultado: 'Erro ao listar produto',
            error: error,
          });
        }

        res.status(200).send(dados);
      });
    } catch (error) {
      // Qualquer erro no decorrer do processo enviar mensagem de erro
      // e status 400
      res.status(417).send({
        resultado: 'Erro ao listar os dados',
        error: error.message,
      });
    }
  });
};
