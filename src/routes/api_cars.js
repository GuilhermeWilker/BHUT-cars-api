const CarsController = require("../controllers/CarsController");
const express = require("express");
const router = express.Router();

router.get("/listCars", CarsController.index);
router.post("/createCars", CarsController.store);

module.exports = router;
