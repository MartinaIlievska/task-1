const Kurs = require('../pkg/model/kursModel');

exports.createKurs = async (req,res) => {
    try {
        const newKurs = await Kurs.create(req.body);

        res.status(201).json({
            status:'success',
            data: {
                kurs: newKurs,
            },
        });
    } catch(err) {
        res.status(500).json({
            status:'fail',
            message: err.message,
        });
    }
};

exports.getAllKurs = async (req,res) => {
    try {
        const kurs = await Kurs.find();

        res.status(200).json({
            status:'success',
            data:{
                kursevi: kurs,
            }
        });
    } catch(err) {
        res.status(500).json({
            status:'fail',
            message:err.message,
        });
    }
};

exports.getKurs= async (req,res) => {
    try {
        const id = req.params.id;
        const kurs = await Kurs.findById(id);

        res.status(200).json({
            status:'success',
            data: {
                kurs,
            }
        });
    } catch(err) {
        res.status(500).json({
            status:'fail',
            message:err.message,
        });
    }
};

exports.updateKurs = async(req,res) => {
    try{
        const id= req.params.id;
        const kurs = await Kurs.findByIdAndUpdate(id, req.body,{
            new:true,
            runValidators:true,
        });
        res.status(200).json({
            status:'success',
            data: {
                kurs,
            }
        });
    } catch(err) {
        res.status(500).json({
            status:'fail',
            message:err.message,
        });
    }
};

exports.deleteKurs = async(req,res) => {
    try{
        const deletedKurs = await Kurs.findByIdAndDelete(req.params.id);
        res.status(200).json({
            status:'success',
            data: deletedKurs,
        });
    } catch(err) {
        res.status(500).json({
            status:'fail',
            message:err.message,
        });
    }
};