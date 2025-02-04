import { createContext, useState, useEffect } from "react";
import { jwtDecode } from 'jwt-decode'; // Corrected the function name
import { useNavigate } from "react-router-dom"; // ✅ Replaced useHistory with useNavigate
import Swal from "sweetalert2"; // ✅ Import correctly

const AuthContext = createContext();

export default AuthContext;

export const AuthProvider = ({ children }) => {
  const [authTokens, setAuthTokens] = useState(() =>
    localStorage.getItem("authTokens")
      ? JSON.parse(localStorage.getItem("authTokens"))
      : null
  );

  const [user, setUser] = useState(() =>
    localStorage.getItem("authTokens")
      ? jwt_decode(JSON.parse(localStorage.getItem("authTokens")).access) // ✅ Use jwt_decode correctly
      : null
  );

  const [loading, setLoading] = useState(true);
  const navigate = useNavigate(); // ✅ Replace useHistory with useNavigate

  const loginUser = async (email, password) => {
    try {
      const response = await fetch("http://127.0.0.1:8000/api/token/", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ email, password }),
      });

      const data = await response.json();

      if (response.status === 200) {
        console.log("Logged In");
        setAuthTokens(data);
        setUser(jwt_decode(data.access)); // ✅ Use jwt_decode correctly
        localStorage.setItem("authTokens", JSON.stringify(data));

        navigate("/"); // ✅ Replace history.push with navigate
        Swal.fire({
          title: "Login Successful",
          icon: "success",
          toast: true,
          timer: 6000,
          position: "top-right",
          timerProgressBar: true,
          showConfirmButton: false,
        });
      } else {
        Swal.fire({
          title: "Username or password does not exist",
          icon: "error",
          toast: true,
          timer: 6000,
          position: "top-right",
          timerProgressBar: true,
          showConfirmButton: false,
        });
      }
    } catch (error) {
      console.error("Login error:", error);
      Swal.fire({
        title: "An error occurred",
        icon: "error",
        toast: true,
        timer: 6000,
        position: "top-right",
        timerProgressBar: true,
        showConfirmButton: false,
      });
    }
  };

  const registerUser = async (email, username, password, password2) => {
    try {
      const response = await fetch("http://127.0.0.1:8000/api/register/", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ email, username, password, password2 }),
      });

      if (response.status === 201) {
        navigate("/login"); // ✅ Replace history.push with navigate
        Swal.fire({
          title: "Registration Successful, Login Now",
          icon: "success",
          toast: true,
          timer: 6000,
          position: "top-right",
          timerProgressBar: true,
          showConfirmButton: false,
        });
      } else {
        Swal.fire({
          title: "An error occurred",
          icon: "error",
          toast: true,
          timer: 6000,
          position: "top-right",
          timerProgressBar: true,
          showConfirmButton: false,
        });
      }
    } catch (error) {
      console.error("Registration error:", error);
      Swal.fire({
        title: "An error occurred",
        icon: "error",
        toast: true,
        timer: 6000,
        position: "top-right",
        timerProgressBar: true,
        showConfirmButton: false,
      });
    }
  };

  const logoutUser = () => {
    setAuthTokens(null);
    setUser(null);
    localStorage.removeItem("authTokens");
    navigate("/login"); // ✅ Replace history.push with navigate

    Swal.fire({
      title: "You have been logged out",
      icon: "success",
      toast: true,
      timer: 6000,
      position: "top-right",
      timerProgressBar: true,
      showConfirmButton: false,
    });
  };

  useEffect(() => {
    if (authTokens) {
      setUser(jwt_decode(authTokens.access)); // ✅ Use jwt_decode correctly
    }
    setLoading(false);
  }, [authTokens]);

  const contextData = {
    user,
    setUser,
    authTokens,
    setAuthTokens,
    registerUser,
    loginUser,
    logoutUser,
  };

  return (
    <AuthContext.Provider value={contextData}>
      {!loading && children}
    </AuthContext.Provider>
  );
};
