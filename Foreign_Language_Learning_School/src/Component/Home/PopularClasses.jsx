/* eslint-disable no-unused-vars */
import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import React, { useState } from "react";
import useAxiosSecure from "../Hooks/useAxiosSecure";
import ContentLoader from "react-content-loader";
import Swal from "sweetalert2";
import ViewPopularClass from "./ViewPopularClass";

const PopularClasses = () => {

  //const {className,classImage,availableSeats,price} = update
  
  const [axiosSecure] = useAxiosSecure();

  const {
    isLoading,
    error,
    data: tqData = [],
  } = useQuery({
    queryFn: async () => {
      const data = await axiosSecure.get(`class/popular/approved`);
      //console.log({ fromTq: data });
      return data?.data;
    },
    queryKey: ["users"],
  }); 
  //console.log(tqData);
  if (isLoading) return <>
  <ContentLoader viewBox="0 0 380 70">
    {/* Only SVG shapes */}
    <rect x="0" y="0" rx="5" ry="5" width="70" height="70" />
    <rect x="80" y="17" rx="4" ry="4" width="300" height="13" />
    <rect x="80" y="40" rx="3" ry="3" width="250" height="10" />
  </ContentLoader>{" "}
</>
  if (error) return "An error has occurred: " + error.message;
  //console.log(tqData);

  return (
    <div className="grid lg:grid-cols-3 grid-cols-1 gFont3 lg:px-14 px-10">
      {tqData.map(result => <ViewPopularClass key={result._id} result={result} > </ViewPopularClass>
      
      )
      }

    </div>
  );
};

export default PopularClasses;
