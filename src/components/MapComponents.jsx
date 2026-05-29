import React from 'react'

function MapComponents() {

    //map function to render list of items 
    const numbers=[1,2,3,4,5]
    const listItems=numbers.map((number)=><li key={number}>{number}</li>)



  return (
    <div>
      <h2>Map Components </h2>
      <ul>
        {listItems}
      </ul>
    </div>
  )
}

export default MapComponents