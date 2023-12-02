/* eslint-disable no-unused-vars */
import { useQuery } from "@tanstack/react-query";
import React from "react";
import useAxiosSecure from "../Hooks/useAxiosSecure";
import ContentLoader from "react-content-loader";
import ViewPopularClass from "./ViewPopularClass";

const PopularClasses = () => {

  
  const [axiosSecure] = useAxiosSecure();

  const {
    isLoading,
    error,
    data: tqData = [],
  } = useQuery({
    queryFn: async () => {
      const data = await axiosSecure.get(`/class/popular/approved`);
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
    <>
    <strong className='lg:text-4xl text-2xl lg:pl-9 pl-3 text-blue-950'>Perfect Online Course For </strong>
    <p className='lg:text-4xl text-2xl lg:pl-9 pl-3 font-bold text-blue-950'>Your Career </p>
    
    <div className="grid lg:grid-cols-3 grid-cols-1 gFont3 lg:px-24 px-10 gap-8 py-8">
      {tqData.map(result => <ViewPopularClass key={result._id} result={result} > </ViewPopularClass>
      
      )
      }

    </div>
    </>
  );
};

export default PopularClasses;
