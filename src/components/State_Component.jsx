import React from 'react'
import {useState} from 'react'

function State_Component() {
    const [count,setCount]=useState(0)

  return (
    <>
    <div>State_Component</div>
    
    <button className="btn1" onClick={()=>setCount(count+1)}>Increase</button>
    <h1>Count : {count}</h1>
    </>
  )
}

export default State_Component