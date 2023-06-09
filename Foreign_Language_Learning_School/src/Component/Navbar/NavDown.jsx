import { Link, NavLink } from "react-router-dom";
import { AuthContext } from "../../../provider/AuthProvider";
import { useContext } from "react";


const NavDown = () => {
  const { user} = useContext(AuthContext);
 

  return (
    <>  
     <div className="bg-white pb-1 gFont2 border-2" >
      <div className="dropdown">
        <label tabIndex={0} className="btn btn-ghost lg:hidden">
          <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
        </label>
        <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
          <li><a>Item 1</a></li>
          <li><a>Item 2</a></li>
          <li> <a>Parent</a> </li>
        </ul>
      </div>
     {/* divider */}
    <div className="hidden lg:flex">
      <ul className="menu menu-horizontal ml-96 pl-24 text-lg font-semibold flex gap-10">
        <li> <NavLink to="/" className={({ isActive }) => isActive ? "text-blue-500" : "text-black" }>   Home  </NavLink> 
        </li>
        <li> <NavLink to="/login" className={({ isActive }) => isActive ? "text-blue-500" : "text-black" }>   Instructors  </NavLink> 
        </li>
        <li> <NavLink to="/addclass" className={({ isActive }) => isActive ? "text-blue-500" : "text-black" }>   Classes  </NavLink> 
        </li>
        <li> {user &&
          <NavLink to="/" className={({ isActive }) => isActive ? "text-blue-500" : "text-black" }>  Dashboard  </NavLink> }
        </li>
        <div>
              <Link to="/viewclass"> <button>viewclass</button> </Link>
            </div>
        
      </ul>
    </div>
  </div>
  </>
    

  );
};

export default NavDown;
