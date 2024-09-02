import React, { useState } from 'react'


const Login = () => {

  const [userdata , setUserdata] = useState([
    {
      
      email: '',
      password: '',
      
    }
  ])
  
  function handleInput(event){
    setUserdata({...userdata , [event.target.name] : event.target.value})
    console.log(userdata);
    
  }

  function handleSubmit(event){
         
  }

  return (
    <form onSubmit={handleSubmit} action="">
            <h1>Registeration form</h1>  
            <label htmlFor="">Email :</label><br/>
            <input onChange={handleInput}  type="text" name='email' placeholder='Type your email...' 

             /><br/>
            <label  htmlFor="">Password :</label><br/>
            <input onChange={handleInput} type="password" name='password' placeholder='Type your password...' required /><br/>

            <button>Login</button>
        </form>
  )
}

export default Login