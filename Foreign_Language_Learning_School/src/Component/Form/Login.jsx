/* eslint-disable no-unused-vars */
import { Link, useNavigate } from "react-router-dom";
import GoogleSign from "./GoogleSign";
import { useForm } from "react-hook-form";
import { useContext } from "react";
import { AuthContext } from "../../../provider/AuthProvider";


const Login = () => {

    const {signInUser} = useContext(AuthContext);
    const navigate = useNavigate();
    const { register, handleSubmit, formState: { errors } } = useForm();
    const onSubmit = data => {
        console.log(data)
        const email = data.email;
        const password = data.password;
        console.log(email,password)

        signInUser(email, password)
      .then((result) => {
        const loggedUser = result.user;
        console.log(loggedUser);
        navigate("/");
      })
      .catch((error) => {
        console.log(error.message);
      });
    } 
    
    return (
        <div data-aos="fade-zoom-in"
        data-aos-easing="ease-in-back"
        data-aos-delay="100"
        data-aos-offset="0">
            <form
        onSubmit={handleSubmit(onSubmit)}
        className="lg:max-w-sm max-w-md mx-auto bg-white p-8 rounded-md drop-shadow-xl my-5"
      >
        <p className="text-3xl text-black  font-semibold">Sign in</p>
        <small className="">Stay with us for strengthen your core</small>
        <div className="mt-5 mb-4">
          <input
            placeholder="Email or Phone"
            type="email"
            name="email"
            {...register("email", { required: true })} 
            className="border-gray-400 border-2 p-3 text-black text-lg rounded-md w-full focus:outline-none focus:border-blue-500"
          />
        </div>
        <div className="mb-4">
          <input
            type="password"
            placeholder="Password"
            name="password"
            {...register("password", { required: true })} 
            className="border-gray-400 border-2 p-3 rounded-md w-full focus:outline-none focus:border-blue-500"
          />
        </div>
        <div className="text-md font-semibold mb-5 text-blue-600">
          Forgot password?
        </div>
        <button
          type="submit"
          className="bg-blue-600 hover:bg-blue-800 text-white font-semibold py-3  rounded-3xl focus:outline-none focus:shadow-outline w-full"
        >
          Sign in
        </button>
        {/* <div className="text-red-500 py-2">{errors}</div> */}

        <div className="my-5">
          <GoogleSign> </GoogleSign>
        </div>

        <div className="text-center mt-10">
          Already on The Language Space?
          <Link to="/signup" className="font-semibold text-blue-700 ml-2">
            Join now
          </Link>
          <br />
        </div>
      </form>
        </div>
    );
};

export default Login;