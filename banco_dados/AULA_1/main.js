// npm init
// npm install
//npm imstall express


import express, { json, query, request, response } from 'express' // importar os express para esse arquivo 
import { message } from 'statuses'

const app = express() // criar uma aplicação utilizando o framework express
console.log('hello word 😶‍🌫️🤢')

const veiculos = []


const carros=[

]
app.get('/veiculos',(request,response)=>{//<-- faz a requisição e responde 
    response.json(veiculos)

})

app.get('/veiculos/:cor',(request,response)=>{
    const {placa}= request.params //importar parametro para a url
    const veiculo = veiculos.find( v => v.placa === placa)

    if(veiculo){//<- verrifica se o veiculo foi encontradi
        response.json(veiculo)

    }else{
        response.status(404).json({message:'Veiculo não encontrado!'})
    }

})
app.post('/veiculos',(request,response)=>{
    const {placa,marca,modelo,ano}= request.body
    const veiculo = {placa,marca,modelo,ano}
    veiculos.push(veiculo)
    response.status(201).json({message:'Veiculo cadastrado com sucesso!'})


})
app.put('/veiculos',()=>{

})


