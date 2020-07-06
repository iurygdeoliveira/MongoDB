import mongoose from 'mongoose';
import helpers from '../helpers/config.js';

/*
##########
# SCHEMA #
##########
*/

const schema = new mongoose.Schema({
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
  },
  lastModified: {
    type: Date,
    default: Date.now,
  },
});

/*
###########
# EXPORTS #
###########
*/

export default mongoose.model(helpers.schemas.produtos, schema);
