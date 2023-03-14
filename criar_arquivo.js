const express = require('express');
const app = express();
const fs = require("fs");

app.use(express.json());
const router = express.Router();

//cria arquivo com dados em formato json
router.get("/", (req, res)=>{

    console.log(req.body);

    arquivo = JSON.stringify(req.body);

    if(arquivo !="{}" && arquivo != "undefined"){

        fs.appendFile("teste.txt", "\n"+arquivo, (err)=>{
            console.log(err);
        });

    }

    res.status(200).send();
})

//criando urls com parametros 
router.get("/:id/:nome", (req,res)=>{

    console.log(req.params.id, req.params.nome);
    res.send(`ID: ${req.params.id} ${req.params.nome}`);

    if(req.params.id != null){

        fs.appendFile("teste.txt", "\nID:"+req.params.id+req.params.nome, (err)=>{
            console.log(err);
        })
    
    }

})

//criando uma pagina post para carregar informações
router.post("/mandar", (req,res)=>{
    res.status(200).send(req.body);
})

module.exports = router;