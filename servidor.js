const express = require('express');
const app = express();
const fs = require("fs");
const criarArquivo = require("./criar_arquivo");

app.use(express.json());

app.get("/teste", (req,res)=>{
    res.status(200).send("<h1>bem vindo ao meu server</h1>");
})

app.use("/criar_arquivo", criarArquivo);

app.listen(3000, (req,res)=>{
    console.log("Server iniciado");
})