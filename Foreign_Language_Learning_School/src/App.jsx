import { Outlet } from "react-router-dom"

function App() {
 
  return (
    <div>
         This is the first page of my website.
         <Outlet> </Outlet>
    </div>
  )
}

export default App
