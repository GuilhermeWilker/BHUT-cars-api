const CarsController = require("../controllers/CarsController");
const express = require("express");
const router = express.Router();

router.get("/", CarsController.index);

module.exports = router;
