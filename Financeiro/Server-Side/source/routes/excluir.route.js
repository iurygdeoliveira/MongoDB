import helpers from '../helpers/config.js';
import produtoModel from '../models/produto.schema.js';

/*
############
# ENDPOINT #
############
*/
module.exports = (server) => {
  server.delete(helpers.endpoints.excluirByName, async (req, res) => {
    try {
      // Excluir produto
      produtoModel.findOneAndDelete(
        { nome: req.params.nome },
        (error, dados) => {
          if (error) {
            res.status(400).send({
              resultado: 'Erro ao deletar os dados',
              error: error.message,
            });
          }

          res.status(200).send({
            result: 'Dados deletados',
            dados,
          });
        }
      );
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
