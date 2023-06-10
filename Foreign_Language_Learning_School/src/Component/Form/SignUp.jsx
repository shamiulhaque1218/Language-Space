/* eslint-disable no-unused-vars */
import { useForm } from "react-hook-form";
import { Link } from "react-router-dom";
import GoogleSign from "../Form/GoogleSign"
import { useContext, useState } from "react";
import { AuthContext } from "../../../provider/AuthProvider";
import Swal from "sweetalert2";
import axios from "axios";


const SignUp = () => {
  const {signUpUser,logOutUser,updateUser} = useContext(AuthContext);

  const [success, setSuccess] = useState("");
  const [data, setData] = useState("");
  const { register, handleSubmit,watch, formState: { errors },reset } = useForm();

  const onSubmit = data =>  {
  setData(data);
  const name = data.name;
  const email = data.email;
  const password = data.password;
  const photoURL = data.photoURL;
  //console.log(photoURL);


    signUpUser(email,password)
      .then((result) => {
      //  console.log(result.user);
        updateUser(name, photoURL)
        .then(() => {
         // console.log(name,photoURL);
         const User = {name, email:result.user.email, photoURL, role: 'Student' }
         axios.post(`http://localhost:5000/user`, User)
        .then(data =>{
            console.log(data) 
          })
          reset();
          Swal.fire({
            position: 'top-end',
            icon: 'success',
            title: 'welcome! Create User Successfully',
            showConfirmButton: false,
            timer: 1500
          })
        })
       
        setSuccess("welcome! Create User Successfully");
        logOutUser();
      })
      .catch((err) => {
        console.log(err.message);
      });
 
}


    return (
        <div className="grid lg:grid-cols-2 grid-cols-1 pb-10">

             <div className="lg:mt-32 ml-44" data-aos="zoom-out-right">
             <img  src="login.png" alt="image" />
             </div>
           
    <form
       onSubmit={handleSubmit(onSubmit)}
        className="max-w-md mx-auto bg-white px-12 py-2 mt-10 rounded-md drop-shadow-xl" data-aos="zoom-out-left">
        <p className="text-2xl text-center m-5 font-semibold">
        Lets you Speak better
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
        <input type="text" name="photoURL" {...register("photoURL", { required: true })} className="border-gray-600 border-2 p-2 rounded-md w-full focus:outline-none focus:border-blue-500" />
        {errors.photoURL && <span className="text-red-600">PhotoURL is required</span>}
      </div> 


        <div className="">
          <label htmlFor="password" className="block text-gray-600 font-semibold mb-2 text-sm" >
            Password (6 or more characters)
          </label>
          <input
            type="password"  
            name="password"
            id="password"
            {...register("password", { required: true,minLength:6, maxLength: 8, pattern: /(?=.*[A-Z])(?=.*[!@#$&+*])(?=.*[0-9])(?=.*[a-z])/ })}
            className="border-gray-600 border-2 p-1 rounded-md w-full focus:outline-none focus:border-blue-500"
          />
          {errors.password?.type === 'required' && <div className="text-red-600">Password is required</div>}
          {errors.password?.type === 'minLength' && <div className="text-red-600">Password is less than 6 characters</div>}
          {errors.password?.type === 'maxLength' && <div className="text-red-600">Password is more than 8 characters</div>}
          {errors.password?.type === 'pattern' && <div className="text-red-600">please give a capital letter and a special character</div>}
         
          
        </div>

        <div className="mb-4">
        <label htmlFor="confirmPassword" 
        className="block text-gray-600 font-semibold mb-2 text-sm">Confirm Password</label>
        <input type="password"
         id="confirmPassword" {...register('confirmPassword', {
          required: true, validate: (value) => value === watch('password')
        })}
         name="confirmPassword" className="border-gray-600 border-2 p-2 rounded-md w-full focus:outline-none focus:border-blue-500" />
      {errors.confirmPassword?.type === 'validate' && (
        <span className="text-red-600">Password and Confirm Password do not match</span>
      )}
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
          value="Submit"
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