/* eslint-disable no-unused-vars */
import { useContext } from "react";
import axios from "axios";
import { useForm } from "react-hook-form";
import { AuthContext } from "../../../provider/AuthProvider";
import Swal from "sweetalert2";


const AddClass = () => {
    const {user} = useContext(AuthContext);
    const email = user?.email
    const name =user?.displayName
    //console.log(email,name)

    const { register, handleSubmit, formState: { errors } } = useForm();
    const onSubmit = data =>  {
    const className=data.name;
    const classImage=data.pictureURL;
    const availableSeats=data.AvailableSeats;
    const price=data.price;
     //console.log(data)
     const ClassData = {className,classImage,name,email,availableSeats,price,status: 'pending'};
     console.log(ClassData);

     axios.post(`http://localhost:5000/class`, ClassData)
    .then(data =>{
        console.log(data)
        if(data.data.insertedId) {
            Swal.fire({
                title: 'New Class' ,
                text: 'Added Class Successfully',
                icon: 'success',
                confirmButtonText: 'Done'
              })
        }
    })

     }

    return (
       
            <div className="px-20 pb-20">
              <p className="gFont2 text-3xl text-center py-5 px-10 font-semibold">Add a new class</p>
      <form  onSubmit={handleSubmit(onSubmit)} className="grid grid-cols-2">
        <div className="mb-4 mx-10">
          <label
            htmlFor="name"
            className="block mb-2 text-sm font-bold text-gray-700"
          >
           Class Name:
          </label>
          <input
            type="text"
            name="name"
            {...register("name", { required: true })}
            className="w-full px-3 py-2 placeholder-gray-400 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>

        <div className="mb-4  mx-10">
          <label
            htmlFor="pictureURL"
            className="block mb-2 text-sm font-bold text-gray-700"
          >
            Class Image:
          </label>
          <input
            type="text"
            name="pictureURL"
            {...register("pictureURL", { required: true })}
            className="w-full px-3 py-2 placeholder-gray-400 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>
        <div className="mb-4  mx-10">
          <label
            htmlFor="InstructorName"
            className="block mb-2 text-sm font-bold text-gray-700"
          >
            Instructor name :
          </label>
         <input
        type="text"
        name="InstructorName"
        value={name}
        {...register('InstructorName')}
        className="w-full px-3 py-2 placeholder-gray-400 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500" />
        </div>

        <div className="mb-4  mx-10">
          <label
            htmlFor="InstructorEmail"
            className="block mb-2 text-sm font-bold text-gray-700"
          >
            Instructor email:
          </label>
          <input
        type="text"
        name="InstructorEmail"
        value={email}
        {...register('InstructorEmail')}
        className="w-full px-3 py-2 placeholder-gray-400 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500" />
        </div>

        <div className="mb-4 mx-10">
          <label
            htmlFor="AvailableSeats"
            className="block mb-2 text-sm font-bold text-gray-700"
          >
            Available seats:
          </label>
          <input
            type="text"
            name="AvailableSeats"
            {...register("AvailableSeats", { required: true })}
            className="w-full px-3 py-2 placeholder-gray-400 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>

        <div className="mb-4 mx-10">
          <label
            htmlFor="price"
            className="block mb-2 text-sm font-bold text-gray-700"
          >
            Price:
          </label>
          <input
            type="text"
            name="price"
            {...register("price", { required: true })}
            className="w-full px-3 py-2 placeholder-gray-400 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>

        <button
          type="submit"
          className="mx-10 my-8 px-4 py-2 text-center font-bold text-white bg-blue-500 rounded-md hover:bg-blue-600"
        >
          Add Class
        </button>
      </form>
             </div>   
       
    );
};

export default AddClass;