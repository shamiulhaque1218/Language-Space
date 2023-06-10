/* eslint-disable react/prop-types */

import Swal from "sweetalert2";
import useAxiosSecure from "../Hooks/useAxiosSecure";
import { useContext } from "react";
import { AuthContext } from "../../../provider/AuthProvider";
import { useNavigate } from "react-router-dom";

const ViewPopularClass = ({result}) => {

  const [axiosSecure] = useAxiosSecure();
  const {user} = useContext(AuthContext);
  const navigate = useNavigate();
   // console.log(result);

     // *** post data  start ***
  const addToCart = (result) => {
    console.log(result);
   
    if(user) {
      const CartToClass = {classId: result._id, picture:result.classImage, nameOfClass:result.className, classPrice:result.price, userEmail:user.email}
      axiosSecure.post(`/cart`, CartToClass)
    .then(data =>{
      console.log(data)
      if(data.data.insertedId) {
          Swal.fire({
              title: 'Add to Cart' ,
              text: 'Added Cart Successfully',
              icon: 'success',
              confirmButtonText: 'Done'
            })
      }
  })
    }
    else{
      Swal.fire({
        title: 'Please login to add the class',
        icon: 'warning',
        showCancelButton: true,
        confirmButtonColor: '#3085d6',
        cancelButtonColor: '#d33',
        confirmButtonText: 'Login in now!'
      }).then((result) => {
        if (result.isConfirmed) {
         navigate('/login')
        }
      })
    }
  }
  // *** post data end ***
    return (
        <div>
        <div className="card shadow-gray-300 rounded-sm w-96 shadow-md px-2 mt-6 ml-2">
          <figure>
            <img
              src={result.classImage}
              alt="Shoes"
              className="h-52 w-full m-2 rounded-lg"
            />
            
          </figure>
          <div className="card-body">
            <div className="grid grid-cols-2 ">
            <p className="card-title"> {result.className} </p>
            <p className="text-xl bgFont ml-20">${result.price} </p>
            </div>
            <p className="text-base"> <span className="font-semibold">Instructor name :</span> {result.name}</p>
            <p className="text-base"> <span className="font-semibold">Available seats :</span> {result.availableSeats}</p>
            <div className="card-actions justify-end">
              <button  onClick={() => addToCart(result)} className="btn btn-primary">Buy Course</button>
            </div>
          </div>
        </div>
      </div>
    );
};

export default ViewPopularClass;