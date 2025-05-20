const express = require('express')
const cokkieParser = require('cookie-parser')


const app = express()

app.use(cokkieParser())

app.get('/botarcokie',(req,res) => {

    res.cookie("cokieCaio","tenho 2 anus ahahhah",{maxAge:100000,httpOnly: true})
    res.send('deu certo')

})

app.get("/olharCokies",async(req,res)=>{

    const cokkieCaio = await req.cookies.cokieCaio

    console.log(cokkieCaio)

    if(cokkieCaio){
        res.send('cokiee achado',cokkieCaio)
        console.log(cokkieCaio)
    }else{
        res.send('nao tem coki')
    }

})























app.listen(3000,()=>{
    console.log('server rodando')
})


