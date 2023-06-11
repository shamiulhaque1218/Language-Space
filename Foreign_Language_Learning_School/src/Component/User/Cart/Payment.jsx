/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */

import { loadStripe } from "@stripe/stripe-js";
import PaymentCheckOut from "./PaymentCheckOut";
import { Elements } from "@stripe/react-stripe-js";
import useAxiosSecure from "../../Hooks/useAxiosSecure";
import { useQuery } from "@tanstack/react-query";
import { useContext } from "react";
import { AuthContext } from "../../../../provider/AuthProvider";

const stripePromise = loadStripe(import.meta.env.VITE_payment);
const Payment = ({classPrice}) => {
    const [axiosSecure] = useAxiosSecure();
    const {user} = useContext(AuthContext);
    const {
        data: tqData = [] } = useQuery({
        queryFn: async () => {
          const data = await axiosSecure.get(`/cart/${user?.email}`);
          //console.log({ fromTq: data });
          return data?.data;
        },
        queryKey: ["users"],
      });
      const total = tqData.reduce((sum, item) => parseFloat(item.classPrice) + sum, 0 )
      const totalPrice = parseFloat(total.toFixed(2))

    return (
        <div>
            <h2 className="p-8 ml-20 text-3xl gFont3">Payment</h2>

            <Elements stripe={stripePromise}>
            <PaymentCheckOut classPrice={totalPrice}> </PaymentCheckOut>
            </Elements>
            
        </div>
    );
};

export default Payment;