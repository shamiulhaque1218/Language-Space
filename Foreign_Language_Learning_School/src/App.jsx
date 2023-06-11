import { Outlet } from "react-router-dom"
import NavTop from "./Component/Navbar/NavTop"
import NavDown from "./Component/Navbar/NavDown"
import Footer from "./Component/Footer/Footer"
import { createContext, useState } from "react";
import "./App.css"
import ReactSwitch from "react-switch";

export const ThemeContext = createContext(null);

function App() {
  const [theme, setTheme] = useState("light");
  const toggleTheme = () => {
    setTheme((curr) => (curr === "light" ? "dark" : "light"));
  };
  return (
    <ThemeContext.Provider  value={{ theme, toggleTheme }}>    
    <div id={theme}>
         <NavTop> </NavTop>
         <div className="switch">
          <label> {theme === "light" ? "Light Mode" : "Dark Mode"}</label>
          <ReactSwitch onChange={toggleTheme} checked={theme === "dark"} />
        </div>

         <NavDown> </NavDown>
         <Outlet> </Outlet>
         <Footer> </Footer>
    </div>
    </ThemeContext.Provider>
  )
}

export default App
