import { faBars } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Link } from "react-router-dom";
import { useContext } from "react";
import { AuthContext } from "../../../provider/AuthProvider";
import ContentLoader from "react-content-loader";
import { useQuery } from "@tanstack/react-query";
import useAxiosSecure from "../Hooks/useAxiosSecure";

const Dashboard = () => {
  const {user} = useContext(AuthContext);
  const [axiosSecure] = useAxiosSecure();

  const {
    isLoading,
    data: tqData = [],
  } = useQuery({
    queryFn: async () => {
      const data = await axiosSecure.get(`/user/ins/Instructor/${user.email}`);
      //console.log({ fromTq: data });
      return data?.data;
    },
    queryKey: ["users"],
  });

  const {
    data: tqData2 = [],
  } = useQuery({
    queryFn: async () => {
      const data2 = await axiosSecure.get(`/user/ins/Admin/${user.email}`);
      //console.log({ fromTq: data });
      return data2?.data;
    },
    queryKey: ["users2"],
  });

  const {
    data: tqData3 = [],
  } = useQuery({
    queryFn: async () => {
      const data3 = await axiosSecure.get(`/user/ins/Student/${user.email}`);
      //console.log({ fromTq: data });
      return data3?.data;
    },
    queryKey: ["users3"],
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
    console.log(tqData,tqData2);
  return (
    <div>
          <div className="bdimage">
          <p className="gFont2 text-5xl pt-32  py-5 px-10">Welcome to your Dashboard</p> 
          </div>
      <div className="drawer">
        <input id="my-drawer" type="checkbox" className="drawer-toggle" />
        <div className="drawer-content">
          {/* Page content here */}
          <label htmlFor="my-drawer" className="btn my-20 ml-2 bgBtn drawer-button">
            <p className="text-white">My Dashboard</p>
          <FontAwesomeIcon className="h-4 text-white" icon={faBars}/>
          </label>
        </div>
        <div className="drawer-side">
          <label htmlFor="my-drawer" className="drawer-overlay"></label>
          <ul className="menu p-4 w-80 h-full bg-yellow-600 text-base-content">
           
           {
            !tqData.length == 0 &&  <li>
            <Link className="text-xl gFont2 text-white" to="/addclass"> Add Class </Link>
           </li>
           }
           {
            !tqData2.length == 0 &&
            <li>
            <Link className="text-xl gFont2 text-white" to="/viewclass"> Manage Classes </Link>
            </li>
            }
            {
              !tqData.length == 0 &&
            <li>
            <Link className="text-xl gFont2 text-white" to="/myclass"> My Class </Link>
            </li>

            }

            {
              !tqData2.length == 0 &&
              <li>
              <Link className="text-xl gFont2 text-white" to="/viewuser"> Manage Users </Link>
              </li>
            }

            {
              !tqData3.length == 0 &&
              <li>
              <Link className="text-xl gFont2 text-white" to="/mycart"> My Selected Class </Link>
              </li>
            }
           {
            !tqData3.length == 0 &&
             <li>
             <Link className="text-xl gFont2 text-white" to="/enrollclass"> My Enrolled Classes </Link>
             </li>
           }
            {
              !tqData3.length == 0 &&
              <li>
              <Link className="text-xl gFont2 text-white" to="/paymenthistory"> Payment History </Link>
              </li>
            }
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
