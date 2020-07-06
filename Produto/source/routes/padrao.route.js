import helpers from '../helpers/config.js';

/*
############
# ENDPOINT #
############
*/

module.exports = (server) => {
  server.get(helpers.endpoints.padrao, async (_, res) => {
    res.status(200).send({ result: 'Server is running!' });
  });
};
