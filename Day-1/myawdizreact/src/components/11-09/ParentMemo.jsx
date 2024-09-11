import React, { useState } from 'react'
import Childrenmemo from './Childrenmemo'
import '../css/Navbar.css';

const ParentMemo = () => {

    const [count1 , setCount1] = useState(0);
    const [count2 , setCount2] = useState(0);




  return (
    <div className='Parentmemo'>ParentMemo
        <h1>counter1:-{count1}</h1>
        <button onClick={()=> ( setCount1(count1 + 1))}>increment1</button>
        <h1>counter2:-{count2}</h1>
        <button onClick={()=> ( setCount2(count2 + 1))}>increment2</button>


        <Childrenmemo prop = {count2}/>
    </div>
  )
}

export default ParentMemo