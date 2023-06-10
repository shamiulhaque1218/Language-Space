/* eslint-disable no-unused-vars */

import { useContext } from "react";
import { AuthContext } from "../../../provider/AuthProvider";
import { useQuery } from "@tanstack/react-query";



const useCart = () => {
    const {user} = useContext(AuthContext);
    const myemail = user?.email
    const {
        refetch,
        isLoading,
        data: carts = [],
      } = useQuery({
        queryFn: async () => {
          const data = await fetch(`http://localhost:5000/cart/${myemail}`)
          //console.log({ fromTq: data });
          return data.json();
        },
        queryKey: ['cart']
      });
    return [carts, refetch,isLoading]
};

export default useCart;