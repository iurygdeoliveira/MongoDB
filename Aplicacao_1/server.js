/*
###########
# IMPORTS #
###########
 */
import express from 'express';
import student from './source/routes/student.js';
import helper from './source/helpers/config.js';

/*
############
# CONSTANT #
############
*/

const server = express();
server.use(express.json()); // Enable use of JSON objects
server.use(helper.endpoints.student, student); // Enable route student

/*
##################
# BOOTING SERVER #
##################
*/
server.listen(3000, async () => {
  try {
    console.log('API START');
  } catch (error) {
    console.log('error: ' + error.message);
  }
});
