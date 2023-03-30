const express = require('express');
const app = express();
const router = express.Router();
const fs = require('fs');

let cont = 0;
let cont2 = 1;

app.use(express.json());

router.get('/criar_arquivo_js', (req, res)=>{

    console.log('requisição para criar arquivo JSON solicitada');

    arquivo = JSON.stringify(req.body);

    if(cont==0){
        console.log('aaaaaaarg');

        fs.appendFile('./Arquivo JSON/nome_alunos.json', '[', (err)=>{
            console.log(err);
        });

        cont++;
    }else{
        fs.appendFile('./Arquivo JSON/nome_alunos.json', "\n"+arquivo+",", (err)=>{
            console.log(err);
        });

        cont++;
    }if(cont==10){

        fs.appendFile('./Arquivo JSON/nome_alunos.json', ']', (err)=>{
            console.log(err);
        });

        cont=0;
    }

    console.log(req.body);
    
    res.status(200).send('Tudo ocorreu bem!!');

})

module.exports = router;