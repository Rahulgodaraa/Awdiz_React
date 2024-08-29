import React from 'react'

const PropDrilling = ({students , counter , increm}) => {
console.log(students);

  return (
    <div><h1>{counter}</h1>
    <button onClick={increm}>+</button></div>
    
  )
}

export default PropDrilling