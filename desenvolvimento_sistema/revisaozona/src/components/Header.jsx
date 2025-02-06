import { useState } from "react"
import './Header.css'

function Header() {
const [botao,setBotao] =useState('')

  return (
    
    <div className="containerHearder">
    <p className="p">Shrek🤢</p>
    <p>link 1</p>
    <p>link 2</p>
    <p>link 3</p>
    </div>
    

    
    
    
    
  )
}

export default Header