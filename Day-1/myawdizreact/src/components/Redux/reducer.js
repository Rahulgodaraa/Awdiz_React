import {INCREMENT , DECREMENT ,  RESET} from './actionTypes'

const InitialState = { counter : 0};

const counterReducer = (state = InitialState , action) => {
    switch (action.type) {
        case INCREMENT : 
        return {...state , counter : state.counter + 1}
        case DECREMENT : 
        return {...state , counter : state.counter - 1}
        case RESET : 
        return {...state , counter : 0}
        default :
        return state
    }
} 

export default counterReducer;