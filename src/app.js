require("dotenv").config();
const express = require("express");
const app = express();

// Conexão com Banco de dados (MongoDB)
const connectDB = require("./database/db");
connectDB();

// Uso de rotas
app.use("/api", require("./routes/api_cars"));

app.listen(process.env.PORT, () =>
  console.log(`Servidor rodando na porta ${process.env.PORT}`)
);
