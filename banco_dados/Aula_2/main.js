// requerer/chamar o express é  o body-parser

const bodyParser = require('body-parser')
const { error } = require('console')
const express = require('express')
const { request } = require('http')

// inicializar o app
const app = express()

const PORT = 3000

app.use(bodyParser.json())
let tarefas = [
    {id:1,descricao:'estudar Nodejs'},
    {id:2,descricao:'Criar api com express'}

]
app.get('/',(req,res)=>{

    try {res.json({tarefas})
    
     }catch(err){
        console.log(err)
     }
    
})
app.post('/Tarefas',(req,res)=>{
    const {descricao} = req.body

    try{
        if(!descricao){// ! negação,diferente de 
        return res.status(400).json({error:'descrição e necessaria'})

    } const novaTarefa={
        id:tarefas.length + 1,
        descricao:descricao
    }

    tarefas.push(novaTarefa)
    res.status(201).json(tarefas)
    }catch(err){
        console.log(err)


    }
})


app.delete('/tarefas/:id',(req,res)=>{

    const {id} = req.params

    const index = tarefas.findIndex(t => t.id === parseInt(id))

    if(index === -1){
        res.status(404).json({error:'terefa não encontrada'})

    }
    tarefas.splice(index,1)
    res.status(204).json('tarefa excluida com sucesso')

})

app.patch('/tarefas/:id',(req,res)=>{

    const {id} = req.params
    const {novaDescricao}=req.body

   
    const index = tarefas.findIndex(t => t.id === parseInt(id))

    if(index== -1){
        return console.log("Tarefa não encontrada")


    }else{
        
        tarefas[index].descricao=novaDescricao
        res.status(204).json({mensagem:'terefa atualizada com sucesso'})
    }
    


    
})

app.listen(PORT,()=>{
    console.log('servidor rodando na porta :'+PORT)
})