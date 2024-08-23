import logo from './logo.svg';
import './App.css';
import {Route , Routes} from 'react-router-dom';
import Home from './components/Home';
import Login from './components/Login';
import Register from './components/Register';
import Navbar from './components/22-08/Navbar';
import Counter from './components/22-08/Counter';

 

function App() {
  return (
    <>
    <Navbar/>
    <Routes>
      <Route path="/" element = {<Home />} />
      <Route path="/login" element = {<Login />} />
      <Route path="/register" element = {<Register />} />
      <Route path='/counter' element= {<Counter/> }/>
    </Routes>
    </>
  );
}

export default App;
