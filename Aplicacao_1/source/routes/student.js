/*
###########
# IMPORTS #
###########
*/

import express from 'express';
import helper from '../helpers/config.js';

/*
############
# CONSTANT #
############
*/

const student = express.Router();

/*
############
# ENDPOINT #
############
*/

student.get(helper.endpoints.student, async (req, res) => {
  let id = Number(req.params.id);

  try {
    // Reading grades.json
    let file = JSON.parse(await readFile(global.gradesFile));

    // Procurando grade informada
    const filtered = file.grades.filter((data) => {
      if (data.id === id) return data;
    });

    res.send(filtered);
  } catch (error) {
    // Qualquer erro no decorrer do processo enviar mensagem de erro
    // e status 400
    res.status(400).send({ error: error.message });
  }
});

/*
 ###################
 # EXPORTING ROUTE #
 ###################
 */

export default student;
