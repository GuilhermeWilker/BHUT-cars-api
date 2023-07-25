const CarsController = require("../controllers/CarsController");
const express = require("express");
const router = express.Router();

router.get("/cars", CarsController.index);
// router.post("/cars", CarsController.store);

module.exports = router;
