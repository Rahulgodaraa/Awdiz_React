import { useEffect , useState } from "react";

function UseEffect2(){
    const [count , setCount] = useState(1);
    function Increment(){
        setCount(count + 1)
    }

    useEffect(() => {
        console.log("hi From useEffect2");
        
    } ,  [])

    return (
        <div><h1>This Is UseEffect2</h1>
        <h1>Counter:- {count}</h1>
        <button onClick={Increment}>+</button>
        </div>
    )
}

export default UseEffect2;