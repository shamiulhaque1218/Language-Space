/* eslint-disable no-unused-vars */
import { Link, NavLink } from "react-router-dom";
import { AuthContext } from "../../../provider/AuthProvider";
import { useContext } from "react";
import { faCartShopping } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import useAxiosSecure from "../Hooks/useAxiosSecure";
// import { useQuery } from "@tanstack/react-query";


const NavDown = () => {
  const { user} = useContext(AuthContext);
  // const [axiosSecure] = useAxiosSecure();
  // const {
  //   isLoading,
  //   refetch,
  //   error,
  //   data: tqData = [],
  // } = useQuery({
  //   queryFn: async () => {
  //     const data = await axiosSecure.get(`/cart/${user?.email}`);
  //     //console.log({ fromTq: data });
  //     return data?.data;
  //   },
  //   queryKey: ["users"],
  // });
  

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
        <div>
              <Link to="/viewuser"> <button>view user</button> </Link>
        </div>
        <div>
          <Link to="/mycart" data-tooltip-id="my-tooltip"  data-tooltip-content="My Cart" > <button className="px-3 pt-2 rounded-xl bg-yellow-600">
       <FontAwesomeIcon className='h-6 text-white' icon={faCartShopping} />
       {/* <p className="px-1 text-white"> {tqData.length} </p> */}
       </button> </Link>
        </div>
        
        
      </ul>
    </div>
  </div>
  </>
    

  );
};

export default NavDown;
