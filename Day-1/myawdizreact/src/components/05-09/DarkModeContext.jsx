import { createContext, useReducer } from "react";

const DarkModeContext = createContext();

const Reducer = (state, action) => {
  switch (action.type) {
    case "Darkmode":
      return { mode: "dark" };
    case "LightMode":
      return { mode: "light" };
    default:
      return { mode: "light" };
  }
};

const InitialState = { mode } ;

function ParentDarkModeComponent( { children } ){
    const [state , dispatch] = useReducer(Reducer , InitialState);
    <DarkModeContext.Provider value = {{state , dispatch}}>
        {children}
    </DarkModeContext.Provider>
}