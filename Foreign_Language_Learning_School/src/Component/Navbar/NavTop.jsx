import { useContext } from "react";
import { AuthContext } from "../../../provider/AuthProvider";
import { Link } from "react-router-dom";

const NavTop = () => {
    
  const { user, logOutUser } = useContext(AuthContext);

  const handelLogOut = () => {
    logOutUser().then((res) => {
      console.log(res).catch((err) => {
        console.log(err);
      });
    });
  };

    return (
        <div className="flex bg-slate-500 p-2 justify-between px-5">
             <img src="logo.png" className="rounded-full border-gray-900 border-2 lg:h-20 lg:w-20 w-14 h-14" alt="" />
            <p className="lg:text-3xl text-xl lg:mt-5 mt-3 lg:ml-20 ml-5 text-white font-bold"> The Language Space </p>
            <div >
                {!user && ( <Link to="/signup">  Login
                </Link>  )}
                {user && (
                <button className=" lg:pl-5" onClick={handelLogOut}>Log out </button>
                        )}
    </div>
        </div>
    );
};

export default NavTop;