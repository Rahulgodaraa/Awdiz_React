import logo from './logo.svg';
import './App.css';
import {Route , Routes} from 'react-router-dom';
import Home from './components/Home';
import Login from './components/Login';
import Register from './components/Register';
import Navbar from './components/22-08/Navbar';
import Counter from './components/22-08/Counter';
import UseEffect1 from './components/23-08/UseEffect1';
import UseEffect2 from './components/23-08/UseEffect2';
 import UseEffect3 from './components/23-08/UseEffect3';
import UseEffect4 from './components/23-08/UseEffect4';
import UseParams from './components/25-08/UseParams';
import PropDrilling from './components/25-08/PropDrilling';
import { useState } from 'react';
import Mapping from './components/25-08/Mapping';
import Todo from './components/25-08/Todo';
import Registeration from './components/30-08/Registeration';
import DynamicCss from './components/30-08/DynamicCss';
import Reducer from './components/04-09/Reducer';
import UseMemo from './components/05-09/UseMemo';
import ParentMemo from './components/11-09/ParentMemo';
 

function App() {

  // const [std , setStd] = useState(["a","a","a","a","a"])

  const [prod ,setProd] = useState([{} , {} , {}])

  const [count , setCount] = useState(1);
  function Increment(){
    setCount(count+1);
  }

  return (
    <>
    <Navbar/>
    <Routes>
      <Route path="/" element = {<Home />} />
      <Route path="/login" element = {<Login />} />
      <Route path="/register" element = {<Register />} />
      <Route path='/counter' element= {<Counter/> }/>
      <Route path='/useEffect1' element= {<UseEffect1/> }/>
      <Route path='/useEffect2' element= {<UseEffect2/> }/>
      <Route path='/useEffect3' element= {<UseEffect3/> }/>
      <Route path='/useEffect4' element= {<UseEffect4/> }/>
      <Route path='/product/:id' element = {<UseParams/>}/>
      <Route path='/PropDrilling' element = {<PropDrilling students = {["v", "R" ,"A"]}
      counter = {count}
      increm = {Increment}
      />}/>
      <Route path='/mapping' element = {<Mapping />}/>
      <Route path='/todo'    element = {<Todo/>}/>
      <Route path='/Registeration' element = {<Registeration/>}/>
      <Route path='/DynamicCss' element = {<DynamicCss/>}/>
      <Route path='/Reducer' element = {<Reducer/>}/>
      <Route path='/Usememo' element = {<UseMemo/>}/>
      <Route path='/memo' element = {<ParentMemo/>}/>


     


     



    </Routes>
    </>
  );
}

export default App;
