import { Link } from "react-router-dom";

const Footer = () => {
    return (
        <div>

<footer className="grid grid-cols-4 p-10 bg-slate-500 gFont2 text-white">
  <div className="col-span-1">
  <img src="logo.png" className="rounded-full border-gray-900 border-2 lg:h-20 lg:w-20 w-14 h-14" alt="" />
    <p>The Language Space<br/>Providing reliable tech since 2023</p>
  </div> 
  <div className="col-span-3 flex gap-8 ml-32">
    <Link to="/" className="link link-hover">Home</Link>
    <Link to="/cookie" className="link link-hover">Cookie policy</Link> 
    <Link to="/advertisement" className="link link-hover">Advertisement</Link> 
    <Link to="/contact" className="link link-hover">Contact</Link> 
    <Link to="/address" className="link link-hover">Address</Link>
  </div> 

</footer>
            
        </div>
    );
};

export default Footer;