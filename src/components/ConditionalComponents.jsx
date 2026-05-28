import React from 'react'
import {useState} from 'react'

function ConditionalComponents() {

    // Conditional rendering using ternary operator
    const isLoggedIn = true; 
    return isLoggedIn ? <div>Welcome!</div> : <div>Please log in.</div>

    //if-else statement
    {/*const user=true;
    if(user)
    {
        return <div>Welcome, User!</div>
    }
    else
    {
        return <div>Nope!! Log in first.</div>
    }*/}

  return (
    <div>Conditional Components</div>

  )
}

export default ConditionalComponents