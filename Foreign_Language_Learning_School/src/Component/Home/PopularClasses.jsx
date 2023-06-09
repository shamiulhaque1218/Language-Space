/* eslint-disable no-unused-vars */
import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import React from "react";
import useAxiosSecure from "../Hooks/useAxiosSecure";
import ContentLoader from "react-content-loader";

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
  if (isLoading) return <>
  <ContentLoader viewBox="0 0 380 70">
    {/* Only SVG shapes */}
    <rect x="0" y="0" rx="5" ry="5" width="70" height="70" />
    <rect x="80" y="17" rx="4" ry="4" width="300" height="13" />
    <rect x="80" y="40" rx="3" ry="3" width="250" height="10" />
  </ContentLoader>{" "}
</>
  if (error) return "An error has occurred: " + error.message;
  console.log(tqData);

  return (
    <div className="grid grid-cols-3 gFont3 px-14">
      {tqData.map((res) => (
        <div key={res._id}>
          <div className="card shadow-gray-300 rounded-sm w-96 shadow-md px-2 mt-6 ml-2">
            <figure>
              <img
                src={res.classImage}
                alt="Shoes"
                className="h-52 w-full m-2 rounded-lg"
              />
              
            </figure>
            <div className="card-body">
              <div className="grid grid-cols-2">
              <p className="card-title">{res.className}</p>
              <p className="text-xl bgFont ml-20">$ {res.price}</p>
              </div>
              <p className="text-base"> <span className="font-semibold">Instructor name :</span>{res.name}</p>
              <p className="text-base"> <span className="font-semibold">Available seats :</span>{res.availableSeats}</p>
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
