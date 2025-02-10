import React, { useState } from 'react'

function Demo2() {
  const [test,setTest]=useState('')
 
  return (
    <div ><h1>Demo2</h1>
    <img src="./img/bone.svg" alt="" className='imgDemo' />
    <p onClick={(event)=>{console.log(event)}}>oe</p>
    {test}
    
    </div>
  )
}

export default Demo2