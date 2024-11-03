import React, {  useState } from 'react'
import toast from 'react-hot-toast';
import { useNavigate } from 'react-router-dom';
import api from '../axios';
 

const Register = () => {
  
  const router = useNavigate();

  const [userData , setuserData] = useState(
    {
      name : '',
      email: '',
      password: '',
      confirmpassword: ''
    }
  )

  function handleInput(event){
    setuserData({...userData , [event.target.name]: event.target.value})
    console.log(userData);
    
  }

  async function  handleSubmit(event){
    event.preventDefault();
    if (userData.name && userData.email && userData.password && userData.confirmpassword){
      if (userData.password !== userData.confirmpassword) {
       return toast.error("Password does not match");
      } 
    try {

      const { name, email, password , confirmpassword } = userData;
      const response = await api.post('/auth/Register' , { userData : {name , email , password , confirmpassword} });
       console.log(response);
       
 
      if(response.data.success) {
        toast.success(response.data.message);
        router('/login');
      } else {
        toast.error(response.data.message)
      console.log(response.data.message);

      }
     } catch (error) {
      toast.error('Registeration unSuccess')
 
       }
    } else {
      toast.error("all field front")
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
            <input type="submit" value="Register" />
        </form> 
    </div>
  )
    
}

export default Register