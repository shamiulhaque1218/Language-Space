import { useContext } from "react";
import { AuthContext } from "../../../provider/AuthProvider";
import { Link } from "react-router-dom";
import { Tooltip } from "react-tooltip";

const NavTop = () => {
    
  const { user, logOutUser } = useContext(AuthContext);
 // console.log(user?.photoURL)
  const handelLogOut = () => {
    logOutUser().then((res) => {
      console.log(res).catch((err) => {
        console.log(err);
      });
    });
  };

    return (
        <div className="flex bg-slate-500 p-2 justify-between lg:px-5 gFont">
             <img src="logo.png" className="rounded-full border-gray-900 border-2 lg:h-20 lg:w-20 w-14 h-14" alt="" />
            <p className="lg:text-3xl text-xl lg:mt-5 mt-3 lg:mr-96 mr-14 lg:pr-96 text-white font-bold"> The Language Space </p> 
            <div className="mt-4 lg:mt-5 text-white lg:text-xl text-md">
                {!user && ( <Link to="/signup">  Login
                </Link>  )}
                {user && (
                <button className=" lg:pl-5" onClick={handelLogOut}>Log out </button>
                        )}
            </div>
            <div data-tooltip-id="my-tooltip" data-tooltip-content={user?.displayName} >
             {user?.photoURL && <img className="h-12 w-12 rounded-full" src={user?.photoURL} alt="" />
             }
            </div>
            <Tooltip id="my-tooltip" />
        </div>
        
    );
};

export default NavTop;