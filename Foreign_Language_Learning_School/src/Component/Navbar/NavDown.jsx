/* eslint-disable no-unused-vars */
import { Link, NavLink } from "react-router-dom";
import { AuthContext } from "../../../provider/AuthProvider";
import { useContext, useState } from "react";
import { faCartShopping, faRightFromBracket } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import useAxiosSecure from "../Hooks/useAxiosSecure";
// import { useQuery } from "@tanstack/react-query";

import ReactSwitch from "react-switch";
import ContentLoader from "react-content-loader";


const NavDown = () => {
  const { user, logOutUser,loader} = useContext(AuthContext);
  //console.log(user?.photoURL)
  const handelLogOut = () => {
    logOutUser()
    .then((res) => {
      console.log(res)
      //localStorage.removeItem("access-token")
      .catch((err) => {
        console.log(err);
      });
    });
  };
  if(loader) {
    <ContentLoader viewBox="0 0 380 70">
    {/* Only SVG shapes */}
    <rect x="0" y="0" rx="5" ry="5" width="70" height="70" />
    <rect x="80" y="17" rx="4" ry="4" width="300" height="13" />
    <rect x="80" y="40" rx="3" ry="3" width="250" height="10" />
  </ContentLoader>
  }

  return (
    <>  
    
      <div className=" gFon3" >
      <div className="dropdown">
        <label tabIndex={0} className="text-white lg:hidden">
          <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
        </label>
        <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
          
        <li> <NavLink to="/" className={({ isActive }) => isActive ? "text-blue-600" : "text-black" }>   Home  </NavLink> 
        </li>
        <li> <NavLink to="/instructor" className={({ isActive }) => isActive ? "text-blue-600" : "text-black" }>   Instructors  </NavLink> 
        </li>
        <li> <NavLink to="/classes" className={({ isActive }) => isActive ? "text-blue-600" : "text-black" }>   Classes  </NavLink> 
        </li>
        <li> {user &&
          <NavLink to="/dashboard" className={({ isActive }) => isActive ? "text-blue-600" : "text-black" }>  Dashboard  </NavLink> }
        </li>
        
        <div className="lg:ml-52 ml-2">
        {user &&  <Link to="/mycart" data-tooltip-id="my-tooltip"  data-tooltip-content="My Cart" > <button className="lg:px-3 px-1 pt-1 lg:pt-2 rounded-lg bg-blue-600">
       <FontAwesomeIcon className='lg:h-6 h-4 px-2  text-white' icon={faCartShopping} />
       {/* <p className="px-1 text-white"> {tqData.length} </p> */}
       </button> </Link> }
        </div>
       
        <li> {!user &&
          <NavLink to="/login" className={({ isActive }) => isActive ? "text-blue-600" : "text-black" }>   Login  </NavLink> }
        </li>
        {/* <li> {user && ( <img src={user?.photoURL} className="h-8 w-10 rounded-full" alt="" /> )}  </li>  */}

             <li> {user && (
               <button data-tooltip-id="my-tooltip"  data-tooltip-content="LogOut" onClick={handelLogOut}>
                 <FontAwesomeIcon className='h-5' icon={faRightFromBracket} />
                  </button> )}  </li> 
       
          
        </ul>
      </div>
     {/* divider */}

    <div className="hidden lg:flex">
      <ul className="menu menu-horizontal ml-96 pl-24 text-lg font-semibold flex gap-10">
        <li> <NavLink to="/" className={({ isActive }) => isActive ? "text-blue-600" : "text-black" }>   Home  </NavLink> 
        </li>
        <li> <NavLink to="/instructor" className={({ isActive }) => isActive ? "text-blue-600" : "text-black" }>   Instructors  </NavLink> 
        </li>
        <li> <NavLink to="/classes" className={({ isActive }) => isActive ? "text-blue-600" : "text-black" }>   Classes  </NavLink> 
        </li>
        <li> 
          <NavLink to="/dashboard" className={({ isActive }) => isActive ? "text-blue-600" : "text-black" }>  Dashboard  </NavLink> 
        </li>
        
        <div className="ml-52">
          <Link to="/mycart" data-tooltip-id="my-tooltip"  data-tooltip-content="My Cart" > <button className="px-3 pt-2 rounded-xl bg-yellow-600">
       <FontAwesomeIcon className='h-6 text-white' icon={faCartShopping} />
       {/* <p className="px-1 text-white"> {tqData.length} </p> */}
       </button> </Link>

        </div>
             <li> {user && ( <img src={user?.photoURL} alt="pic" /> )}  </li> 

             <li> {user && (
               <button data-tooltip-id="my-tooltip"  data-tooltip-content="LogOut" onClick={handelLogOut}>
                 <FontAwesomeIcon className='text-white' icon={faRightFromBracket} />
                  </button> )}  </li> 
                
        
        
      </ul>
    </div>
     </div>


    
  </>
    

  );
};

export default NavDown;
