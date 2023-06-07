/* eslint-disable no-unused-vars */
import { useForm } from "react-hook-form";
import { Link } from "react-router-dom";
import GoogleSign from "../Form/GoogleSign"
import { useContext, useState } from "react";
import { AuthContext } from "../../../provider/AuthProvider";


const SignUp = () => {
  const {signUpUser,logOutUser} = useContext(AuthContext);

  const [success, setSuccess] = useState("");
  const [data, setData] = useState("");
 const { register, handleSubmit, formState: { errors } } = useForm();
 const onSubmit = data =>  {

  setData(data);
  const name = data.name;
  const email = data.email;
  const password = data.name;
  const photoURL = data.photoURL;
  //console.log(name);


    signUpUser(email,password)
      .then((result) => {
        console.log(result.user);
        setSuccess("welcome ! Create User Successfully");
        logOutUser();
      })
      .catch((err) => {
        console.log(err.message);
      });
 
}

    return (
        <div className="grid lg:grid-cols-2 grid-cols-1">
             <div className="mt-40 ml-10">
             <img  src="login.png" alt="image" />
             </div>
           
          <form
       onSubmit={handleSubmit(onSubmit)}
        className="max-w-md mx-auto bg-white p-8 rounded-md shadow-md"
      >
        <p className="text-2xl text-center m-5 font-semibold">
          Find your Happiness {" "}
        </p>
        <div className="mb-4">
          <label htmlFor="name"className="block text-gray-600 font-semibold mb-2 text-sm">
            UserName
          </label>
          <input
            type="text"
            name="name"
            {...register("name", { required: true })}
            className="border-gray-600 border-2 p-1 rounded-md w-full focus:outline-none focus:border-blue-500"
          />
          {errors.name && <span className="text-red-600">Username is required</span>}
        </div>
        <div className="mb-4">
          <label  htmlFor="email" className="block text-gray-600 font-semibold mb-2 text-sm ">
            Email
          </label>
          <input
            type="email"
            name="email"
            {...register("email", { required: true })}
            className="border-gray-600 border-2 p-1 rounded-md w-full focus:outline-none focus:border-blue-500" />
            {errors.email && <span className="text-red-600">Email is required</span>}
        </div>

         <div className="mb-4">


        <label htmlFor="photoUrl" className="block text-gray-600 font-semibold mb-2 text-sm">Photo URL</label>
        <input type="text" name="photoUrl" {...register("photoUrl", { required: true })} className="border-gray-400 border-2 p-2 rounded-md w-full focus:outline-none focus:border-blue-500" />
        {errors.photoUrl && <span className="text-red-600">PhotoURL is required</span>}
      </div> 


        <div className="">
          <label htmlFor="password" className="block text-gray-600 font-semibold mb-2 text-sm" >
            Password (6 or more characters)
          </label>
          <input
            type="password"
            name="password"
            {...register("password", { required: true,minLength:6, maxLength: 8 },{ pattern: /^[A-Za-z]+$/i })}
            className="border-gray-600 border-2 p-1 rounded-md w-full focus:outline-none focus:border-blue-500"
          />
          {errors.password?.type === 'required' && <div className="text-red-600">Password is required</div>}
          {errors.password?.type === 'minLength' && <div className="text-red-600">Password is less than 6 characters</div>}
          {errors.password?.type === 'maxLength' && <div className="text-red-600">Password is more than 8 characters</div>}
          {errors.password?.type === 'pattern' && <div className="text-red-600">please give a capital letter</div>}
         
          
        </div>

        <div className="mt-4 mb-5 text-center text text-gray-500">
          <p>
            By clicking Agree & Join, you agree to The Language Space
            <span className="text-blue-600 font-semibold px-1">
             User <br /> Agreement, Privacy Policy
            </span>and
            <span className="text-blue-600 font-semibold"> Cookie Policy</span>.
          </p>
        </div>
        <button
          type="submit"
          className="bg-blue-600 hover:bg-blue-800 text-white font-semibold py-3  rounded-3xl focus:outline-none focus:shadow-outline w-full" >
          Agree & Join
        </button>

        <div className="text-green-600">{success}</div>

        <div className="grid grid-cols-5">
          <hr className="mt-3 border-gray-300 col-span-2" />
          <p className="text-center">or</p>
          <hr className="mt-3 border-gray-300 col-span-2" />
        </div>

        <div className="my-5">
          <GoogleSign> </GoogleSign>
        </div>
        <div className="text-center">
          Already on The Language Space?
          <Link to="/login" className="font-semibold text-blue-700 ml-2">
            Sign in
          </Link>
          <br />
        </div>
          </form>

            
        </div>
    );

}

export default SignUp;