const mongoose = require("mongoose");

const logSchema = new mongoose.Schema({
  car_id: {
    type: mongoose.Schema.Types.ObjectId,
    required: true,
  },
  data_hora: {
    type: Date,
    default: Date.now,
  },
});

const Logs = mongoose.model("Log", logSchema);
module.exports = Logs;
