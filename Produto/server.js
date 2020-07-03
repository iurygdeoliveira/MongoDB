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
  .include('/source/helpers/bodyparser.js')
  .then('/source/routes')
  .then('/source/helpers/boot.js')
  .into(server);
