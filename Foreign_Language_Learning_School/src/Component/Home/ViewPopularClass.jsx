
/* eslint-disable react/prop-types */
import { MdClass } from "react-icons/md";
import { MdOutlinePeopleOutline } from "react-icons/md";
import Swal from "sweetalert2";
import useAxiosSecure from "../Hooks/useAxiosSecure";
import { useContext } from "react";
import { AuthContext } from "../../../provider/AuthProvider";
import { useNavigate } from "react-router-dom";
import ContentLoader from "react-content-loader";
import { useQuery } from "@tanstack/react-query";

const ViewPopularClass = ({result}) => {

  const [axiosSecure] = useAxiosSecure();
  const {user} = useContext(AuthContext);
  const navigate = useNavigate();
   // console.log(result);

     // *** post data  start ***
  const addToCart = (result) => {
    console.log(result);
   
    if(user) {
      const CartToClass = {classId: result._id, picture:result.classImage, nameOfClass:result.className, classPrice:result.price, userEmail:user.email}
      axiosSecure.post(`/cart`, CartToClass)
    .then(data =>{
      console.log(data)
      if(data.data.insertedId) {
          Swal.fire({
              title: 'Add to Cart' ,
              text: 'Added Cart Successfully',
              icon: 'success',
              confirmButtonText: 'Done'
            })
      }
  })
    }
    else{
      Swal.fire({
        title: 'Please login to add the class',
        icon: 'warning',
        showCancelButton: true,
        confirmButtonColor: '#3085d6',
        cancelButtonColor: '#d33',
        confirmButtonText: 'Login in now!'
      }).then((result) => {
        if (result.isConfirmed) {
         navigate('/login')
        }
      })
    }

    // fetch(`https://foreign-language-learning-school-server-six.vercel.app/jwt`, {
    //     method:"POST",
    //     headers: {
    //         "content-type":"application/json",
    //     }, body: JSON.stringify({email: user.email}),
    // }).then((res)=> res.json()).then((data) => localStorage.setItem("access-token", data?.token))

  }
  // *** post data end ***
  // ** check user admin or instructor ***
  const {
    isLoading,
    data: isAdmin = [],
  } = useQuery({
    queryFn: async () => {
      const data5 = await axiosSecure.get(`/user/ins/Admin/${user.email}`);
      //console.log({ fromTq: data });
      return data5?.data;
    },
    queryKey: ["admin5"],
  });

  const {
    data: isInstructor = [],
  } = useQuery({
    queryFn: async () => {
      const data3 = await axiosSecure.get(`/user/ins/Instructor/${user.email}`);
      //console.log({ fromTq: data });
      return data3?.data;
    },
    queryKey: ["instructor3"],
  });


  if (isLoading)
    return (
      <div className="bg-white rounded-2xl p-4 shadow-lg animate-pulse">
        <ContentLoader viewBox="0 0 380 70">
          <rect x="0" y="0" rx="5" ry="5" width="70" height="70" />
          <rect x="80" y="17" rx="4" ry="4" width="300" height="13" />
          <rect x="80" y="40" rx="3" ry="3" width="250" height="10" />
        </ContentLoader>{" "}
      </div>
    );
  //  console.log(isAdmin,isInstructor)
    //*** end ****

    return (
        <div 
          data-aos="fade-zoom-in"
          data-aos-easing="ease-in-back"
          data-aos-delay="300"
          data-aos-offset="0"
          className="group h-full"
        >
          <div className="bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 h-full flex flex-col overflow-hidden border border-gray-100">
            {/* Image Section */}
            <div className="relative overflow-hidden">
              <div className="aspect-video w-full overflow-hidden bg-gray-100">
                <img
                  src={result.classImage}
                  alt={result.className}
                  className="w-full h-full object-cover transform transition-transform duration-500 group-hover:scale-110"
                />
              </div>
              
              {/* Price Badge */}
              <div className="absolute top-4 right-4">
                <div className="bg-gradient-to-r from-blue-600 to-blue-700 text-white px-4 py-2 rounded-full shadow-lg font-bold text-lg">
                  ${result.price}
                </div>
              </div>

              {/* Overlay gradient */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            </div>

            {/* Content Section */}
            <div className="p-6 flex-grow flex flex-col">
              {/* Class Title */}
              <h3 className="text-xl font-bold text-gray-800 mb-3 line-clamp-2 group-hover:text-blue-600 transition-colors duration-200">
                {result.className}
              </h3>

              {/* Instructor */}
              <div className="flex items-center gap-2 mb-4">
                <span className="text-sm text-gray-600">by</span>
                <span className="text-sm font-semibold text-blue-600 hover:text-blue-700 transition-colors">
                  {result.name}
                </span>
              </div>

              {/* Class Info */}
              <div className="flex items-center justify-between gap-4 mt-auto pt-4 border-t border-gray-100">
                <div className="flex items-center gap-2 text-gray-600">
                  <MdClass className="text-xl text-blue-600" />
                  <span className="text-sm font-medium">12 Classes</span>
                </div>

                <div className="flex items-center gap-2">
                  <MdOutlinePeopleOutline className={`text-xl ${result.availableSeats > 0 ? 'text-blue-600' : 'text-red-500'}`} />
                  <span className={`text-sm font-medium ${result.availableSeats > 0 ? 'text-gray-600' : 'text-red-600'}`}>
                    {result.availableSeats} {result.availableSeats === 1 ? 'seat' : 'seats'}
                  </span>
                </div>
              </div>

              {/* Availability Status */}
              {result.availableSeats === 0 && (
                <div className="mt-3 px-3 py-1.5 bg-red-50 border border-red-200 rounded-lg">
                  <p className="text-xs font-semibold text-red-600 text-center">
                    Sold Out
                  </p>
                </div>
              )}
            </div>

            {/* Action Button */}
            <div className="p-6 pt-0">
              {(!isAdmin.length && !isInstructor.length && result.availableSeats !== 0) ? (
                <button 
                  onClick={() => addToCart(result)} 
                  className="w-full bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 text-white font-semibold py-3 px-6 rounded-xl transition-all duration-300 transform hover:scale-105 hover:shadow-lg active:scale-95"
                >
                  Add to Cart
                </button>
              ) : (
                <button 
                  disabled 
                  className="w-full bg-gray-300 text-gray-500 font-semibold py-3 px-6 rounded-xl cursor-not-allowed opacity-60"
                >
                  {result.availableSeats === 0 ? 'Sold Out' : 'Not Available'}
                </button>
              )}
            </div>
          </div>
        </div>
    );
};

export default ViewPopularClass;