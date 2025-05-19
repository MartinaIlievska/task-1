const Akademija = require('../pkg/model/akademijaModel')

exports.createAkademija = async (req, res) => {
    try {
        const newAkademija = await Akademija.create(req.body);
        res.status(201).json({
            status:'success',
            data: {
                akademija: newAkademija,
            },
        });
    } catch (err) {
        res.status(500).json({
            status:'fail',
            message: err.message,
        });
    }
};

exports.getAllAkademija = async (req,res) => {
    try {
        const akademija = await Akademija.find();

        res.status(200).json({
            status:'success',
            data: {
                allAkademija : akademija,
            },
        });
    } catch (err) {
        res.status(500).json({
            status: 'fail',
            message: err.message,
        });
    }
};

exports.getAkademijaById = async (req,res) => {
    try {
        const id = req.params.id;
        const akademija = await Akademija.findById(id);

        res.status(200).json({
            status:'success',
            data: {
                akademija,
            },
        });
    } catch(err) {
        res.status(500).json({
            status:'fail',
            message: err.message,
        });
    }
};

exports.updateAkademija = async (req,res) => {
    try {
        const akademija = await Akademija.findByIdAndUpdate(req.params.id,req.body,{
            new:true,
            runValidators:true,
        });
        res.status(200).json({
            status:'success',
            data: {
                akademija,
            }
        });
    } catch(err) {
        res.status(500).json({
            status:'fail',
            message:err.message,
        });
    }
};

exports.deleteAkademija = async(req,res) => {
    try {
        const deletedAkademija = await Akademija.findByIdAndDelete(req.params.id);

        res.status(200).json({
            status:'success',
            data: deletedAkademija,
        });  
    } catch(err) {
        res.status(500).json({
            status:'fail',
            message:err.message,
        });
    }
};