import { createContext, useReducer } from "react";


export const Overallcontext = createContext();

function Reducer(state , action) {
     switch(action.type) {
        case "Light" : 
        return { mode : 'light'}
        case "Dark"  : 
        return { mode : 'dark'}
        default :
        return { mode : 'light'}
      }
}

const InitialState = { mode : 'light' } ;

function ParentOverallThemeComponent( { children }) {
     const [state , dispatch] = useReducer(Reducer , InitialState) ;
     return (
     <Overallcontext.Provider value={{state , dispatch}}>
        {children}
     </Overallcontext.Provider>
)}

export default ParentOverallThemeComponent;