import { BrowserRouter, Routes, Route } from "react-router";
import { Navigate } from "react-router";
import Login from "./pages/login/login";
import Register from "./pages/register/register";
import Dashboard from "./pages/Dashboard";
// eslint-disable-next-line no-unused-vars
import { getDataFromLocalStorage } from "./Utilies/LocalStorge";
import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import Loader from "./loader/loader";
import { getAdminDetail } from "./Slices/userslice/userSlice";

function App() {
  
  const dispatch=useDispatch()
  // eslint-disable-next-line no-unused-vars
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [loading, setLoading] = useState(true);
  // useffect for  checking the user in sauthenticate or not
  useEffect(() => {
    const token = getDataFromLocalStorage("authToken");
    console.log("useff-------->");
    if (token) {
      console.log(token, "shdfagh");
      setIsAuthenticated(true);
      setLoading(false);

      dispatch(getAdminDetail()).unwrap()
      .then((data)=>{
        console.log("admin-->",data)
      })
      .catch((error)=>{
        console.log("error",error)
      })
      
    } else {
      setIsAuthenticated(false);
      setLoading(false);
    }
  }, []);
  console.log(isAuthenticated, "chech authtoken");



  if (loading) {
    return <Loader />;
  }
  return (
    <BrowserRouter>
      {`=========${isAuthenticated}`}
      <Routes>
        {/* force fully login page */}
        <Route path="/" element={isAuthenticated ? <Dashboard /> : <Login />} />
        <Route
          path="/dashboard"
          element={isAuthenticated ? <Dashboard /> : <Navigate to="/" />}
        />
        <Route
          path="/login"
          element={isAuthenticated ? <Dashboard /> : <Login />}
        />
        <Route
          path="/register"
          element={isAuthenticated ? <Dashboard /> : <Register />}
        />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
