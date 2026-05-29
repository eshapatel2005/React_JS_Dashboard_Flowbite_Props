import React from "react";

function MapComponents() {

    // Mapping an array of objects to JSX elements
    const numbers=[
        {id:1,name:"Esha",age:21},
        {id:2,name:"Avi",age:15}
    ]

  return (
    <>
      <div>
        {numbers.map((user)=>(
            <p key={user.id}>{user.name}-{user.age}</p>
        ))}
      </div>
    </>
  );
}

export default MapComponents;
