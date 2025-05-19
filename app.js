const express = require('express');
const database = require('./pkg/database/index')
const academijaC = require('./controler/akademijaControler');
const kursC = require('./controler/kursControler')

const app = express();

app.use(express.urlencoded({extended:true}));
app.use(express.json());

database.dataBase();

app.get('/api/v1/akademija', academijaC.getAllAkademija);
app.get('/api/v1/akademija/:id', academijaC.getAkademijaById);
app.post('/api/v1/akademija',academijaC.createAkademija);
app.patch('/api/v1/akademija/:id', academijaC.updateAkademija);
app.delete('/api/v1/akademija/:id', academijaC.deleteAkademija);


app.get('/api/v1/kurs', kursC.getAllKurs);
app.get('/api/v1/kurs/:id', kursC.getKurs);
app.post('/api/v1/kurs', kursC.createKurs);
app.patch('/api/v1/kurs/:id', kursC.updateKurs);
app.delete('/api/v1/kurs/:id',kursC.deleteKurs);

app.listen(process.env.PORT, (err)=> {
    if(err) return err.message;
    console.log("Succesfully started server");
});