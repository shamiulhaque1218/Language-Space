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


const MyCart = () => {
    const [axiosSecure] = useAxiosSecure();
    const {user} = useContext(AuthContext);
     
  const {
    isLoading,
    refetch,
    error,
    data: tqData = [],
  } = useQuery({
    queryFn: async () => {
      const data = await axiosSecure.get(`/cart/email/${user?.email}`);
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
        const handelDelete = (_id) => {
            Swal.fire({
                title: 'Are you sure?',
                text: "You won't be able to revert this!",
                icon: 'warning',
                showCancelButton: true,
                confirmButtonColor: '#3085d6',
                cancelButtonColor: '#d33',
                confirmButtonText: 'Yes, delete it!'
              }).then((result) => {
                if (result.isConfirmed) {
                fetch(`https://foreign-language-learning-school-server-six.vercel.app/cart/${_id}`,{
                    method: 'DELETE'
                })
                .then(res => res.json())
                .then(data => {
                    console.log(data);
                    if(data.deletedCount > 0) {
                        Swal.fire(
                                'Deleted!',
                                'Your selected class has been deleted.',
                                'success'
                              )
                              refetch();
                              
                    }
                })
        
                }
              })
        
          };
          const totalPrice = tqData.reduce((sum, item) => parseFloat(item.classPrice) + sum, 0 )
          

  return (
    <div>
      {
        tqData.length > 0 ? <div>
        <div className="bdimage">
           <p className="gFont2 text-5xl pt-32  py-5 px-10">My Cart || {tqData.length} </p> 
           </div>
       <div className="flex gap-10 px-10 py-4">
         <p className="text-2xl font-semibold">Total Orders: {tqData.length} </p>
         <p className="text-2xl font-semibold">Total Price: ${totalPrice} </p>
       </div>
       <table className="table table-compact w-full">
         <thead>
           <tr className="bg-black py-2 text-white gFont3 grid lg:grid-cols-7 grid-cols-4">
             <th className="justify-center hidden lg:flex">Index</th> 
             <th className="justify-center hidden lg:flex">Class Image</th>
             <th className="text-center ">Class Name</th>
             <th className="justify-center hidden lg:flex">My Email</th>
             <th className="text-center">Class Price</th>
             <th className="text-center">Action</th>
             <th className="text-center">Payment</th>
           </tr>
         </thead>
 
         {tqData.map((data, index) => (
           <tbody key={data._id} className=" p-1">
             <tr className="border-2 grid lg:grid-cols-7 grid-cols-4">
               <td className="justify-center hidden lg:flex"> {index + 1} </td>
               <td className="justify-center hidden lg:flex">
                 <img
                   className="h-12 w-12 rounded-xl"
                   src={data.picture}
                   alt=""
                 />
               </td>
               <td className="p-3 text-center">{data.nameOfClass} </td>
               <td className="justify-center hidden lg:flex">{data.userEmail} </td>
               <td className="p-3 text-center">$ {data.classPrice} </td>
               <td className="flex justify-center">
                <button
                 onClick={() => handelDelete(data._id)}
                 className="btn lg:py-3 py-1 bg-red-600 text-center">
                 <FontAwesomeIcon className='h-4  text-white' icon={faTrash} />
               </button> 
               </td>
               <td className="text-center">
                <Link state={tqData} to={`/payment/${data._id}`}> <button className="btn btn-active btn-primary">Pay</button>
                 </Link>
                 </td>
             </tr>
           </tbody>
         ))}
       </table>
     </div>
     :
     <div>
       <div className="bdimage">
          <p className="gFont2 text-5xl pt-32  py-5 px-10">My Cart || {tqData.length} </p> 
          </div>
    </div>
      }
    </div>
  );
};

export default MyCart;
