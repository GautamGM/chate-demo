import axios from "axios"
import { getDataFromLocalStorage } from "../Utilies/LocalStorge"

const url="https://chatappgagan.onrender.com"

const api=axios.create({
    baseURL:url
})


// intercepTer Request
axios.interceptors.request.use(
    async(config)=>{
        console.log(config)
        const token=await getDataFromLocalStorage("authToken")
        console.log("token",token)
        config.headers.Authorization=`Bearer ${token}`;
        return config
    },
    (error)=>{
        return Promise.reject(error)
    }
)

// response
axios.interceptors.response.use(
    (response)=>{
        console.log(response)
        return  response
    },
    (error)=>{
        console.log("Your token is Expire ")
        console.log(error)
        window.location.href("/")
    }
)

queueMicrotask
export default api