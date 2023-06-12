
/* eslint-disable react/prop-types */
import { useContext } from "react";
import { AuthContext } from "../../../provider/AuthProvider";
import { Navigate } from "react-router-dom";
import useAxiosSecure from "../Hooks/useAxiosSecure";
import { useQuery } from "@tanstack/react-query";
import ContentLoader from "react-content-loader";

const InstractorRoutes = ({ children }) => {
    const { user } = useContext(AuthContext);
    const [axiosSecure] = useAxiosSecure();
   // console.log(user.email)
    const {
        data: tqData = [], isLoading
      } = useQuery({
        queryFn: async () => {
          const data = await axiosSecure.get(`/user/ins/Instructor/${user.email}`);
         console.log(data?.data );
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
    console.log(tqData)
   

    if ( !tqData.length == 0 ) {
        return children;
    }
    return <Navigate to="/login"> </Navigate>
};

export default InstractorRoutes;