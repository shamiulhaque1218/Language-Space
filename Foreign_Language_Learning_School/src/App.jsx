import { Outlet, useLocation } from "react-router-dom"
import NavTop from "./Component/Navbar/NavTop"
import Footer from "./Component/Footer/Footer"
import { createContext, useEffect, useState } from "react";
import "./App.css"
import DayNightToggle from 'react-day-and-night-toggle'

export const ThemeContext = createContext(null);

function App() {
  const location = useLocation();
  useEffect(() => {
    const routeName = location.pathname; // Get the current route name
    const pageTitle = getPageTitle(routeName); // Define a function to get the page title based on the route

    document.title = pageTitle; // Update the website title
  }, [location]);



  const getPageTitle = (routeName) => {
    // Define your logic to determine the page title based on the route
    // You can use a switch statement, object mapping, or any other method based on your specific requirements
    switch (routeName) {
      case '/':
        return 'The Language Space | Home';
      case '/login':
        return 'The Language Space | LogIn';
      case '/signup':
        return 'The Language Space | SignUp';
      case '/contact':
        return 'The Language Space | Contact';
      case '/address':
        return 'The Language Space | Address';
      case '/cookie':
        return 'The Language Space | Cookie';
      case '/advertisement':
        return 'The Language Space | Advertisement';
      case '/addclass':
        return 'The Language Space | Add Class';
      case '/update:id':
        return 'The Language Space | Update Class';
      case '/feedback':
        return 'The Language Space | Feedback';
      case '/viewclass':
        return 'The Language Space | Manage Class';
      case '/myclass':
        return 'The Language Space | My Class';
      case '/classes':
        return 'The Language Space | All Class';
      case '/viewuser':
        return 'The Language Space | Manage User';
      case '/instructor':
        return 'The Language Space | Instructor';
      case '/mycart':
        return 'The Language Space | My Cart';
      case '/payment:id':
        return 'The Language Space | Payment';
      case '/dashboard':
        return 'The Language Space | Dashboard';
      case '/paymenthistory':
        return 'The Language Space | Payment History';
      case '/enrollclass':
        return 'The Language Space | Enroll Class';
      default:
        return 'The Language Space ';
    }
  };


  // *** theme start ***
  const [theme, setTheme] = useState("light");
  const toggleTheme = () => {
    setTheme((curr) => (curr === "light" ? "dark" : "light"));
  };
  // *** theme end ***
  return (
    <ThemeContext.Provider  value={{ theme, toggleTheme }}>    
    <div  id={theme}>
         <NavTop> </NavTop>
         <div className="switch flex justify-between h-0 bg">
          <label className="text-sm gFont2" > {theme === "light" ? "Light Mode" : "Dark Mode"}</label>
          <DayNightToggle className="mr-2 mt-2" size={25}  onChange={toggleTheme} checked={theme === "dark"} />
        </div>
        
         <Outlet> </Outlet>
         <Footer> </Footer>
    </div>
    </ThemeContext.Provider>
  )
}

export default App
