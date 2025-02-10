import { useState } from 'react'
import Aviso from './Aviso'
import './Body.css'
import Demo1 from './Demo1'
import Demo2 from './Demo2'

function Body() {
  const [abrir,setAbrir] = useState(false)
  return (
    
    <div className='corpo'>
        <h1>Empresa de logo</h1>
        <Demo1 />
        <Aviso />
        <Demo2 />
        
        
        </div>
        
    
    

  )
}

export default Body