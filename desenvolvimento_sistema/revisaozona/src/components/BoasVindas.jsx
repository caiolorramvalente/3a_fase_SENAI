import React from 'react'

// function BoasVindas(props) {

function BoasVindas({nome,menssagem}) {
  return (
    <div className='container-boasVindas'>Ola {nome}
    <p>{menssagem}</p>
    {/* <p>{props.nome}</p>
    <p>{props.menssagem}</p> */}

    {/* <button onClick={()=>{console.log(props)}}>log</button> */}
    </div>

    
  )
}

export default BoasVindas