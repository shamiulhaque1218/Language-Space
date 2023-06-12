/* eslint-disable react/prop-types */
import { useContext } from "react";
import { AuthContext } from "../../../provider/AuthProvider";
import { Navigate } from "react-router-dom";
import { useQuery } from "@tanstack/react-query";
import useAxiosSecure from "../Hooks/useAxiosSecure";
import ContentLoader from "react-content-loader";

const AdminRoute = ({ children }) => {
    const { user } = useContext(AuthContext);
    const [axiosSecure] = useAxiosSecure();
    const {
        data: tqData3 = [], isLoading
      } = useQuery({
        queryFn: async () => {
          const data3 = await axiosSecure.get(`/user/ins/Admin/${user.email}`);
          //console.log({ fromTq: data });
          return data3?.data;
        },
        queryKey: ["users3"],
      });
    
   console.log(tqData3.length)

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

    if ( !tqData3.length == 0 ) {
        return children;
    }
    return <Navigate to="/login"> </Navigate>
};

export default AdminRoute;