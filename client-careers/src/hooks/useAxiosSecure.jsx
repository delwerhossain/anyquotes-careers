import { useEffect } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import useAuth from "./useAuth";

const axiosSecure = axios.create({
  baseURL: "https://anyquotes-careers.vercel.app/",
  // baseURL: import.meta.env.VITE_server_url,
});

const useAxiosSecure = () => {
  const { signOutLog } = useAuth();
  const navigate = useNavigate();

  useEffect(() => {
    axiosSecure.interceptors.request.use((config) => {
      const token = localStorage.getItem("access-token");
      if (token) {
        config.headers.Authorization = `Bearer ${token}`;
      }
      return config;
    });

    axiosSecure.interceptors.response.use(
      (response) => response,
      async (error) => {
        if (
          error.response &&
          (error.response.status === 401 || error.response.status === 403)
        ) {
          await signOutLog();
          navigate("/login");
        }
        return Promise.reject(error);
      }
    );
  }, [signOutLog, navigate]);

  return [axiosSecure];
};

export default useAxiosSecure;
