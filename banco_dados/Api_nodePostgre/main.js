require('dotenv').config()// carrega as variaveis do .env
const port = process.env.PORT // armazena a porta do .ENV
const express = require('express')//chama o express
const app = express()//Habilita o espress no app


app.get('/',(req,res)=>{
    res.status(201).json({
        message:'funcionando😱😱😱💩🚗🤢'
    })

})




app.listen(port)
console.log('Back end rodando')
