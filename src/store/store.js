import { configureStore } from '@reduxjs/toolkit'
import { userReducer } from '../Slices/userslice/userSlice'
const store=configureStore({
   reducer:{
    user:userReducer
   }
})

export {store}