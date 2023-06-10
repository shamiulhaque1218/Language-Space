import { useContext } from "react";
import { AuthContext } from "../../../provider/AuthProvider";
import useAxiosSecure from "../Hooks/useAxiosSecure";
import { useQuery } from "@tanstack/react-query";
import ContentLoader from "react-content-loader";
import Swal from "sweetalert2";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faChalkboardTeacher,
  faUserShield,
} from "@fortawesome/free-solid-svg-icons";

const ViewUser = () => {
  const { user } = useContext(AuthContext);
  const [axiosSecure] = useAxiosSecure();

  const {
    isLoading,
    refetch,
    error,
    data: tqData = [],
  } = useQuery({
    queryFn: async () => {
      const data = await axiosSecure.get(`/user`);
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
        </ContentLoader>{" "}
      </>
    );
  if (error) return "An error has occurred: " + error.message;

  const handelAddAdmin = (_id) => {
    fetch(`http://localhost:5000/user/${_id}`, {
      method: "PATCH",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify({ role: "Admin" }),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        refetch();
        if (data.modifiedCount > 0) {
          Swal.fire({
            title: "Class Updated",
            text: "Update class Successfully",
            icon: "success",
            confirmButtonText: "Done",
          });
        }
      });
  };
  const handelAddInstructor = (_id) => {
    fetch(`http://localhost:5000/user/${_id}`, {
      method: "PATCH",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify({ role: "Instructor" }),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        refetch();
        if (data.modifiedCount > 0) {
          Swal.fire({
            title: "Class Updated",
            text: "Update class Successfully",
            icon: "success",
            confirmButtonText: "Done",
          });
        }
      });
  };

  return (
    <div data-aos="fade-up"
    data-aos-anchor-placement="top-bottom">
      <table className="table table-compact w-full">
        <thead>
          <tr className="bg-black py-2 text-white gFont3">
            <th className="text-center">Index</th>
            <th className="text-center">Class Image</th>
            <th className="text-center">Class Name</th>
            <th className="text-center">Instructor Email</th>
            <th className="text-center">role</th>
            <th className="text-center">Action</th>
            <th className="text-center"></th>
          </tr>
        </thead>

        {tqData.map((data, index) => (
          <tbody key={data._id} className=" p-1">
            <tr className="border-2">
              <td className="p-3 text-center"> {index + 1} </td>
              <td>
                <img
                  className="h-12 w-12 ml-8 rounded-xl"
                  src={data?.photoURL}
                  alt=""
                />
              </td>
              <td className="p-3 text-center">{data?.name} </td>
              <td className="p-3 text-center">{data?.email} </td>
              <td className="p-3 text-center"> {data?.role} </td>
              {user && (
                <td>
                  <div>
                    {data.role === "Instructor" ? (
                      <button
                        onClick={() => handelAddAdmin(data._id)}
                        className="btn px-3 py-3 bg-green-600 text-center space-x-1"
                        disabled
                      >
                        <FontAwesomeIcon
                          className="h-4 text-white"
                          icon={faUserShield}
                        />
                      </button>
                    ) : (
                      <button
                        onClick={() => handelAddAdmin(data._id)}
                        className="btn px-3 py-3 bg-green-600 text-center space-x-1"
                      >
                        <FontAwesomeIcon
                          className="h-4 text-white"
                          icon={faUserShield}
                        />
                      </button>
                    )}
                    {data.role === "Instructor" ? (
                      <button
                        onClick={() => handelAddInstructor(data._id)}
                        className="btn px-3 py-3 bg-blue-500 text-center"
                        disabled
                      >
                        <FontAwesomeIcon
                          className="h-4 text-white"
                          icon={faChalkboardTeacher}
                        />
                      </button>
                    ) : (
                      <button
                        onClick={() => handelAddInstructor(data._id)}
                        className="btn px-3 py-3 bg-blue-500 text-center"
                      >
                        <FontAwesomeIcon
                          className="h-4 text-white"
                          icon={faChalkboardTeacher}
                        />
                      </button>
                    )}
                  </div>
                </td>
              )}
              <td></td>
            </tr>
          </tbody>
        ))}
      </table>
    </div>
  );
};

export default ViewUser;
