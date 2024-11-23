import { Outlet } from "react-router-dom"
import { NavLink } from "react-router-dom"
function App() {
  return (
  <div>
    <div>
      <nav>
        <ul className="p-3 text-center flex border justify-center">
          <NavLink to="/login" className="mr-2 border w-[100px] bg-black text-white">Login</NavLink>
          <NavLink to="/register" className="mr-2 border w-[100px] bg-blue-600 text-white" >Register</NavLink>
        </ul>
      </nav>
    </div>
   <div className="h-[50vh]"> <Outlet/></div>
   <div>
    Well come 
   </div>
  </div>
  )
}

export default App
