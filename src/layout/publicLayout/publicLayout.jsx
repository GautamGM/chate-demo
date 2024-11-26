import { useState ,useEffect} from "react"
import { useDispatch } from "react-redux"
import { Outlet, useNavigate } from "react-router"
import { getDataFromLocalStorage } from "../../Utilies/LocalStorge"
import Loader from "../../loader/loader"

const PublicLayout=()=>{
    const [isLoading,setIsLoading]=useState(true)
    const naviagte=useNavigate()
    const dispatch=useDispatch()

    useEffect(()=>{
        const token=getDataFromLocalStorage("authToken")
        if(token){
            naviagte("/dashboard")
            
        }else{
            setIsLoading(false)
        }
    },[naviagte])

    if(isLoading){
        return <Loader/>
    }

    return(
        <>
        <Outlet/>
        </>
    )
}
export default PublicLayout