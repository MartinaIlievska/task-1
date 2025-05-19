const mongoose = require('mongoose')

const akademijaSchema = new mongoose.Schema ({
    ime: {
        type: String,
        required: [true,"napisete ime" ]
    },
    adress: {
        type: String
    }
})

const Akademija = mongoose.model('Akademija', akademijaSchema);
module.exports = Akademija;