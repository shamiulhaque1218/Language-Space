import { Link } from 'react-router-dom';

const Extra = () => {
    return (
        <div>   
            <div>
            <p data-aos="fade-zoom-in"
     data-aos-easing="ease-in-back"
     data-aos-delay="600"
     data-aos-offset="0" className="absolute gFont3 text-slate-600 lg:top-80 top-56
      lg:left-24 left-6 lg:px-14 px-8 lg:py-8 py-3
       bg-white rounded-md lg:text-4xl text-xl" > 
     Learn today  for a  better <br />  tomorrow
      <br />
      <span className=" mt-2 lg:text-lg text-sm">It can change a human completely</span> 
       <br />
      <div className="flex gap-5 mt-3">
         <Link to="/signup" className="lg:text-lg text-sm text-white
          bg-blue-600 px-3 py-2  rounded-md"> Join For Free</Link>
       <Link to="/classes" className="lg:text-lg text-sm text-blue-600 bg-white border-2
        border-blue-600 px-3 py-2 rounded-md"> See Courses </Link>
      </div>
       </p>
            </div>
        </div>
    );
};

export default Extra;