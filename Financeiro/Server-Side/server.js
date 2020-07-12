/*
###########
# IMPORTS #
###########
 */

import express from 'express';
import consign from 'consign';

const server = express();

/*
###########
# MODULES #
###########
 */

consign()
  .include('/source/helpers/config.js')
  .then('/source/helpers/middlewares.js')
  .then('/source/helpers/connectDB.js')
  .then('/source/helpers/boot.js')
  .then('/source/routes')
  .into(server);
