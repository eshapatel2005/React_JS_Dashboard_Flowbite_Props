import React from "react";
import { useState } from "react";

function MapComponents() {
  // Mapping an array of objects to JSX elements
  const numbers = [
    { id: 1, name: "Esha", age: 21 },
    { id: 2, name: "Avi", age: 15 },
  ];

  // Display products in a card-like format using map
  const products = [
    { id: 1, name: "iPhone 15", price: 75000 },
    { id: 2, name: "Samsung Galaxy S24", price: 70000 },
  ];

  // Mapping an array of objects with nested arrays to JSX elements
  const data = [{ id: 1, name: "ESHA", hobbies: ["Singing", "Traveling"] }];

  //Add new data to array uisng button click and display it using map
  const [users, setUsers] = useState(["Esha", "Raj"]);
  function addUser() {
    setUsers([...users, "Neha"]);
  }

  return (
    <>
      <div>
        {numbers.map((user) => (
          <p key={user.id}>
            {user.name}-{user.age}
          </p>
        ))}
      </div>

      {/* Display products in a card-like format using map */}
      <div>
        {products.map((item) => (
          <div
            key={item.id}
            style={{
              border: "1px solid black",
              padding: "10px",
              margin: "10px",
            }}
          >
            <h3>{item.name}</h3>
            <p>Price: ₹{item.price}</p>
          </div>
        ))}
      </div>

      {/* Display user data with nested arrays using map */}
      <div>
        {" "}
        {data.map((user) => (
          <div key={user.id}>
            {" "}
            <h2>{user.name}</h2>{" "}
            {user.hobbies.map((hobby, index) => (
              <li key={index}>{hobby}</li>
            ))}{" "}
          </div>
        ))}{" "}
      </div>

      {/* Add new data to array using button click and display it using map */}
      <div>
        <button onClick={addUser}>Add User</button>

        {users.map((user, index) => (
          <h2 key={index}>{user}</h2>
        ))}
      </div>
    </>
  );
}

export default MapComponents;
