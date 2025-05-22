const express = require('express')
const app = express()
require('dotenv').config({path:".env"})
const db = require('../db/db.js')

const port = process.env.PORT
app.use(express.json())

app.post('/insertClient',async(req,res)=>{

    const user = req.body
    console.log(user)

    await db.cadastroUser(user)

    console.log('deu certo')
    res.json('deu certo')

    


})

app.get("/usuario/:id", async(req,res)=>{

    const id = req.params.id

    const  usuario = await db.usuario(id)

    res.json(usuario)

})

app.delete("/delete/:id",async(req,res)=>{

    const id = req.params.id 
    
    await db.deleteUser(id)

    res.json("usario apagado com sucesso")

    


})




app.listen(1000,()=>{
    console.log('rodando na porta 1000')
})