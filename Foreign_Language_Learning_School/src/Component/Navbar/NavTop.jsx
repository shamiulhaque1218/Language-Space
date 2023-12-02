import { useContext } from "react";
import { AuthContext } from "../../../provider/AuthProvider";
import { Link, NavLink } from "react-router-dom";
import { Tooltip } from "react-tooltip";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCartShopping, faRightFromBracket } from "@fortawesome/free-solid-svg-icons";
import ContentLoader from "react-content-loader";
import NavDown from "./NavDown";
import { FaSearch } from "react-icons/fa";

const NavTop = () => {
    
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
        <div className="pt-2 lg:pt-2 flex bg p-1 pb-4  lg:px-5 gFont" data-aos="zoom-out-left">
             {/* <img src="logo.png" className="rounded-full border-gray-900 border-2 lg:h-12 lg:w-12 w-12 h-12" alt="" /> */}
             <div className="pl-2 pr-12 pt-3 visible lg:hidden">  <NavDown> </NavDown> </div>
            <Link to="/" className="lg:text-3xl text-2xl mt-2 text-slate-100 font-bold"> Language Space </Link>  
            <Link to="/classes" className="ml-10 mt-3 pt-2 hidden lg:block text-sm gFont3 bg-white h-9 px-4 rounded-md text-blue-600 font-semibold"> Explore </Link>

                  
            <div className="text-white gFont3 text-semibold text-md flex">
            <div className="ml-96 mt-3 hidden lg:flex">
              <input className="text-black p-1 pl-3 rounded-l-md" placeholder="search"  type="text"  />
              <FaSearch className="p-2 text-white text-4xl rounded-r-md cursor-pointer bg-blue-500" />
            </div>

            <div className="lg:ml-10 mt-4">
            <NavLink className="mr-5 font-bold hidden lg:inline" to="/dashboard" >  Dashboard  </NavLink> 
            {!user && ( <Link className="hidden lg:inline  font-semibold" to="/login">  Login
                </Link>  )}
                {!user && ( <Link className="hidden lg:inline font-semibold lg:ml-5 ml-1" to="/signup">  SignUp
                </Link>  )}
            </div>

            <div className="flex gap-5 mt-3 ">
              
            {user && (
               <Link to="/mycart"
                 data-tooltip-id="my-tooltip" data-tooltip-content="My Cart" className="hidden lg:inline" >
                   <button className="rounded-xl">
                         <FontAwesomeIcon className='h-6 text-white mt-1' icon={faCartShopping} />
                        {/* <p className="px-1 text-white"> {tqData.length} </p> */}
                    </button> 
                    </Link>  )
              }

               {user && ( <img src={user?.photoURL} className="h-9 w-9 rounded-full hidden lg:inline" alt="pic" /> )
               }

                {user && (
                <button data-tooltip-id="my-tooltip"  data-tooltip-content="LogOut" className="invisible lg:visible" onClick={handelLogOut}>
                 <FontAwesomeIcon className='lg:h-6 h-4 mt-1 text-white' icon={faRightFromBracket} />
                  </button> )
                 }
                 
            </div>


               

            </div>
            
            
      
           
         <Tooltip id="my-tooltip" />
       </div>
      
        
    );
};

export default NavTop;




           