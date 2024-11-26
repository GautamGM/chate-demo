import { Route, Routes } from "react-router"
import Login from "../pages/login/login"
import Register from "../pages/register/register"

const PublicRoute=()=>{
    return(
        <Routes>
            <Route path="/" element={<Login/>}/>
            <Route path="/register" element={<Register/>}/>
        </Routes>
    )
}
export default PublicRoute