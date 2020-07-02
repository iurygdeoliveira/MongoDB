/*
###########
# IMPORTS #
###########
*/

import mongoose from 'mongoose';

/*
##########
# SCHEMA #
##########
*/

const studentSchema = mongoose.Schema({
  name: {
    type: String,
    require: true,
  },
  subject: {
    type: String,
    require: true,
  },
  type: {
    type: String,
    require: true,
  },
  value: {
    type: Number,
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

const studentModel = mongoose.model('student', studentSchema, 'student');

export default studentModel;
