import helpers from '../helpers/config.js';
import produtoModel from '../models/produto.schema.js';

/*
############
# ENDPOINT #
############
*/
module.exports = (server) => {
  server.get(helpers.endpoints.listar, async (req, res) => {
    try {
      // Buscando todos os produtos
      produtoModel.find({}, (error, dados) => {
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

  server.get(helpers.endpoints.listarByName, async (req, res) => {
    try {
      // Buscando por nome
      produtoModel.find({ nome: req.params.nome }, (error, dados) => {
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
