/* eslint-disable no-unused-vars */
import axios from 'axios';
import React, { useContext } from 'react';
import { useForm } from 'react-hook-form';
import Swal from 'sweetalert2';
import { AuthContext } from '../../../provider/AuthProvider';
import { useLoaderData } from 'react-router-dom';

const UpdateClass = () => {
  
    const update = useLoaderData();
    const {_id,className,classImage,availableSeats,price} = update
 //  console.log(update);
     const clName = className;
     const clImage = classImage;
     const claAailableSeats = availableSeats;
     const clPrice = price;
    const {user} = useContext(AuthContext);
    const email = user?.email
    const name =user?.displayName
   // console.log(_id,className,classImage,availableSeats,price);

    const { register, handleSubmit, formState: { errors } } = useForm();
    const onSubmit = data =>  {
    const className=data.name;
    const classImage=data.pictureURL;
    const availableSeats=data.AvailableSeats;
    const price=data.price;
    const ClassData = {className,classImage,name,email,availableSeats,price};
    console.log(ClassData);

    fetch(`http://localhost:5000/class/${_id}`, {
        method: 'PATCH',
        headers: {
            'content-type': 'application/json'
        },
        body: JSON.stringify(ClassData)
    })
    .then(res => res.json())
    .then(data =>{
        console.log(data)
        if(data.modifiedCount > 0) {
            Swal.fire({
                title: 'Class Updated',
                text: 'Update class Successfully',
                icon: 'success',
                confirmButtonText: 'Done'
              })
        }
    })
}


    return (
        <div>
            <div className="px-20 pb-20">
              <p className="gFont2 text-3xl text-center py-5 px-10 font-semibold">Update Class</p>
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
            defaultValue={clName}
            {...register("name")}
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
            defaultValue={clImage}
            {...register("pictureURL")}
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
            htmlFor="AvailableSeat"
            className="block mb-2 text-sm font-bold text-gray-700"
          >
            Available seats:
          </label>
          <input
            type="text"
            name="AvailableSeats"
            defaultValue={claAailableSeats}
            {...register("AvailableSeats")}
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
            defaultValue={clPrice}
            {...register("price")}
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
        </div>
    );
};

export default UpdateClass;