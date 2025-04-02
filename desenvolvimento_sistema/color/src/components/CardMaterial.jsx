import React from 'react'

import './CardMaterial.css'
function CardMaterial(props) {
    const {nome, quantidade, unidade} = props.material
  return (
    <div className='container-card'>
        <h2 className='tituloH2'>Nome:{nome}</h2>
        <p>quantidade: {quantidade}{unidade} </p>

    </div>
  )
}

export default CardMaterial