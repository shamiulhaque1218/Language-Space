/* eslint-disable react/prop-types */

import Swal from "sweetalert2";
import useAxiosSecure from "../Hooks/useAxiosSecure";
import { useContext } from "react";
import { AuthContext } from "../../../provider/AuthProvider";
import { useNavigate } from "react-router-dom";
import ContentLoader from "react-content-loader";
import { useQuery } from "@tanstack/react-query";

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

    // fetch(`https://foreign-language-learning-school-server-six.vercel.app/jwt`, {
    //     method:"POST",
    //     headers: {
    //         "content-type":"application/json",
    //     }, body: JSON.stringify({email: user.email}),
    // }).then((res)=> res.json()).then((data) => localStorage.setItem("access-token", data?.token))

  }
  // *** post data end ***
  // ** check user admin or instructor ***
  const {
    isLoading,
    data: isAdmin = [],
  } = useQuery({
    queryFn: async () => {
      const data5 = await axiosSecure.get(`/user/ins/Admin/${user.email}`);
      //console.log({ fromTq: data });
      return data5?.data;
    },
    queryKey: ["admin5"],
  });

  const {
    data: isInstructor = [],
  } = useQuery({
    queryFn: async () => {
      const data3 = await axiosSecure.get(`/user/ins/Instructor/${user.email}`);
      //console.log({ fromTq: data });
      return data3?.data;
    },
    queryKey: ["instructor3"],
  });


  if (isLoading)
    return (
      <>
        <ContentLoader viewBox="0 0 380 70">
          <rect x="0" y="0" rx="5" ry="5" width="70" height="70" />
          <rect x="80" y="17" rx="4" ry="4" width="300" height="13" />
          <rect x="80" y="40" rx="3" ry="3" width="250" height="10" />
        </ContentLoader>{" "}
      </>
    );
  //  console.log(isAdmin,isInstructor)
    //*** end ****

    return (
        <div data-aos="fade-zoom-in"
        data-aos-easing="ease-in-back"
        data-aos-delay="300"
        data-aos-offset="0">
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

            
              {
                result.availableSeats > 0 ? <p className="text-base"> <span className="font-semibold">Available seats :</span> {result.availableSeats}</p>
              : 
              <p className="text-base text-red-600"> <span className="font-semibold">Available seats :</span> {result.availableSeats} </p>
              } 
  
            
            
            <div className="card-actions justify-end">

            {
                (!isAdmin.length && !isInstructor.length && result.availableSeats !== 0) ? (
                 <button onClick={() => addToCart(result)} className="btn btn-primary">
                 Add to Cart
                </button>
               ) : (
              <button disabled className="btn btn-primary">
              Add to Cart
              </button>
              )
              }


            </div>
          </div>
        </div>
      </div>
    );
};

export default ViewPopularClass;