import { Route, Routes } from "react-router"
import Dashboard from "../pages/Dashboard"

const PrivateRoute=()=>{
    return(
        <Routes>
            <Route path="/dashboard" element={<Dashboard/>}/>
        </Routes>
    )
}
export default PrivateRoute