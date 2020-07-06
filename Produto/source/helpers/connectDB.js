import config from './config.js';
import mongoose from 'mongoose';

mongoose.set('useFindAndModify', false);

mongoose
  .connect(config.uri, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(console.log('Connected Database'))
  .catch((error) => {
    console.log('Erro na conexão');
    console.log(error.message);
  });
