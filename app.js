const express = require ('express');
const app = express();
const path = require('path');

const numeroPuerto = 3000;
app.listen(numeroPuerto, ()=>{
    console.log('Servidor funcionando en el puerto ' + numeroPuerto);
})
app.get('/', (req, res)=>{
    res.sendFile(path.resolve('views/home.html'))
})