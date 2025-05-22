const {Pool} = require('pg')

async function conection() {

    const  pool = new Pool({
        user:'postgres',
        host:"localhost",
        database:"dbprojetos",
        password:"senai",
        port:"5432"

    })
    const client = await pool.connect()
     console.log('conexão com o  feita db 😮')

     const resDb = await client.query('select now()') 

     console.log('tempo de conexão',resDb.rows[0])

     client.release()

     global.conection = pool

      return pool.connect()


    
}

conection()

async function cadastroUser(usuario){
    
    const client = await conection()
    
    const sql = 'insert into usuario(nome,email,senha) values($1,$2,$3)'

    const values = [usuario.nome,usuario.email,usuario.senha]   

    await client.query(sql,values)

}


async function usuario(id){

    const client = await conection()

    const sql = 'select id_user,nome,email,senha from usuario where id_user=$1'

    const values = [id]

    const user = await client.query(sql,values)
    console.log(user)

    return user.rows



}


async function  deleteUser(id){

    const client = await conection()

    const sql = "delete from usuario where id_user = $1"

    const values = [id]

    await client.query(sql,values)

}

module.exports ={
    cadastroUser,
    usuario,
    deleteUser
}