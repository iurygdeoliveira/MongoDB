/*
##################
# BOOTING SERVER #
##################
*/

const port = 3000;

module.exports = (server) => {
  server.listen(port, () => {
    console.log(`Server is running at localhost:${port}`);
  });
};
