import { useSelector ,useDispatch} from "react-redux"

import Loader from "../loader/loader"
import { useEffect } from "react"
import { getAdminDetail } from "../Slices/userslice/userSlice"
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

   </>
  )
}

export default Dashboard