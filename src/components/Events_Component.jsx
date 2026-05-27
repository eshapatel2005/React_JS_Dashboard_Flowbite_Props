import React from 'react'

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
        
  return (
    <>
        <div>events_component</div>

        {/* Event handling with function */}
        <button className="btn1" onClick={handleClick}>Click Me</button>

        {/* Event handling with inline function */}
        <button className="btn1" onClick={()=>alert("esha")}>CLICK</button>

        {/* Event handling with inline function */}
        <button className="btn1" onClick={() => greetUser("ESHA")}>Greet</button> 

        {/* Event handling with inline function and passing event object */}
        <button className="btn1" onClick={handleEvent}>Click It</button>
    </>
  )
}

export default Event_Component