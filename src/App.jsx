import {  Routes, Route } from "react-router";
import { Navigate } from "react-router";
import Login from "./pages/login/login";
import Dashboard from "./pages/Dashboard";
// eslint-disable-next-line no-unused-vars
import PublicLayout from "./layout/publicLayout/publicLayout";
import PrivateLayout from "./layout/privateLayout/privateLayout";
import RegistterController from "./pages/register/register2Controller";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Navigate to="/login"/>}/>
{/* public route */}
      <Route element={<PublicLayout/>}>
       <Route path="/login" element={<Login/>}/>
       <Route path="/register" element={<RegistterController/>}/>
      </Route>

{/* Private route */}
      <Route element={<PrivateLayout/>}>
       <Route path="/dashboard" element={<Dashboard/>}/>
      </Route>
    </Routes>
  );
}

export default App;
