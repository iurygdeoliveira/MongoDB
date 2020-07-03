import bodyParser from 'body-parser';

module.exports = (server) => {
  server.use(bodyParser.json());
};
