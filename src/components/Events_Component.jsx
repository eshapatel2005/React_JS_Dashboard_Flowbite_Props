import React from 'react'
import {useState} from 'react'

function Event_Component() {
    
    //Event handling with function
    function handleClick(){
        alert("Hello, you clicked the button!")
    }

    //Event handling with inline function
    const greetUser = (name) => {  
        alert(`Hello ${name}`);   
    }

    // SyntheticEvent 
    const handleEvent = (event) => { 
        console.log(event); 
    }

    //Toggle Light/Dark Mode
    const [mode,setMode]=useState("light");

    //color hover event
    const [color,setColor]=useState("blue");
        
  return (
    <>
        <div>events_component</div>

        {/* Event handling with function */}
        <button className="btn1" onMouseOver={handleClick}>Click Me</button>

        {/* Event handling with inline function */}
        <button className="btn1" onClick={()=>alert("esha")}>CLICK</button>

        {/* Event handling with inline function */}
        <button className="btn1" onClick={() => greetUser("ESHA")}>Greet</button> 

        {/* Event handling with inline function and passing event object */}
        <button className="btn1" onDoubleClick={handleEvent}>Click It</button>

        {/* Toggle Light/Dark Mode */}
        <button className='btn2' onClick={()=>setMode(mode==="light"?"dark":"light")}>Toggle Mode:{mode}</button>

        {/* Color hover event */}
        <div style={{width: "100px", height: "100px",backgroundColor:color,marginTop: "20px",border: "2px solid black"}} onMouseEnter={()=>setColor("red")} onMouseLeave={()=>setColor("pink")}></div>
    </>
  )
}

export default Event_Component