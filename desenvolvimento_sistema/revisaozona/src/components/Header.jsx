import { useState } from "react"
import './Header.css'
import BoasVindas from "./BoasVindas"
import { FaConnectdevelop } from "react-icons/fa";

function Header() {
const [usuario,setUsuario] = useState("")
const [menssagem,setMensagem]=useState('Você  e o nosso clinet de numero 24 Parabens!!!!💩')


 function fazerLogin(){

  let nome = prompt('digite seu nome de Usuario')
  setUsuario(nome)
 }

  return (
    
    <div className="containerHearder">
    <FaConnectdevelop  className="p"/>
    <p className="p1">link 1</p>
    <p className="p1">link 2</p>
    <p className="p1">link 3</p>
    { usuario ? <BoasVindas  nome={usuario} menssagem={menssagem}/>: <button onClick={fazerLogin}>logar</button>}{/* <-- enviando  informacoes por meio desse component que é pai do componemte Boasvindas */ }
    </div>
    

    
    
    
    
  )
}

export default Header