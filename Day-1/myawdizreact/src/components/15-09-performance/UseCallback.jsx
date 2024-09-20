import React, { useCallback, useState } from 'react'
import CallbackTodo from './CallbackTodo';

const UseCallback = () => {
    const [counter , setCounter ] = useState(1);
    const [todos , setTodos ] = useState([]);
    //  function  AddnewTodo(){
    //     (setTodos([...todos,'New Task']))
    // }
   const AddnewTodo = useCallback(() => {
        (setTodos([...todos,'New Task']))
    },[todos])
  return (
    <div>UseCallback

        <h1 >Counter:- {counter}</h1>
        <button onClick={()=>(setCounter(counter + 1))}>+</button>
       <CallbackTodo todos = {todos} buttonx = {AddnewTodo}/>
        

    </div>
  )
}

export default UseCallback
