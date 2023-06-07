/* eslint-disable no-unused-vars */
import { useContext } from "react";
import { AuthContext } from "../../../provider/AuthProvider";
import { Link } from "react-router-dom";


const NavDown = () => {

  const { user, logOutUser } = useContext(AuthContext);

  const handelLogOut = () => {
    logOutUser().then((res) => {
      console.log(res).catch((err) => {
        console.log(err);
      });
    });
  };
  //console.log(user)

  return (
    <div>
   {!user && ( <Link to="/signup">  Login
   </Link>  )}
   {user && (
              <button className="pl-2 lg:pl-5" onClick={handelLogOut}>Log out </button>
               )}
    </div>
  );
};

export default NavDown;
