import { Outlet } from "react-router-dom"

function App() {
 
  return (
    <div>
         This is the first page of my website.
         <img src="logo.png" className="rounded-full h-20 w-20" alt="" />
         <Outlet> </Outlet>
    </div>
  )
}

export default App
