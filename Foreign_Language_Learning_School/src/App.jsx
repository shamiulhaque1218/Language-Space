import { Outlet } from "react-router-dom"

function App() {
 
  return (
    <div className="p-20">
         This is the first page of my website.
         <img src="weblogo.png" className="rounded-full h-24 w-24" alt="" />
         <Outlet> </Outlet>
    </div>
  )
}

export default App
