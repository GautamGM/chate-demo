import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router";
import { Navigate } from "react-router";
import Login from "./pages/login/login";
import Register from "./pages/register/register";
import Dashboard from "./pages/Dashboard";
// eslint-disable-next-line no-unused-vars
import { getDataFromLocalStorage } from "./Utilies/LocalStorge";
import { useEffect } from "react";
import { getAdminDetail } from "./Slices/userslice/userSlice";
import { useNavigate } from "react-router";
import { useDispatch } from "react-redux";
function App() {

const dispatch=useDispatch()
  // useffect for  checking the user in sauthenticate or not
useEffect(()=>{
  const token=getDataFromLocalStorage("authToken")
  if(token){
    dispatch(getAdminDetail()).unwrap()
    .then((data)=>{
      console.log(data)
    })
    .catch((error)=>{
      throw error
      // eslint-disable-next-line no-unreachable
      console.log(error,"arror in app.jsx")
    })
  }else{
    console.log("erro")
  }
},[])

  return (
    <BrowserRouter>
      <Routes>
        {/* force fully login page */}
        <Route path="/" element={<Navigate to="/login" />} />
        <Route path="/dashboard" element={<Dashboard/>}/>
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
