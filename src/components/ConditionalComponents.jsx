import React from 'react'
import {useState} from 'react'

function ConditionalComponents() {

    // ternary
    const isLoggedIn = true;

    // if else
    let message;
    const userLoggedIn = true;
    if(userLoggedIn)
    {
      message = <h1>Welcome User!</h1>
    }
    else
    {
      message = <h1>Please Login First!</h1>
    }

    // Logical AND operator
    const isLoading=true;


    return (
      <>
        <div>
          {/* ternary operator */}
          {isLoggedIn ? <h2>Welcome!</h2> : <h2>Login First</h2>}

          {/* if else */}
          <h1>{message}</h1>

          {/* Logical AND operator */}
          {isLoading && <p>Loading...</p>}

        </div>
      </>

    )
}

export default ConditionalComponents