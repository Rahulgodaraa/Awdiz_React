import React, { useContext, useState } from 'react';
import "../components/css/Navbar.css";
import toast from 'react-hot-toast';
import api from '../axios';
import { AuthContext } from '../context/AuthContext';
import { useNavigate } from 'react-router-dom';

const Login = () => {
  const { dispatch } = useContext(AuthContext);
  const route = useNavigate();

  const [userData, setUserData] = useState({
    email: '',
    password: '',
  });

  function handleInput(event) {
    setUserData({ ...userData, [event.target.name]: event.target.value });
    console.log(userData);
  }

  async function handleSubmit(event) {
    event.preventDefault();
    if (userData.email && userData.password) {
      try {
        const {name , email , password} = userData
        const response = await api.post('/auth/login', { userData : {email , name , password} });
        if (response.data.success) {
          dispatch({ type: "login", payload: response.data.userData });
          toast.success(response.data.message);
          route("/");
        } else {
          toast.error(response.data.message);
        }
      } catch (error) {
        toast.error('Login failed: ' + (error.response?.data.message || error.message));
      }
    } else {
      toast.error('All fields are required');
    }
  }

  return (
    <div className='RegisterParent'>
      <form onSubmit={handleSubmit}>
        <h1>Login Page</h1>
        <label htmlFor="">Email:</label><br />
        <input onChange={handleInput} type="email" name='email' placeholder='Type your email...' /><br />
        <label htmlFor="">Password:</label><br />
        <input onChange={handleInput} type="password" name='password' placeholder='Type your password...' /><br />
        <input type="submit" value="Login" />
      </form>
    </div>
  );
}

export default Login;
