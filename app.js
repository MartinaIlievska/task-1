const express = require('express');
const app = express();

const database = require('./pkg/database/index')
const academijaC = require('./controler/akademijaControler');
const kursC = require('./controler/kursControler')
const viewControler = require('./controler/viewControler');
const auth = require('./controler/authControler');



app.use(express.urlencoded({extended:true}));
app.use(express.json());

database.dataBase();

app.get('/api/v1/akademija', auth.protect, academijaC.getAllAkademija);
app.get('/api/v1/akademija/:id',  auth.protect, academijaC.getAkademijaById);
app.post('/api/v1/akademija',  auth.protect, academijaC.createAkademija);
app.patch('/api/v1/akademija/:id',  auth.protect, academijaC.updateAkademija);
app.delete('/api/v1/akademija/:id', auth.protect, academijaC.deleteAkademija);


app.get('/api/v1/kurs', auth.protect, kursC.getAllKurs);
app.get('/api/v1/kurs/:id', auth.protect, kursC.getKurs);
app.post('/api/v1/kurs', auth.protect, kursC.createKurs);
app.patch('/api/v1/kurs/:id', auth.protect, kursC.updateKurs);
app.delete('/api/v1/kurs/:id', auth.protect, kursC.deleteKurs);

app.get('/welcome', viewControler.viewKursevi);
app.get('/test', viewControler.viewTest);
app.get('/login', viewControler.getLoginForm);

app.listen(process.env.PORT, (err)=> {
    if(err) return err.message;
    console.log("Succesfully started server");
});