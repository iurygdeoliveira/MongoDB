import mongoose from 'mongoose';

const endpoints = {
  student: '/student',
};

(async () => {
  try {
    await mongoose.connect('mongodb+srv://localhost/', {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
  } catch (error) {
    console.log('Erro ao conectar no MongoDB');
  }
})();

export default { endpoints };
