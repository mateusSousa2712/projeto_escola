const express = require('express');
const app = express();

const rota_um = require('../Bibliotech/Rotas/rota_um.js')

app.use(express.json());
app.use(rota_um);

app.listen('3000', (req, res)=>{
    console.log('O servidor foi iniciado');
});