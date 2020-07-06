/*
########
# PORT #
########
*/

const port = 3000;

/*
############
# DATABASE #
############
*/
const db = {
  user: 'teste',
  password: 'ElsD2q2bokcKJ2ZI',
  cluster: 'teste.sf57x.mongodb.net',
  dbname: 'teste',
};

const uri = `mongodb+srv://${db.user}:${db.password}@${db.cluster}/${db.dbname}?retryWrites=true&w=majority`;

const schemas = {
  produtos: 'produtos',
};
/*
#############
# ENDPOINTS #
#############
*/

const endpoints = {
  padrao: '/',
  cadastro: '/cadastro',
  listar: '/produtos',
  listarByName: '/produto/:nome',
  excluirByName: '/produto/:nome',
};

module.exports = { port, uri, endpoints, schemas };
