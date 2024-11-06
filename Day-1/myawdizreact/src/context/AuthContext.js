import {createContext, useEffect, useReducer} from 'react'
import api from '../axios';
 

export const AuthContext = createContext();

 const  Reducer = (state , action) => {
    switch(action.type) {
        case "login" : 
        return {...state , user : action.payload}
        case "Dark" : 
        return {...state , mode : "dark"}
        case "LightMode" : 
        return {...state , mode : "light"}
        case 'Increment' : 
        return { ...state ,counter : state.counter + 1  }
        case 'reset' : 
        return { counter : 0  }
        default : 
        return state
    }
 }

  const InitialState = {counter : 0 , mode : 'light' , user : null}

 function ParentAuthComponent( { children }) {
    const [state , dispatch] = useReducer( Reducer , InitialState );

    useEffect(() => {
        async function getCurrentUser() {
    try {
        const response = await api.post('/auth/getCurrentUser');
        if(response.data.success) {
        dispatch({type: 'login' , payload : response.data.userData})
        }
    } catch (error) {
        console.log(error);
    }
       }
       getCurrentUser();

    } , [])

    return (
        <AuthContext.Provider value = {{ state , dispatch }}>
            {children}
        </AuthContext.Provider>
    )
 }

 export default ParentAuthComponent;