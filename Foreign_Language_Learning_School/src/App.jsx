import { Outlet } from "react-router-dom"
import NavTop from "./Component/Navbar/NavTop"
import NavDown from "./Component/Navbar/NavDown"

function App() {
 
  return (
    <div className="">
        <NavTop> </NavTop>
        <NavDown> </NavDown>
        
         <Outlet> </Outlet>
    </div>
  )
}

export default App
