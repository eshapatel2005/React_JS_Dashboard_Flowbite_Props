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

    // Logical OR operator
    const userName = "";

    return (
      <>
        <div>
          {/* ternary operator */}
          {isLoggedIn ? <h2>Welcome!</h2> : <h2>Login First</h2>}

          {/* if else */}
          {message}

          {/* Logical AND operator */}
          {isLoading && <p>Loading...</p>}

          {/* Logical OR operator */}
          <h1>Hello {userName || "Guest"}</h1>

        </div>
      </>

    )
}

export default ConditionalComponents