const mongoose = require("mongoose");

const kursSchema = new mongoose.Schema({
  ime: {
    type: String,
    required: [true, "mora da ima ime"],
  },
  adresa: {
    type: String,
    required: [true, "mora da ima adresa"],
  },
  oblast: {
    type: String,
  },
});

const Kurs = mongoose.model("Kurs", kursSchema);
module.exports = Kurs;
