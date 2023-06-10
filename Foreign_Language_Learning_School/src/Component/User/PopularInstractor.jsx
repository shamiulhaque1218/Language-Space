import { useQuery } from "@tanstack/react-query";
import useAxiosSecure from "../Hooks/useAxiosSecure";
import ContentLoader from "react-content-loader";

const PopularInstractor = () => {
  const [axiosSecure] = useAxiosSecure();

  const {
    isLoading,
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

  return (
    <div className="grid grid-cols-4">
      {tqData.map((res) => (
        <div
        className="gFont3 w-72 bg-base-100 shadow-2xl border-2 border-gray-200 rounded-2xl ml-5 "
          key={res._id} >
          <figure>
            <img
              src={res.photoURL}
              alt="user"
              className="h-72 w-full rounded-t-2xl"
            />
          </figure>
          <div className="p-0 pt-1 pb-1 pl-5 bg-blue-900 text-slate-300 rounded-b-2xl">
            <h2 className="card-title">{res.name}</h2>
            <p className="text-sm pt-2">Email: {res.email}</p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default PopularInstractor;
