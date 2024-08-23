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

  return (
    <div className="Parentdiv">
        <h1 onClick={routeToHome}>Home</h1>
        <h1 onClick={routeToLogin}>Login</h1>
        <h1 onClick={routeToRegister}>Register</h1>
        <h1 onClick={routeToCounter}>Counter:</h1>
    </div>
  )
}

export default Navbar