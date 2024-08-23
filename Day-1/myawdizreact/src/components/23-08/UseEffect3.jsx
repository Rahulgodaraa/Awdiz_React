import { useEffect , useState } from "react";

function UseEffect3(){
    const [count , setCount] = useState(1);
    const [count2 , setCount2] = useState(1);

    function Increment() {
        setCount(count + 1);
    }
    function Increment2() {
        setCount2(count2 + 1);
    }

    useEffect(() => {
console.log("Effect from three has triggerd");

    } , [count2])

    return(
        <div>
            <h1>This is UseEffect3</h1>
            <h1  >Counter1:- {count}</h1>
            <button onClick={Increment}>+</button>
            <h1  >Counter2:- {count2}</h1>
            <button onClick={Increment2}>+</button>
        </div>
    )
}

export default UseEffect3