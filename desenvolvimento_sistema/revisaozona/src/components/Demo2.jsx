import React, { useState } from 'react'

function Demo2() {
  const [test,setTest]=useState('')
 
  return (
    <div ><h1>Demo2</h1>
    <img src="./img/bone.svg" alt="" className='imgDemo' />
    <p onClick={(event)=>{console.log(event)}}>oe</p>
    {test}
    <img src="https://i.im.ge/2025/02/18/HyJJR4.panda.jpeg" alt="" />
    
    </div>
  )
}

export default Demo2