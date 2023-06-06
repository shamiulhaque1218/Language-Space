import { Link, useRouteError } from "react-router-dom";

const ErrorPage = () => {
  const { error } = useRouteError();

  return (
    <section>
      <div className="container flex flex-col items-center justify-center px-5 mx-auto my-8">
        <img
          className="w-96 h-96 lg:error"
          src="https://th.bing.com/th/id/OIP.le6OGfeOYPxiQgZnkkZz4QHaES?pid=ImgDet&rs=1"
          alt="Error Image"  />

        <div className="max-w-md text-center">
          <p className="text-xl text-red-600 mb-8">{error?.message}</p>
          <Link to="/" className="px-6 py-3 text-lg rounded-lg bg-violet-800 text-white">
            Back to Homepage
          </Link>
        </div>
      </div>
    </section>
  );
};
export default ErrorPage;
