import { Route, Navigate } from "react-router-dom"; // ✅ Use Navigate instead of Redirect
import { useContext } from "react";
import AuthContext from "../context/AuthContext";

const PrivateRoute = ({ children, ...rest }) => {
  const { user } = useContext(AuthContext);

  return user ? <Route {...rest} element={children} /> : <Navigate to="/login" />;
};

export default PrivateRoute;
