const express = require('express')
const App = express()



App.get("/",(req,res)=>{
res.json("teste para ver se esta rodando")
})
















App.listen(3000,()=>{
    console.log("server rodando na porta 3000")
})