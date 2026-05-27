import React from 'react'

function Event_Component() {
    function handleClick(){
        alert("Hello, you clicked the button!")
    }
  return (
    <>
        <div>events_component</div>
        <button className="btn1" onClick={handleClick}>Click Me</button>
    </>
  )
}

export default Event_Component