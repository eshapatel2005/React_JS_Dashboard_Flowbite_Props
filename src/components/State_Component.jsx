import React from 'react'
import {useState} from 'react'

function State_Component() {
    
    //useState with counter
    {
    {/*const [count,setCount]=useState(0)
    
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
    console.log(user)*/}

    //useState with array of objects
    const [todos,setTodos]=useState([
        {id:1,title:"learn react",completed:false},
        {id:2,title:"learn javascript",completed:true},
        {id:3,title:"learn css",completed:false}
    ]);
    const toggleTodo=(id)=>{
        setTodos(todos.map(todo=>todo.id===id?{...todo,completed:!todo.completed}:todo))
    }
    console.log(todos)  

    //useState with form input
    {/*const [name,setName]=useState("");
    const handleNameChange=(e)=>{
        setName(e.target.value)
    }
    console.log(name)*/}

  return (
    <>
    <div>State_Component</div>
    
    <button className="btn1" onClick={()=>setCount(count+1)}>Increase</button>
    <h1>Count : {count}</h1>
    </>
  )
}

export default State_Component