import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Materiais from './pages/Materiais'


function App() {
  const [corNav,setCorNav]=useState('container-navbar')

  return (
    <>
    <Materiais />
    
    </>
  )
}

export default App
