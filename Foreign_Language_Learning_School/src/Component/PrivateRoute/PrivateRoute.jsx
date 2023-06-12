// eslint-disable-next-line no-unused-vars
import React, { useContext } from "react";
import { Navigate } from "react-router-dom";
import ContentLoader from "react-content-loader";
import { AuthContext } from "../../../provider/AuthProvider";

// eslint-disable-next-line react/prop-types
const PrivateRoute = ({ children }) => {
  const { user, loader } = useContext(AuthContext);
  if (loader) {
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
  }
  if (user) {
    return children;
  }
  return <Navigate to="/login"> </Navigate>;
};

export default PrivateRoute;
