require('dotenv').config()
const mongoose = require('mongoose')
const express=require('express')
const app = express()
const port = process.env.PORT
const mongoUrl = process.env.MONGODB
const Usuario = require('./Models/Usuarios.js')
app.use(express())

mongoose.connect(mongoUrl, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => console.log('Conectado ao MongoDB'))
  .catch(err => console.log('Erro ao conectar com o MongoDB:', err))


app.get('/teste', async(req,res) => {
    try{
        const usuarios = await Usuario.find()
        console.log(usuarios)
        res.json(usuarios)


    }catch(erro){
        console.log(erro)

    }

})









app.listen(port,(req,res)=>{
    console.log('server rodando na porta: '+port);
    
    
})