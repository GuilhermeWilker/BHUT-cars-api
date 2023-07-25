const mongoose = require("mongoose");

const connectDB = async () => {
  try {
    await mongoose.connect(process.env.MONGO_URI_CONNECTION, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
  } catch (err) {
    console.error("Erro ao conectar ao Banco de dados.. ", err);
  }
};

module.exports = connectDB;
