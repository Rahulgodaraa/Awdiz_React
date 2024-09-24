
import { configureStore } from '@reduxjs/toolkit'
import counterReducer from './reducer'
 


const store = configureStore({
    reducer: {
        Counter : counterReducer
    },
})

export default store;