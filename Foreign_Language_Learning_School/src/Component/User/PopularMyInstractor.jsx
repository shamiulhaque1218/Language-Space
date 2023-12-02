
import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../../provider/AuthProvider";
import ContentLoader from "react-content-loader";

const PopularMyInstractor = () => {
  const { loader} = useContext(AuthContext);
  const [popular,setPopular] = useState([])
  
  useEffect( () => {

    fetch(`https://foreign-language-learning-school-server-six.vercel.app/user/instractor/Instructor`)
    .then((res) => res.json())
    .then(data => {
      setPopular(data)
    })

   } ,[])
   console.log(popular);
  if (loader)
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


  return (
    <>
    <strong className='lg:text-4xl text-2xl lg:pl-9 pl-3 text-blue-950'>Top-notch Instructors for </strong>
    <p className='lg:text-4xl text-2xl lg:pl-9 pl-3 font-bold text-blue-950'>Your Success </p>

    <div className="grid lg:grid-cols-4 grid-cols-1 lg:px-12 px-8 lg:py-10 py-6">
      {popular.map((res) => (
        <div
        className="mb-5 gFont3 w-72 bg-base-100 shadow-2xl border-2 border-gray-200 rounded-2xl ml-5 "
          key={res._id} >
          <figure>
            <img
              src={res.photoURL}
              alt="user"
              className="h-72 w-full rounded-t-2xl"
            />
          </figure>
          <div className="p-0 pt-1 pb-1 pl-5 bg-blue-900 text-slate-300 rounded-b-2xl">
            <h2 className="card-title transform transition duration-300 hover:scale-105">{res.name}</h2>
            <p className="text-sm pt-2 transform transition duration-300 hover:scale-105">Email: {res.email}</p>
          </div>
        </div>
      ))}
    </div>
    </>
  );
};

export default PopularMyInstractor;
