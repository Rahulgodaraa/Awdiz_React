 import React, { useMemo, useState } from 'react'
import Counter from '../22-08/Counter';
 
 const UseMemo = () => {


    const [count , setCount] = useState(0);

const [Todo , setTodo] = useState([]);





const heavy = useMemo(()=> {
    heavyCal(count);
} , [count])


   return (
     <div>
        <h1>heavy :- {heavy}</h1>
        <h1>Todo</h1>
        <h1>
            {Todo.map((todo) => (
                <p>{todo}</p>
            ))}
        </h1>
        <button onClick={()=>setTodo([...Todo ,"Todo added"])}>Add</button>
        <h1>counter :- {count}</h1>
        <button onClick={()=>(
            setCount(count + 1)
           
            
        )}>+</button>
     </div>


   )

   
   function heavyCal(count){
    for (let i = 0 ; i<= 1000000; i++) {
        count += i 
    }
    return count
 }
 }

 
 
 export default UseMemo