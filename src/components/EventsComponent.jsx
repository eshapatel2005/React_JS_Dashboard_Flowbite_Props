import React from 'react'
import {useState} from 'react'

function EventComponent() {
    
    //Event handling with form submission
    const handleSubmit = (e) => {     
        e.preventDefault()  
        alert("Form Submission Stopped")
    }

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
    
        {/* Event handling with form submission */}
        <form onSubmit={handleSubmit}>
            <button className="btn2" type="submit">Submit</button>     
        </form> 

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
        <div style={{backgroundColor: color,width: "100px",height: "100px",border: "2px solid black",marginTop: "20px"}} onMouseEnter={()=>setColor("green")} onMouseLeave={()=>setColor("gray")}></div>
    </>
  )
}

export default EventComponent