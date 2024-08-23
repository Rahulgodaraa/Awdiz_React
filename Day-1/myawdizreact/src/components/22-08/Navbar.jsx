import React from 'react'
import { useNavigate } from 'react-router-dom'
import   "../css/Navbar.css"

const Navbar = () => {
    const router = useNavigate();

    function routeToHome(){
       router("/")
    }

    function routeToLogin(){
        router("/login")
     }
     function routeToRegister(){
      router("/register")
   }
   function routeToCounter(){
    router("/counter")
 }
 function routeTouseEffect1(){
   router("/useEffect1")
}

function routeTouseEffect2(){
   router("/useEffect2")
}

function routeTouseEffect3(){
   router("/useEffect3")
}

function routeTouseEffect4(){
   router("/useEffect4")
}
  return (
    <div className="Parentdiv">
        <h1 onClick={routeToHome}>Home</h1>
        <h1 onClick={routeToLogin}>Login</h1>
        <h1 onClick={routeToRegister}>Register</h1>
        <h1 onClick={routeToCounter}>Counter:</h1>
        <h1 onClick={routeTouseEffect1}>useEffect1</h1>
        <h1 onClick={routeTouseEffect2}>useEffect2</h1>
        <h1 onClick={routeTouseEffect3}>useEffect3</h1>
        <h1 onClick={routeTouseEffect4}>useEffect4</h1>



         



    </div>
  )
}

export default Navbar