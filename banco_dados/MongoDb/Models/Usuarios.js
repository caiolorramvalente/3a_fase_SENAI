const mongoose = require('mongoose') 


const usuarioSchema = new mongoose.Schema({
    nome:{type:String,required:true},
    email:{type:String,required:true},
    senha:{type:String,required:true},
    endereco:{
        rua:{type:String,required:true},
        numero:{type:Number,required:true}
    },
    dataCriacao: { type: Date, default: Date.now }
})

const Usuario = mongoose.model('Usuario',usuarioSchema)

module.exports = Usuario 

