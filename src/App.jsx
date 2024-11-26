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
import PublicLayout from "./layout/publicLayout/publicLayout";
import PrivateLayout from "./layout/privateLayout/privateLayout";
import HomePage from "./pages/homePage/homepage";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Navigate to="/login"/>}/>

      <Route element={<PublicLayout/>}>
       <Route path="/login" element={<Login/>}/>
       <Route path="/register" element={<Register/>}/>
      </Route>

      <Route element={<PrivateLayout/>}>
       <Route path="/dashboard" element={<Dashboard/>}/>
      </Route>
    </Routes>
  );
}

export default App;
