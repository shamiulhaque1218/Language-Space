import { faBars } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Link } from "react-router-dom";

const Dashboard = () => {
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
          <FontAwesomeIcon className="h-4 text-white" icon={faBars}/>
          </label>
        </div>
        <div className="drawer-side">
          <label htmlFor="my-drawer" className="drawer-overlay"></label>
          <ul className="menu p-4 w-80 h-full bg-yellow-600 text-base-content">
            {/* Sidebar content here */}
            <li>
             <Link className="text-xl gFont2 text-white" to="/addclass"> Add Class </Link>
            </li>
            <li>
            <Link className="text-xl gFont2 text-white" to="/viewclass"> Manage Classes </Link>
            </li>
            <li>
            <Link className="text-xl gFont2 text-white" to="/myclass"> My Class </Link>
            </li>
            <li>
            <Link className="text-xl gFont2 text-white" to="/viewuser"> Manage Users </Link>
            </li>
            <li>
            <Link className="text-xl gFont2 text-white" to="/mycart"> My Selected Class </Link>
            </li>
            <li>
            <Link className="text-xl gFont2 text-white" to="/enrollclass"> My Enrolled Classes </Link>
            </li>
            <li>
            <Link className="text-xl gFont2 text-white" to="/paymenthistory"> Payment History </Link>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
