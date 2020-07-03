import mongoose from 'mongoose';

function Connect() {
  try {
    mongoose.connect(
      'mongodb+srv://mongodb:mongodb@teste.sf57x.mongodb.net/mongodb?retryWrites=true&w=majority',
      {
        useNewUrlParser: true,
        useUnifiedTopology: true,
      },
      () => {
        console.log('MongoDB Conectado');
      }
    );
  } catch (error) {
    console.log('Erro ao conectar no MongoDB');
    console.log(error);
  }
}

export default { Connect };
