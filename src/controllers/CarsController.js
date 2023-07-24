const index = (req, res) => {
  return res.status(202).json("cars");
};

module.exports = { index };
