import React from 'react'
import {useState} from 'react'

function State_Component() {

    //useState with string
    const [text, setText] = useState(" ")

    //useState for show/hide password
    const [show, setShow] = useState(false)

    //useState with boolean
    const [isOpen, setIsOpen] = useState(false)

    //useState with counter
    const [count,setCount]=useState(0)
    
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
    const [name,setName]=useState("");
    const handleNameChange=(e)=>{
        setName(e.target.value)
    }
    console.log(name)

  return (
    <>
    <div>State_Component</div>

    {/* //useState with string */}
    <input type="text" placeholder="Type something..." value={text} onChange={(e) => setText(e.target.value)}/>
    <h2>You Typed: {text}</h2>
    <br></br>
    {/* //useState with counter */} 
    <h1>Count : {count}</h1>
    <button className="btn1" onClick={()=>setCount(count+1)}>Increase</button>
    <button className="btn1" onClick={()=>setCount(count-1)}>Decrease</button>
    <button className="btn1" onClick={()=>setCount(0)}>Reset</button>
    <br></br>
    <br></br>

    {/* useState with boolean */}
    <button className="btn1" onClick={() => setIsOpen(!isOpen)}>   {isOpen ? "Close" : "Open"} </button> 
    <h1>{isOpen}</h1>

    {/* useState for show/hide password */}
    <input type={show ? "text" : "password"} />       
    <button className="btn2" onClick={() => setShow(!show)}>{show ? "Hide" : "Show"} Password</button> <br></br>

    </>
  )
}

export default State_Component