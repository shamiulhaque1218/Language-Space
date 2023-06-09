/* eslint-disable no-unused-vars */
import { useQuery } from "@tanstack/react-query";
import React from "react";
import ContentLoader from "react-content-loader";
import useAxiosSecure from "../Hooks/useAxiosSecure";
import { Link } from "react-router-dom";
import Swal from "sweetalert2";

const ViewClass = () => {
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
    queryKey: ["users"],
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
  const handelDelete = (_id) => {
    Swal.fire({
        title: 'Are you sure?',
        text: "You won't be able to revert this!",
        icon: 'warning',
        showCancelButton: true,
        confirmButtonColor: '#3085d6',
        cancelButtonColor: '#d33',
        confirmButtonText: 'Yes, delete it!'
      }).then((result) => {
        if (result.isConfirmed) {
        //   Swal.fire(
        //     'Deleted!',
        //     'Your Toy data has been deleted.',
        //     'success'
        //   )
        fetch(`http://localhost:5000/class/${_id}`,{
            method: 'DELETE'
        })
        .then(res => res.json())
        .then(data => {
            console.log(data);
            if(data.deletedCount > 0) {
                Swal.fire(
                        'Deleted!',
                        'Your Toy data has been deleted.',
                        'success'
                      )
                      refetch();
                      
            }
        })

        }
      })

  };
  //console.log(tqData);
  

  return (
    <div>
      <table className="table table-compact w-full">
        <thead>
          <tr>
            <th className="text-center">Class Image</th>
            <th className="text-center">Class Name</th>
            <th className="text-center">Instructor Name</th>
            <th className="text-center">Instructor Email</th>
            <th className="text-center">Available seats</th>
            <th className="text-center">Price</th>
            <th className="text-center">Status</th>
            <th className="text-center"> </th>
          </tr>
        </thead>

        {tqData.map((data) => (
          <tbody key={data._id} className=" p-1">
          <tr className="border-2 ">
            <td>
              <img className="h-12 w-12 ml-8" src={data.classImage} alt="" />{" "}
            </td>
            <td className="p-3 text-center">{data.className} </td>
            <td className="p-3 text-center">{data.name} </td>
            <td className="p-3 text-center">{data.email} </td>
            <td className="p-3 text-center">{data.availableSeats} </td>
            <td className="p-3 text-center">{data.price} </td>
            <td className="p-3 text-center"> status </td>
            <div>
              <Link to={`/update/${data._id}`}>
                {" "}
                <button className="btn btn-active text-center space-x-1">
                  Update
                </button>{" "}
              </Link>
              <button
                onClick={() => handelDelete(data._id)}
                className="btn bg-red-600 text-center"
              >
                Delete
              </button>
            </div>
          </tr>
        </tbody>
        ))}
      </table>
    </div>
  );
};

export default ViewClass;

