 import React, { useMemo, useState } from 'react'
 
 
 const UseMemo = () => {


    const [count , setCount] = useState(0);

const [Todo , setTodo] = useState([]);





const Heavy = useMemo(()=> { 
    return HeavyCal(count) } 
 , [count])


   return (
     <div>
      
        <h1>Todo</h1>
        <h1>
            {Todo.map((todo) => (
                <p>{todo}</p>
            ))}
        </h1>
        <button onClick={()=>setTodo([...Todo ,"Todo added"])}>Add</button>
        <h1>counter :- { Heavy } </h1>
        <h1>Count :- {count}</h1>
        <button onClick={()=>(
            setCount(count + 1)
             
        ) }>+</button>
     </div>


   )

   
   
 }

 function HeavyCal(count){
    console.log("Heavy");
    // var result = count
    for (let i = 1 ; i <  100000000; i++) {
        count = count + i      
    }
    return count;
 }
 
 export default UseMemo