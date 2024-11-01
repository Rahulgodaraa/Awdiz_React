import React, {  useState } from 'react'
import toast from 'react-hot-toast';
import { useNavigate } from 'react-router-dom';
import api from '../axios';
 

const Register = () => {
  
  const router = useNavigate();

  const [userdata , setUserdata] = useState([
    {
      name : '',
      email: '',
      password: '',
      confirmpassword: ''
    }
  ])

  function handleInput(event){
    setUserdata({...userdata , [event.target.name]: event.target.value})
    console.log(userdata);
    
  }

  async function  handleSubmit(event){
    event.preventDefault();
    if (userdata.name && userdata.email && userdata.password && userdata.confirmpassword){
      if (userdata.password !== userdata.confirmpassword) {
        toast.error("Password does not match");
      } else {
    try {


      let response = await api.post('/auth/register' , { userdata });
      
       

       response = {
        data : {success : true , message : "Registeration Success"}
      }
 
      if(response.data.success) {
        toast.success(response.data.message);
        router('/login');
      }
      }
     catch (error) {
      toast.error('Registeration unSuccess')
    }
  }
  } else {
    toast.error("All fields are required");
  }
  }

  return (
    <div className='RegisterParent'>
        <form onSubmit={handleSubmit} action="">
            <h1>Registeration Page</h1>
            <label htmlFor="">Name : </label><br/>
            <input onChange={handleInput}
             type="text" 
             name='name' 
             placeholder='Type your name...'
            
             /><br/>
            <label htmlFor="">Email :</label><br/>
            <input onChange={handleInput}  type="text" name='email' placeholder='Type your email...' 
           
             /><br/>
            <label  htmlFor="">Password :</label><br/>
            <input onChange={handleInput} type="password" name='password' placeholder='Type your password...' /><br/>
            <label htmlFor="">Confirm Password :</label><br/>
            <input onChange={handleInput} type="password" name='confirmpassword' placeholder='Type your password...' /><br/>
            <button>Register</button>
        </form> 
    </div>
  )
    
}

export default Register