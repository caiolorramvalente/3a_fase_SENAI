import React, { use, useEffect, useState } from 'react'
import './Materiais.css'
import CardMaterial from '../components/CardMaterial'

function Materiais() {
    const [materiais,setMateriais]=useState([])
    const [inptNome,setInptNome] =useState('')
    const [inptQuantidade,setInptQuantidade] =useState('')
    const [inptUnidade,setInptUnidade] =useState('')

    function CadastrarMaterial(){

        const m = {
            id:Date.now(),
            nome:inptNome,
            quantidade:Number(inptQuantidade),
            unidade:inptUnidade
        }
        console.log(m)

        setMateriais([...materiais,m])
        
    }
    useEffect(()=>{
        console.log(materiais)

    },[materiais])
    


  return (
    <div className='container-materiais'>
      <h1 className='tituloH1'>Materiais</h1>
      <h2 className='subTitulo'>Cadastro de Materiais:</h2>
      

        <div className='inputContainer'>
            <label htmlFor="" className='lblMaterial'>Nome: </label>
            <input type="text" onChange={(event)=>{setInptNome(event.target.value)}} className='inpt'/>
            
        </div>

        <div className='inputContainer'>
            <label htmlFor="" className='lblMaterial'>Quantidade: </label>
            <input type="text" onChange={(e)=>{setInptQuantidade(e.target.value)}} className='inpt' />
            
        </div>

        <div className='inputContainer'>
            <label htmlFor="" className='lblMaterial'>Unidade: </label>
            <input type="text" onChange={(e)=>{setInptUnidade(e.target.value)}} className='inpt'/>
            
        </div>
      
      <button className='btnCadastro' onClick={CadastrarMaterial}>Cadastrar</button>
         <h1>estoque</h1>
      <div>
        
        <div className='cardsMateriais'>
          {materiais.map((material)=>( <CardMaterial key={material.id} material={material}/>))}
         </div>
      
        


      </div>
    </div>
  )
}

export default Materiais