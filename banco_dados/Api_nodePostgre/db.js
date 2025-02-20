// função de conexão com o banco
async function connect(){
    const {Pool} = require("pg")
    const pool = new Pool({ // declarando a variavel
    ConnectionString:process.env.ConnectionString// ler dados da conexão do banco que esta no .env
})
const client = await pool.connect()//retorna o resultado
console.log('Criou o pool da conexão')

}