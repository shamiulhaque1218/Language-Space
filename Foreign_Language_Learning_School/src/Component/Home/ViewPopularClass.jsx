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
      <>
        <ContentLoader viewBox="0 0 380 70">
          <rect x="0" y="0" rx="5" ry="5" width="70" height="70" />
          <rect x="80" y="17" rx="4" ry="4" width="300" height="13" />
          <rect x="80" y="40" rx="3" ry="3" width="250" height="10" />
        </ContentLoader>{" "}
      </>
    );
  //  console.log(isAdmin,isInstructor)
    //*** end ****

    return (
        <div data-aos="fade-zoom-in"
        data-aos-easing="ease-in-back"
        data-aos-delay="300"
        data-aos-offset="0"
        className="shadow-gray-300 shadow-xl">
        <div className="card rounded-lg  border lg:px-2 px-2">
          <figure className="m-3 mt-4">
            <img
              src={result.classImage}
              alt="class"
              className="h-52 w-full rounded-lg transform transition duration-300 hover:scale-110"
            />
            
          </figure>
          <div className="pl-3">
            <p className="text-lg font-semibold py-5"> {result.className} </p>
            <p className="text-lg bg-blue-600 rounded-sm px-2 text-white absolute top-10 right-10">${result.price} </p>
            <p className="text-sm"> By <span className="text-blue-600">{result.name}</span> </p>
            
            <container className="flex gap-5 pt-2 pb-3 text-gray-500">
            <p> <MdClass className="inline text-lg" />
             12 Classes 
             </p>

            <div>
            {
                result.availableSeats > 0 ? <p className="text-md"> <span className="font-semibold"> <MdOutlinePeopleOutline className="inline" /> </span> {result.availableSeats} seats available </p>
              : 
              <p className=" text-red-600"> <span className="font-semibold">
                <MdOutlinePeopleOutline className="inline" />
                </span> {result.availableSeats} seat available </p>
              } 
  
            </div>
            </container>
             
            
          </div>
        </div>
        <div className="bg-blue-600 text-center rounded-b-lg">

{
    (!isAdmin.length && !isInstructor.length && result.availableSeats !== 0) ? (
     <button onClick={() => addToCart(result)} className="p-2 bg-blue-600 text-white rounded-md text-sm">
     Add to Cart
    </button>
   ) : (
  <button disabled className="p-2 bg-blue-600 text-white rounded-md text-sm">
  Add to Cart
  </button>
  )
  }


</div>
      </div>
    );
};

export default ViewPopularClass;