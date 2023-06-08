import { Outlet } from "react-router-dom"
import NavTop from "./Component/Navbar/NavTop"
import NavDown from "./Component/Navbar/NavDown"
import Footer from "./Component/Footer/Footer"

function App() {
 
  return (
    <div >
         <NavTop> </NavTop>
         <NavDown> </NavDown>
         <Outlet> </Outlet>
         <Footer> </Footer>
    </div>
  )
}

export default App
