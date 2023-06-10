import {faEject} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Link } from "react-router-dom";

const Footer = () => {
    return (
        <div>
<footer className="lg:grid grid-cols-4 lg:py-20 p-5 bg-blue-950 gFont3 text-slate-100 ">
  <div className="col-span-1">
  <img src="logo.png" className="rounded-full border-gray-900 border-2 lg:h-20 lg:w-20 w-14 h-14" alt="" />
    <p>The Language Space<br/>Providing reliable tech since 2023</p>
  </div> 
  <div className="col-span-3 lg:ml-32">
    <div className="flex flex-col lg:flex-row lg:gap-14 text-lg">
    <Link to="/" className="link link-hover">Home</Link>
    <Link to="/cookie" className="link link-hover">Cookie policy</Link> 
    <Link to="/advertisement" className="link link-hover">Advertisement</Link> 
    <Link to="/contact" className="link link-hover">Contact</Link> 
    <Link to="/address" className="link link-hover">Address</Link> <br />
    <a className="px-4 py-1 ml-96 lg:ml-0 rounded-2xl bg-yellow-600" href="#">
  <FontAwesomeIcon className='h-4 text-white' icon={faEject} />
    </a>
    </div>
    <p className="lg:mt-20 lg:ml-14">Copyright © 2023 - All right reserved by The Language Space</p>
  </div> 
 
</footer>         
        </div>
    );
};

export default Footer;