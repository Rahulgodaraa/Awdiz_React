import { useState } from "react";


function Counter() {
    // const count = 2;
    // count++;
    const [counter, setCounter] = useState(0);

    function Increment (){
        setCounter(counter + 1); //count++
    }

    function Decrement (){
      if(counter <= 0) {
        return
      }
        setCounter(counter - 1);
    }

    function Reset (){
        setCounter(0)
    }

    
    return(
    <div className="ParentCounter">
        <h1 id="Heading">Counter : {counter}</h1>
        <div id="Buttons">
        <button onClick={Decrement}> - </button>
        <button onClick={Increment}> + </button>
        <button onClick={Reset}> Reset </button>
        </div>
    </div>
    ); 
      
}

export default Counter