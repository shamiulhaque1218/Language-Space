/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */

import { loadStripe } from "@stripe/stripe-js";
import PaymentCheckOut from "./PaymentCheckOut";
import { Elements } from "@stripe/react-stripe-js";
import useAxiosSecure from "../../Hooks/useAxiosSecure";
import { useQuery } from "@tanstack/react-query";
import { useContext, useState } from "react";
import { AuthContext } from "../../../../provider/AuthProvider";
import { useLoaderData, useLocation } from "react-router-dom";
import ContentLoader from "react-content-loader";

const stripePromise = loadStripe(import.meta.env.VITE_payment);

const Payment = ({classPrice}) => {
  const location = useLocation();
  const [value,setValue] = useState('')
const data = location.state;
//console.log(data);
const {user,loader} = useContext(AuthContext);
const mydata = useLoaderData();
if(loader) {
  <ContentLoader viewBox="0 0 380 70">
  {/* Only SVG shapes */}
  <rect x="0" y="0" rx="5" ry="5" width="70" height="70" />
  <rect x="80" y="17" rx="4" ry="4" width="300" height="13" />
  <rect x="80" y="40" rx="3" ry="3" width="250" height="10" />
</ContentLoader>
}
//console.log(mydata)
const ourPrice = mydata.classPrice
const totalPrice = parseFloat(ourPrice) 

//console.log(ourPrice)



    // const [axiosSecure] = useAxiosSecure();
   
    // const {
    //     data: tqData = [] } = useQuery({
    //     queryFn: async () => {
    //       const data = await axiosSecure.get(`/cart/${user?.email}`);
    //       //console.log({ fromTq: data });
    //       return data?.data;
    //     },
    //     queryKey: ["users"],
    //   });
     // const total = tqData.reduce((sum, item) => parseFloat(item.classPrice) + sum, 0 )
    

    return (
        <div>
            <div className="bdimage">
          <p className="gFont2 text-5xl pt-32  py-5 px-10"> Payment </p> 
          </div>

            <Elements stripe={stripePromise}>
            <PaymentCheckOut tqData={mydata} classPrice={totalPrice}  > </PaymentCheckOut>
            </Elements>
            
        </div>
    );
};

export default Payment;