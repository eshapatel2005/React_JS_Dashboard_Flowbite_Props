import React from "react";

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
    </>
  );
}

export default MapComponents;
