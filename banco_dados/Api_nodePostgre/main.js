require('dotenv').config()// carrega as variaveis do .env
const db = require("./db")
const port = process.env.PORT // armazena a porta do .ENV
const express = require('express')//chama o express
const app = express()//Habilita o espress no app



app.get('/',(req,res)=>{
    res.status(201).json({
        message:'funcionando😱😱😱💩🚗🤢'
    })

})

app.get('/usuario',async(req,res)=>{

    try{
        const clientes = await db.select()
        res.status(201).json({message:clientes})

    }catch(ero){
        console.log('o erro foi :'+ero)
    }
})




app.listen(port)
console.log('Back end rodando')
