/* eslint-disable no-unused-vars */
import { useQuery } from "@tanstack/react-query";
import React, { useContext } from "react";
import ContentLoader from "react-content-loader";
import useAxiosSecure from "../Hooks/useAxiosSecure";
import { Link } from "react-router-dom";
import Swal from "sweetalert2";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircleCheck, faCircleXmark, faComments, faTrash} from "@fortawesome/free-solid-svg-icons";
import { faEdit } from "@fortawesome/free-regular-svg-icons";
import { AuthContext } from "../../../provider/AuthProvider";

const ViewClass = () => {
  const {user} = useContext(AuthContext)
  const [axiosSecure] = useAxiosSecure();

  const {
    isLoading,
    refetch,
    error,
    data: tqData = [],
  } = useQuery({
    queryFn: async () => {
      const data = await axiosSecure.get(`/class`);
      //console.log({ fromTq: data });
      return data?.data;
    },
    queryKey: ["myuser"],
  });
  if (isLoading)
    return (
      <>
        <ContentLoader viewBox="0 0 380 70">
          {/* Only SVG shapes */}
          <rect x="0" y="0" rx="5" ry="5" width="70" height="70" />
          <rect x="80" y="17" rx="4" ry="4" width="300" height="13" />
          <rect x="80" y="40" rx="3" ry="3" width="250" height="10" />
        </ContentLoader>{" "}
      </>
    );
  if (error) return "An error has occurred: " + error.message;

  const handelAdd = (_id) => {
    fetch(`https://foreign-language-learning-school-server-six.vercel.app/class/${_id}`, {
        method: 'PATCH',
        headers: {
            'content-type': 'application/json'
        },
        body: JSON.stringify({status: 'approved'})
    })
    .then(res => res.json())
    .then(data =>{
        console.log(data)
        refetch();
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
  const handelReject = (_id) => {
    fetch(`https://foreign-language-learning-school-server-six.vercel.app/class/${_id}`, {
        method: 'PATCH',
        headers: {
            'content-type': 'application/json'
        },
        body: JSON.stringify({status: 'denied'})
    })
    .then(res => res.json())
    .then(data =>{
        console.log(data)
        refetch();
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
  
  
  //console.log(tqData);
  

  return (
    <div>
         <div className="bdimage">
          <p className="gFont2 text-5xl pt-32  py-5 px-10">Manage Classes || {tqData.length} </p> 
          </div>
          
          <Link className='ml-10' to="/dashboard" > <button className="mb-5 px-2 py-2 text-center font-bold text-white mt-5 bg-green-600 rounded-md hover:bg-green-800" >
               Back to Dashboard
             </button> </Link>

      <table className="table table-compact w-full">
        <thead>
          <tr className="bg-black py-2 text-white gFont3">
            <th className="text-center">Class Image</th>
            <th className="text-center">Class Name</th>
            <th className="text-center">Instructor Name</th>
            <th className="text-center">Instructor Email</th>
            <th className="text-center">Available seats</th>
            <th className="text-center">Feedback</th>
            <th className="text-center">Price</th>
            <th className="text-center">Status</th>
            <td className="p-3 text-center"> Action </td> 
          </tr>
        </thead>

        {tqData.map((data,index) => (
          
          <tbody key={data._id} className=" p-1">
          <tr className="border-2">
            <td className="flex">
              <p className="p-3 text-center">  {index+1} </p>
              <img className="h-12 w-12 ml-8 rounded-xl" src={data?.classImage} alt="" />
            </td>
            <td className="p-3 text-center">{data?.className} </td>
            <td className="p-3 text-center">{data?.name} </td>
            <td className="p-3 text-center">{data?.email} </td>
            <td className="p-3 text-center">{data?.availableSeats} </td>
            <td className="p-3 text-center"> {data?.feedback ? data?.feedback : "No Feedback" } </td>
            <td className="p-3 text-center">{data?.price} </td>
            <td className="p-3 text-center"> {data?.status } </td>
            
                <td> 
            <div>
             
                {
                  data.status === "approved" || data.status === "denied"   ? <button
                  onClick={() => handelAdd(data._id)}
                   className="btn px-3 py-3 bg-green-600 text-center space-x-1" disabled>
                  <FontAwesomeIcon className='h-4 text-white' icon={faCircleCheck} />
                  </button> : <button
                onClick={() => handelAdd(data._id)}
                 className="btn px-3 py-3 bg-green-600 text-center space-x-1">
                <FontAwesomeIcon className='h-4 text-white' icon={faCircleCheck} />
                </button>
                }
                {
                  data.status === "approved" || data.status === "denied"   ? <button
                  onClick={() => handelReject(data._id)}
                  className="btn px-3 py-3 bg-red-600 text-center" disabled>
                <FontAwesomeIcon className='h-4 text-white' icon={faCircleXmark} />
                </button> :
                <button
                onClick={() => handelReject(data._id)}
                className="btn px-3 py-3 bg-red-600 text-center">
              <FontAwesomeIcon className='h-4 text-white' icon={faCircleXmark} />
              </button>
                }
              

              <Link to={`/feedback/${data._id}`} >
              <button
                className="btn px-3 py-3 bg-orange-600 text-center">
            <FontAwesomeIcon className='h-4 text-white' icon={faComments} />
              </button>
              </Link>
            </div>
            </td>
             
          </tr>
        </tbody>
        )
        
        )}
      </table>
    </div>
  );
};

export default ViewClass;

