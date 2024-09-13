import { Children, createContext, useReducer } from "react";


const UserContexts = createContext();

const Reducer = (state , action) => {
     switch(action.type) {
          
     }
}

const initialstate = { status : 'login'}

function ParentUserContext({Children}) {
   const [state , dispatch] = useReducer(Reducer , initialstate)

   
}