/*
###########
# IMPORTS #
###########
*/

// A PRINCIPAL IMPORTÂNCIA DO MONGOOSE, PROVER UMA ABSTRAÇÃO AO PROGRAMADOR
// DEIXANDO A PROGRAMAÇÃO MAIS PRÓXIMA DA ORIENTAÇÃO A OBJETOS

import mongoose from 'mongoose';

/*
############
# CONEXION #
############
*/

let connect = mongoose.connect(
  'mongodb+srv://mongodb:z6RMqNO91wQYRser@teste.sf57x.mongodb.net/teste?retryWrites=true&w=majority',
  {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  },
  () => {
    console.log('Banco de dados conectado');
  }
);

/*
##########
# SCHEMA #
##########
*/

const collection = mongoose.Schema({
  nome: {
    type: String,
    require: true,
  },
  fabricante: {
    type: String,
    require: true,
  },
  preco: {
    type: String,
    require: true,
    validate(value) {
      if (value < 0)
        throw new Error('Valor negativo para a nota não permitido');
    },
  },
  lastModified: {
    type: Date,
    default: Date.now,
  },
});
/*
#############
# SET MODEL #
#############
*/

const produtoModel = mongoose.model('produto', collection);
module.exports = produtoModel;
