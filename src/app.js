require("dotenv").config();
const express = require("express");
const app = express();

// Uso de rotas
app.use("/api", require("./routes/api_cars"));

app.listen(process.env.PORT, () =>
  console.log(`Servidor rodando na porta ${process.env.PORT}`)
);
