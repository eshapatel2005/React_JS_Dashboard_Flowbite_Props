import React from 'react'

function Event_Component() {
    
    //Event handling with function
    function handleClick(){
        alert("Hello, you clicked the button!")
    }
  return (
    <>
        <div>events_component</div>
        <button className="btn1" onClick={handleClick}>Click Me</button>
        <button className="btn1" onClick={()=>alert("esha")}>CLICK</button>
    </>
  )
}

export default Event_Component