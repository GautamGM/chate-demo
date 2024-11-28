import { useSelector ,useDispatch} from "react-redux"

import Loader from "../loader/loader"
import { useEffect } from "react"
import { getAdminDetail } from "../Slices/userslice/userSlice"
import RegistterController from "./register/register2Controller"
const Dashboard = () => {
const dispatch=useDispatch()
const{userData,isLoading}=useSelector((state)=>state.user)

useEffect(()=>{
  dispatch(getAdminDetail())
},[dispatch])

if(isLoading){
  return <Loader/>
}
  return (
   <>
   {userData?.data?.name}
   {userData?.data?.email}
   {userData?.data?.role}
   <div className=" w-[100%] border border-black text-center">
   </div>
   </>
  )
}

export default Dashboard