import React from 'react'
import {useState} from 'react'

function State_Component() {
    
    //useState with counter
    //const [count,setCount]=useState(0)
    
    //useState with user object
    const [user,setUser]=useState({
        name:"esha",
        age:21,
        city:"surat"
    });
    const updateUser=()=>{
        setUser({
            ...user,
            name:"john",
            age:25,
            city:"mumbai"
        })
    }
    console.log(user)

  return (
    <>
    {/*<div>State_Component</div>
    
    <button className="btn1" onClick={()=>setCount(count+1)}>Increase</button>
    <h1>Count : {count}</h1>*/}
    </>
  )
}

export default State_Component