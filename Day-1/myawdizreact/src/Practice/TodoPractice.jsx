// /*
// import React, { useState } from 'react'

// const TodoPractice = () => {

 
//     const [gettodo , setGettodo] = useState('');
//     const [todo , setTodo] = useState([])



// function AddTodo(event){
//   setTodo([...todo, gettodo])
//   setGettodo('');
// }

    
// function handleInput(event){
//       setGettodo(event.target.value)
// }

// // function DeleteTodo(event){
// //     let newtodo = [...todo]
// //     newtodo.pop()
// //     setTodo([...newtodo])
// // }

// function DeleteTodo(event){
//   let newtodo = todo.filter(())
// }

// console.log(todo , gettodo);


//   return (
//     <div>
//         <main>
//             <h1>Todo Application</h1>
//             <h1>{todo.map((todoss) => (
//               <p>{todoss}</p>
//             ))}</h1>
//             {todo.map((todos) => {
//               <h3>{todos}</h3>
//             })}
//             <input onChange={handleInput} type="text"  value={gettodo} placeholder='Type your Todo...'/>
//             <button onClick={AddTodo}>Add to do</button>
//             <button onClick={DeleteTodo}>Delet todo</button>
//         </main>
//     </div>
//   )
// }

// export default TodoPractice
// */
// /*Reducer
// import React, { useReducer } from 'react'

// const TodoPractice = () => {

//   // const [Counter , setCounter] = setCounter(0)

//   const Reducer = (state , action) => {
//         switch(action.type)  {
//       case "Increment" :
//         return { Counter : state.Counter + 1 }
//         case "Decrement" :
//         return { Counter : state.Counter - 1 }
//         case "Reset" :
//         return { Counter : 0 }
//         }
//   }

//   const initialstate = {Counter : 0}

//   const [state , dispatch ] = useReducer(Reducer , initialstate);



//   return (
//     <div>
//       <h1>counter :- {state.Counter}</h1>
//       <button onClick={() => (
//         dispatch({type : 'Increment'})
//       )}>+</button>
//       <button onClick={() => {
// if(state.Counter > 0){
//         dispatch({type : 'Decrement'})
//       }}}>-</button>
//       <button onClick={() => (
//         dispatch({type : 'Reset'})
//       )}>Reset</button>


//     </div>
//   )
// }

// export default TodoPractice
// */
// import React, { useState } from 'react'

// const UserData = {
//   name : '',
//   email: '',
//   password : '',
//   ConfirmPassword: ''
// }
// //  

// const [userdata , setUserdata] = useState({})


// const TodoPractice = () => {
//   return (
//     <div>
//       <h1>context</h1>

//     </div>
//   )
// }

// export default TodoPractice





