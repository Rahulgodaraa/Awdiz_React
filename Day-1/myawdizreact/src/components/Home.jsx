import React, { useContext } from 'react'
import { AuthContext } from '../context/AuthContext';
import "../components/css/Navbar.css"
import { Overallcontext } from './11-09/OverallTheme';

const Home = () => {

  const {state , dispatch} = useContext(AuthContext);


  function Increment() {
    dispatch({type : "Increment" , payload: 'lightmode'});
  }

function themeChange() {
  if(state.mode == 'light') {
     dispatch({type : 'Dark'})
  
} else  {
  dispatch({type : 'Light'})
}

}
  return (
    <div className='ParentHome'
    style={{
      backgroundColor: state.mode == "light" ? "white" : "black",
      color: state.mode == "light" ? "black" : "white",
    }}
    >
      <button onClick={themeChange}>Theme Change</button>
      <h1> Welcome {state?.user?.name} to HomePage</h1>
      <h2>Counter : {state?.counter}</h2>
       

      <button onClick={Increment}>+</button>
    
    </div>
  )
}

export default Home;