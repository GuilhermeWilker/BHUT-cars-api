const axios = require("axios");

const index = async (req, res) => {
  try {
    const reply = await axios.get(process.env.EXTERNAL_API_URL);
    const cars = reply.data;

    return res.status(200).json(cars);
  } catch (err) {
    console.error("Erro ao buscar carros: ", err);

    return res.status(500).json({
      error: "Erro ao buscar carros da API",
    });
  }
};

const store = async (req, res) => {
  try {
    res.json("store");
  } catch (err) {
    console.error("Erro ao cadastrar novo carro: ", err);
  }
};

module.exports = { index, store };
