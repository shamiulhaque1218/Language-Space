/* eslint-disable no-unused-vars */
import ContentLoader from "react-content-loader";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Swal from "sweetalert2";
import { faTrash } from "@fortawesome/free-solid-svg-icons";
import useAxiosSecure from "../../Hooks/useAxiosSecure";
import { useQuery } from "@tanstack/react-query";
import { useContext } from "react";
import { AuthContext } from "../../../../provider/AuthProvider";
import { Link } from "react-router-dom";
import PaymentHistory2 from "./PaymentHistory2";


const PaymentHistory = () => {
    const [axiosSecure] = useAxiosSecure();
    const {user} = useContext(AuthContext);
     
  const {
    isLoading,
    refetch,
    error,
    data: tqData = [],
  } = useQuery({
    queryFn: async () => {
      const data = await axiosSecure.get(`/payments/${user?.email}`);
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
            </ContentLoader>
          </>
        );
       
               

  return (
    <div>
      {
        tqData.length > 0 ? <div>
        <div className="bdimage">
           <p className="gFont2 text-5xl pt-32  py-5 px-10">My Payment History || {tqData.length} </p> 
           </div>
           <Link className='ml-10' to="/dashboard" > <button className="mb-5 px-2 py-2 text-center font-bold text-white mt-5 bg-green-600 rounded-md hover:bg-green-800" >
               Back to Dashboard
             </button> </Link>
       <div className="flex gap-10 px-10 py-4">
       </div>
       <table className="table table-compact w-full">
         <thead>
           <tr className="bg-black py-2 text-white gFont3">
             <th className="text-center">Index</th>
             <th className="text-center">Class</th>
             <th className="text-center">Total Price</th>
             <th className="text-center">Transition Id</th>
             <th className="text-center">Date</th>
             <th className="text-center">Order Status</th>
           </tr>
         </thead>
 
         {tqData.map((data, index) => <PaymentHistory2 key={data._id} data={data} index={index} > </PaymentHistory2> )}
       </table>
     </div>
     :
     <div>
       <div className="bdimage">
          <p className="gFont2 text-5xl pt-32  py-5 px-10">My Payment History ||   </p> 
          </div>
    </div>
      }
    </div>
  );
};

export default PaymentHistory;
