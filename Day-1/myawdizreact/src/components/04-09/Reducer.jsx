import React, { useReducer } from 'react'
import "../css/Navbar.css"

function Reducerfun(state , action ) {
        switch(action.type) {
            case  "Increment" : 
            return { counter : state.counter +  1 }
            case  "Decrement" :  
            return { counter : state.counter -  1 } 
            case  "Reset" : 
            return  { counter : 0} 
        }


}

const InitialState = {counter : 1};

const Reducer = () => {

    const [state , dispatch] = useReducer(Reducerfun , InitialState);


    function Increment() {
      dispatch({type : "Increment"})
    }

    function Decrement() {
        if (state.counter > 0){
        dispatch({type : "Decrement"})
        }
      }

      function Reset() {
        dispatch({type : "Reset"})
      }

  return (
    <div className='ParentReducer'>
          <div>
            <h1>Counter : {state.counter} </h1></div>
          <div>
          <button onClick={Increment}>+</button>
          <button onClick={Decrement}>-</button>
          <button onClick={Reset}>Reset</button>
          </div>
    </div>
  )
}

export default Reducer