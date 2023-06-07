import { GoogleAuthProvider, getAuth, signInWithPopup } from "firebase/auth";
import app from "../../Component/firebase/firebase.config";
import { useNavigate } from "react-router-dom";

const GoogleSign = () => {
  const navigate = useNavigate();
  const auth = getAuth(app);
  const provider = new GoogleAuthProvider();
  const handelGoogleSign = () => {
    signInWithPopup(auth, provider)
      .then((result) => {
        const user = result.user;
        console.log(user);
        navigate("/");
      })
      .catch((error) => {
        console.log(error.message);
      });
  };

  return (
    <div>
      <button
        onClick={handelGoogleSign}
        className="bg-white text-gray-700 border-2 border-gray-400 py-2  rounded-3xl focus:outline-none focus:shadow-outline w-full text-ok"
      >
        <img className="h-8 w-8 inline mr-2" src="google.png" alt="" />
        <span className="font-semibold ">Continue with Google</span>
      </button>
    </div>
  );
};

export default GoogleSign;