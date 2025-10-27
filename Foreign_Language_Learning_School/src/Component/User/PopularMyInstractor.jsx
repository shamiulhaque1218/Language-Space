import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../../provider/AuthProvider";
import ContentLoader from "react-content-loader";

const PopularMyInstructor = () => {
  const { loader } = useContext(AuthContext);
  const [popular, setPopular] = useState([]);

  useEffect(() => {
    fetch(`https://foreign-language-learning-school-server-six.vercel.app/user/instractor/Instructor`)
      .then((res) => res.json())
      .then((data) => setPopular(data));
  }, []);

  if (loader)
    return (
      <ContentLoader viewBox="0 0 380 70">
        <rect x="0" y="0" rx="5" ry="5" width="70" height="70" />
        <rect x="80" y="17" rx="4" ry="4" width="300" height="13" />
        <rect x="80" y="40" rx="3" ry="3" width="250" height="10" />
      </ContentLoader>
    );

  return (
    <section className="lg:px-12 px-6 lg:py-12 py-8">
      {/* Header */}
      <div className="text-center mb-10">
        <h2 className="lg:text-4xl text-3xl font-bold text-blue-900">
          Top-notch Instructors for
        </h2>
        <p className="lg:text-4xl text-3xl font-extrabold text-blue-950 mt-2">
          Your Success
        </p>
      </div>

      {/* Instructor Grid */}
      <div className="grid lg:grid-cols-4 md:grid-cols-2 grid-cols-1 gap-8">
        {popular.map((res) => (
          <div
            key={res._id}
            className="bg-white rounded-lg shadow-lg border border-gray-200 overflow-hidden hover:shadow-2xl transform hover:-translate-y-1 transition-all duration-300"
          >
            {/* Instructor Image */}
            <div className="relative h-72 w-full">
              <img
                src={res.photoURL || "/no-image.png"}
                alt={res.name}
                className="h-full w-full object-cover rounded-t-lg"
              />
            </div>

            {/* Instructor Info */}
            <div className="p-5 bg-blue-900 text-slate-200">
              <h3 className="text-xl font-semibold mb-1 hover:text-white transition duration-300">
                {res.name}
              </h3>
              <p className="text-sm hover:text-gray-100 transition duration-300">
                Email: {res.email}
              </p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default PopularMyInstructor;
