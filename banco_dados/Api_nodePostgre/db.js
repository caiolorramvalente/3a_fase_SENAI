// função de conexão com o banco
const {Pool} = require("pg")
const pool = new Pool({ // declarando a variavel
connectionString:process.env.CONNECTION_STRING   // ler dados da conexão do banco que esta no .env é tem que ser minusculo o connectionString que e padrao na documentação do pg
})

async function connect(){
    if(global.connection)

        return global.connection.connect()
    
    const {Pool} = require("pg")
    const pool = new Pool({ // declarando a variavel
    connectionString:process.env.CONNECTION_STRING   // ler dados da conexão do banco que esta no .env é tem que ser minusculo o connectionString que e padrao na documentação do pg
})
//await:a conexão pode levar um tempo e quero ir pra linha de baixo somente
const client = await pool.connect()//retorna o resultado
console.log("Criou o pool da conexão")

const res = await client.query("SELECT now()") // comando para o banco para saber se esta
console.log(res.rows[0])
client.release() 

global.connection = pool
return pool.connect()
}
connect()
 // listagemde Usuarios
 
 async function select(){// selecionar os clientes do banco de dados

    const client =  await connect()//so vai ser efetuada quando ser cocretizar essa linha 
    const res = await client.query('select * from usuario')
    console.log(res)
    return res.rows

    
 }
 select()
 module.exports ={
    select
 }