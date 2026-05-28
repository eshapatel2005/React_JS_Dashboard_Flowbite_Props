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

    // Switch case
    const status = "pending";
    let statusMessage;
    switch(status)
    {
      case "active":
        statusMessage = <p>Status: Active</p>;
        break;
      
      case "inactive":
        statusMessage = <p>Status: Inactive</p>;
        break;  
      
      case "pending":
        statusMessage = <p>Status: Pending</p>;
        break;

      default:
        statusMessage = <p>Status: Unknown</p>;
    }

    return (
      <>
        {/* ternary operator */}
        {isLoggedIn ? <h2>Welcome!</h2> : <h2>Login First</h2>}

        {/* if else */}
        {message}

        {/* Logical AND operator */}
        {isLoading && <p>Loading...</p>}

        {/* Logical OR operator */}
        <h1>Hello {userName || "Guest"}</h1>

        {/* Switch case */}
        {statusMessage}

      </>

    )
}

export default ConditionalComponents