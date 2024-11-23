import axios from "axios"

const url="https://chatappgagan.onrender.com"
const api=axios.create({
    baseURL:url
})

export const registerUser=(data)=>{
    
   
    return api.post("/register",data)
}

export const loginUser=(data)=>{
    return api.post("/login",data)
}