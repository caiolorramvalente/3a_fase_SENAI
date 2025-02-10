import React, { useState } from 'react'
import './Demo1.css'

function Demo1() {
    const [cornoMetro,setCornoMetro] = useState(0)

    function alertUser(){
        alert('corra para as colinas!!')
    }

    function incrementa(){
       
        setCornoMetro(cornoMetro+1)
    }
  return (

    <div className='divDemo1'> 
    <h2>Demo1</h2>
    <button onClick={alertUser}>clica em min</button>
    <button onClick={()=>{alert("não corra para as colinas!!")}}>Ex arrow Function </button><br />

    <div>
        
        <h3>Cornometro</h3>
        
    <button onClick={incrementa}>1+</button>
        <p>
        {cornoMetro}
        </p>
        
    <button onClick={()=>{setCornoMetro(cornoMetro-1)}}>💩💩💩</button>
    </div>

    

    
    
    </div>
  )
}

export default Demo1