import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Navbar from './components/Navbar'

function App() {
  const [corNav,setCorNav]=useState('container-navbar')

  return (
    <>
    <Navbar cor={corNav} />
    <button onClick={()=>{if(corNav =='container-navbar'){
      setCorNav('cor2')
 
    }else{
      setCorNav('container-navbar')


    }}}>mudar cor</button>
    
    </>
  )
}

export default App
