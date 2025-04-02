import Navbar from "../components/Navbar"
import { useContext } from "react"
import { GlobalContext } from "../contexts/GlobalContext"

function Contato() {
  const {usuarioLogado, setUsuarioLogado}=useContext(GlobalContext)
  return (
    <div>
        <Navbar />
      <h1>Contato</h1>
      <p>falecomagente {usuarioLogado}falecomagente falecomagente falecomagente falecomagente falecomagente falecomagente falecomagente falecomagente </p>
    </div>
  )
}

export default Contato
