import {createContext, useReducer} from 'react'
 

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

    return (
        <AuthContext.Provider value = {{ state , dispatch }}>
            {children}
        </AuthContext.Provider>
    )
 }

 export default ParentAuthComponent;