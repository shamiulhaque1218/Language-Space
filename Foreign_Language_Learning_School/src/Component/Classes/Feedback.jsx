/* eslint-disable no-unused-vars */
import React, { useContext } from 'react';
import { useForm } from 'react-hook-form';
import Swal from 'sweetalert2';
import { AuthContext } from '../../../provider/AuthProvider';
import { Link, useLoaderData } from 'react-router-dom';

const Feedback = () => {
    
    const feedbacks = useLoaderData();
    const {_id} = feedbacks;

    const { register, handleSubmit, formState: { errors } } = useForm();
    const onSubmit = data =>  {
        console.log(data)
    const feedback=data.feedback;
    const ClassData = {feedback};
    console.log(ClassData);

    fetch(`https://foreign-language-learning-school-server-six.vercel.app/class/${_id}`, {
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
                title: 'Feedback',
                text: 'Feedback for class Successfully',
                icon: 'success',
                confirmButtonText: 'Done'
              })
        }
    })
}


    return (
        <div>
            <div className="px-20 pb-20 gFont2 ">
              <p className="text-3xl text-center py-5 px-10 font-semibold">Feedback for Class</p>
               <Link className='ml-10' to="/viewclass" > <button className="mb-5 px-2 py-2 text-center font-bold text-white bg-green-600 rounded-md hover:bg-green-800" >
               Back to Manage Classes 
             </button> </Link>
            <form  onSubmit={handleSubmit(onSubmit)} className="grid grid-cols-2">
            <div className="mb-4 mx-10">
            <label
            htmlFor="feedback"
            className="block mb-2 text-lg font-bold text-gray-700">
            Feedback:
          </label>
          <textarea
            type="text"
            name="feedback"
            {...register("feedback")}
            className="w-full px-3 py-2 placeholder-gray-400 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>

        <button
          type="submit"
          className="mt-9 mb-5 mx-40  text-center text-lg font-bold text-white bg-blue-500 rounded-full hover:bg-blue-600" >
          Submit Feedback 
        </button>
      </form>
             </div> 
        </div>
    );
};

export default Feedback;