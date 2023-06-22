import { Link } from "react-router-dom";

const Slider = () => {
  return (
    <div>
      <div className="carousel w-full"> 
      
        <p data-aos="fade-zoom-in"
     data-aos-easing="ease-in-back"
     data-aos-delay="600"
     data-aos-offset="0" className="absolute gFont3 text-slate-600 lg:top-80 top-52
      lg:left-24 left-12 lg:px-14 px-8 lg:py-8 py-3
       bg-white rounded-md lg:text-4xl text-xl" > 
     Learn today  for a  better <br />  tomorrow
      <br />
      <span className=" mt-2 lg:text-lg text-base">It can change a human completely</span> 
       <br />
      <div className="flex gap-5 mt-3">
         <Link to="/signup" className="lg:text-lg text-base text-white
          bg-blue-600 px-3 py-2  rounded-md"> Join For Free</Link>
       <Link to="/classes" className="lg:text-lg text-base text-blue-600 bg-white border-2
        border-blue-600 px-3 py-2 rounded-md"> See Courses </Link>
      </div>
       </p>
        <div id="item1" className="carousel-item w-full">
          <img
            src="https://images.pexels.com/photos/4260485/pexels-photo-4260485.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
            className="lg:sliderImg h-96 w-full"
          />
        </div>
        <div id="item2" className="carousel-item w-full">
          <img
            src="https://images.pexels.com/photos/5212695/pexels-photo-5212695.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
            className="lg:sliderImg h-96 w-full "
          />
        </div>
        {/* <div id="item3" className="carousel-item w-full">
          <img
            src="https://img.freepik.com/free-vector/flat-international-mother-language-day-illustration_23-2149219243.jpg?w=740&t=st=1686204361~exp=1686204961~hmac=0aa243d41719645c0e9a468a05ec2b9139fa436bf9be68afd83d57d73d8059af"
            className="sliderImg w-full "
          />
        </div> */}
        <div id="item3" className="carousel-item w-full">
          <img
            src="https://images.pexels.com/photos/5212329/pexels-photo-5212329.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
            className="lg:sliderImg h-96 w-full "
          />
        </div>
      </div>
      <div className="flex justify-center w-full py-2 gap-2">
        <a href="#item1" className="btn btn-xs">
          1
        </a>
        <a href="#item2" className="btn btn-xs">
          2
        </a>
        {/* <a href="#item3" className="btn btn-xs">
          3
        </a> */}
        <a href="#item3" className="btn btn-xs">
          3
        </a>
      </div>
    </div>
  );
};

export default Slider;
