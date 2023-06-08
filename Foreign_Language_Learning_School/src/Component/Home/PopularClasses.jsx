/* eslint-disable no-unused-vars */
import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import React from "react";
import useAxiosSecure from "../Hooks/useAxiosSecure";

const PopularClasses = () => {
  const [axiosSecure] = useAxiosSecure();

  const {
    isLoading,
    error,
    data: tqData = [],
  } = useQuery({
    queryFn: async () => {
      const data = await axiosSecure.get(`/class`);
      console.log({ fromTq: data });
      return data?.data;
    },
    queryKey: ["users"],
  });
  if (isLoading) return "Loading...";
  if (error) return "An error has occurred: " + error.message;
  console.log(tqData);

  return (
    <div className="grid grid-cols-4">
      {tqData.map((res) => (
        <div key={res._id}>
          <div className="card card-compact w-80 bg-gray-200 shadow-xl px-2 ml-2">
            <figure>
              <img
                src={res.classImage}
                alt="Shoes"
                className="h-40 w-full"
              />
            </figure>
            <div className="card-body">
              <h2 className="card-title">{res.className}</h2>
              <p className="text-base"> <span className="font-semibold">Instructor name :</span>{res.name}</p>
              <p className="text-base"> <span className="font-semibold">Available seats :</span>{res.availableSeats}</p>
              <p className="text-base"> <span className="font-semibold">Course Price :</span>{res.price}</p>
              <div className="card-actions justify-end">
                <button className="btn btn-primary">Buy Course</button>
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default PopularClasses;
