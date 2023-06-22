import { useContext } from "react";
import { AuthContext } from "../../../provider/AuthProvider";
import { Link } from "react-router-dom";
import { Tooltip } from "react-tooltip";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faRightFromBracket } from "@fortawesome/free-solid-svg-icons";
import ContentLoader from "react-content-loader";

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
        <div className="flex bg p-1 pb-4  lg:px-5 gFont" data-aos="zoom-out-left">
             {/* <img src="logo.png" className="rounded-full border-gray-900 border-2 lg:h-12 lg:w-12 w-12 h-12" alt="" /> */}
            <Link to="/" className="lg:text-3xl text-2xl mt-2 text-slate-100 font-bold"> Language Space </Link> 
            <Link to="/classes" className="ml-10 mt-3 pt-2 hidden lg:block text-sm gFont3 bg-white h-9 px-4 rounded-md text-blue-600 font-semibold"> Explore </Link>

            <div className="mt-4 lg:mt-5 text-white gFont3 text-semibold text-md">
                {!user && ( <Link className="lg:ml-96 lg:pl-96 font-semibold" to="/login">  Login
                </Link>  )}
                {!user && ( <Link className="font-semibold lg:ml-5 ml-1" to="/signup">  SignUp
                </Link>  )}
                {user && (
                <button data-tooltip-id="my-tooltip"  data-tooltip-content="LogOut" className="" onClick={handelLogOut}>
                 <FontAwesomeIcon className='h-8 text-white' icon={faRightFromBracket} />
                  </button> )}
            </div>
            
            
      
           
         <Tooltip id="my-tooltip" />
       </div>
      
        
    );
};

export default NavTop;




           