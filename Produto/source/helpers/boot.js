/*
##################
# BOOTING SERVER #
##################
*/
import config from './config.js';

module.exports = (server) => {
  server.listen(config.port, (error) => {
    if (error) {
      console.log(`Server error:${error.message}`);
    } else {
      console.log(`Server is running at localhost:${config.port}`);
    }
  });
};
