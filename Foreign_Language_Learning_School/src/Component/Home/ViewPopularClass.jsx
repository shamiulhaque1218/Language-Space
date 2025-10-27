/* eslint-disable react/prop-types */
import { MdClass, MdOutlinePeopleOutline } from "react-icons/md";
import Swal from "sweetalert2";
import useAxiosSecure from "../Hooks/useAxiosSecure";
import { useContext } from "react";
import { AuthContext } from "../../../provider/AuthProvider";
import { useNavigate } from "react-router-dom";
import ContentLoader from "react-content-loader";
import { useQuery } from "@tanstack/react-query";

const ViewPopularClass = ({ result }) => {
  const [axiosSecure] = useAxiosSecure();
  const { user } = useContext(AuthContext);
  const navigate = useNavigate();

  // Add to Cart Function
  const addToCart = (result) => {
    if (user) {
      const CartToClass = {
        classId: result._id,
        picture: result.classImage || "/no-image.png",
        nameOfClass: result.className,
        classPrice: result.price,
        userEmail: user.email,
      };
      axiosSecure.post(`/cart`, CartToClass).then((data) => {
        if (data.data.insertedId) {
          Swal.fire({
            title: "Added to Cart",
            text: "Class added successfully!",
            icon: "success",
            confirmButtonText: "Done",
          });
        }
      });
    } else {
      Swal.fire({
        title: "Please log in to add this class",
        icon: "warning",
        showCancelButton: true,
        confirmButtonColor: "#2563eb",
        cancelButtonColor: "#d33",
        confirmButtonText: "Login now",
      }).then((res) => {
        if (res.isConfirmed) navigate("/login");
      });
    }
  };

  // Check Admin
  const { isLoading, data: isAdmin = [] } = useQuery({
    queryFn: async () => {
      const res = await axiosSecure.get(`/user/ins/Admin/${user.email}`);
      return res.data;
    },
    queryKey: ["admin5"],
  });

  // Check Instructor
  const { data: isInstructor = [] } = useQuery({
    queryFn: async () => {
      const res = await axiosSecure.get(`/user/ins/Instructor/${user.email}`);
      return res.data;
    },
    queryKey: ["instructor3"],
  });

  if (isLoading)
    return (
      <ContentLoader viewBox="0 0 380 70">
        <rect x="0" y="0" rx="5" ry="5" width="70" height="70" />
        <rect x="80" y="17" rx="4" ry="4" width="300" height="13" />
        <rect x="80" y="40" rx="3" ry="3" width="250" height="10" />
      </ContentLoader>
    );

  return (
    <div className="bg-white rounded-2xl overflow-hidden shadow-lg border border-gray-100 hover:shadow-2xl transition-transform duration-300 transform hover:-translate-y-1">
      {/* Image Section */}
      <div className="relative">
        <img
          src={result.classImage || "/no-image.png"}
          alt={result.className}
          className="h-52 w-full object-cover"
        />
        <span className="absolute top-3 right-3 bg-blue-600 text-white text-sm font-semibold px-3 py-1 rounded-lg shadow-md">
          ${result.price}
        </span>
      </div>

      {/* Content Section */}
      <div className="p-5">
        <h3 className="text-xl font-semibold text-gray-800 mb-2">
          {result.className}
        </h3>
        <p className="text-sm text-gray-500 mb-3">
          by <span className="text-blue-600 font-medium">{result.name}</span>
        </p>

        {/* Info Row */}
        <div className="flex justify-between text-gray-600 text-sm mt-4 border-t pt-3">
          <p className="flex items-center gap-1">
            <MdClass className="text-lg text-blue-500" /> 12 Classes
          </p>
          {result.availableSeats > 0 ? (
            <p className="flex items-center gap-1 text-green-600 font-medium">
              <MdOutlinePeopleOutline className="text-lg" /> {result.availableSeats} seats left
            </p>
          ) : (
            <p className="flex items-center gap-1 text-red-600 font-medium">
              <MdOutlinePeopleOutline className="text-lg" /> No seats left
            </p>
          )}
        </div>
      </div>

      {/* Button Section */}
      <div className="p-4 bg-gray-50 border-t text-center">
        {!isAdmin.length && !isInstructor.length && result.availableSeats !== 0 ? (
          <button
            onClick={() => addToCart(result)}
            className="w-full bg-blue-600 hover:bg-blue-700 text-white font-medium py-2 rounded-md transition-all duration-200"
          >
            Add to Cart
          </button>
        ) : (
          <button
            disabled
            className="w-full bg-gray-400 text-white font-medium py-2 rounded-md cursor-not-allowed"
          >
            Add to Cart
          </button>
        )}
      </div>
    </div>
  );
};

export default ViewPopularClass;
