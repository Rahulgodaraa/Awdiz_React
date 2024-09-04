import React, { useState } from 'react'
import   "../components/css/Navbar.css"
import toast, { Toaster } from 'react-hot-toast'



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
    event.preventDefault();
    if (userdata.email && userdata.password) {
      const response = {
        data : {success : true , message : "Login Success"}
      }
      if (response.data.success) {
        toast.success(response.data.message);
      }
    } else {
      toast.error('All Field Required');
    }
        
  }

  return (
    <div className='RegisterParent'>
    <form onSubmit={handleSubmit} action="">
            <h1>Login Page</h1>  
            <label htmlFor="">Email :</label><br/>
            <input onChange={handleInput}  type="text" name='email' placeholder='Type your email...' 

             /><br/>
            <label  htmlFor="">Password :</label><br/>
            <input onChange={handleInput} type="password" name='password' placeholder='Type your password...' /><br/>

            <button>Login</button>
        </form>
        </div>
  )
}

export default Login