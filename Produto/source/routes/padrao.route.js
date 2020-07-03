/*
############
# ENDPOINT #
############
*/

module.exports = (server) => {
  server.get('/', async (_, res) => {
    res.status(200).send({ result: 'Server is running!' });
  });
};
