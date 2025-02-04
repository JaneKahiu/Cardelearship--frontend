import axios from "axios"; // ✅ Import axios
import dayjs from "dayjs";
import * as jwt_decode from 'jwt-decode'; // ✅ Use named import correctly
import { useContext } from "react";
import AuthContext from "../context/AuthContext";

const baseURL = "http://127.0.0.1:8000/api";

const useAxios = () => {
  const { authTokens, setUser, setAuthTokens } = useContext(AuthContext);

  const axiosInstance = axios.create({
    baseURL,
    headers: { Authorization: `Bearer ${authTokens?.access}` },
  });

  axiosInstance.interceptors.request.use(async (req) => {
    if (!authTokens) return req; // Prevent errors if authTokens is null

    const user = jwtDecode(authTokens.access); // ✅ Correct import usage
    const isExpired = dayjs.unix(user.exp).diff(dayjs()) < 1;

    if (!isExpired) return req;

    try {
      const response = await axios.post(`${baseURL}/token/refresh/`, {
        refresh: authTokens.refresh,
      });

      localStorage.setItem("authTokens", JSON.stringify(response.data)); // ✅ Remove duplicate

      setAuthTokens(response.data);
      setUser(jwtDecode(response.data.access));

      req.headers.Authorization = `Bearer ${response.data.access}`;
    } catch (error) {
      console.error("Token refresh failed", error);
      setAuthTokens(null);
      setUser(null);
      localStorage.removeItem("authTokens"); // Clear tokens on failure
    }

    return req;
  });

  return axiosInstance;
};

export default useAxios;
