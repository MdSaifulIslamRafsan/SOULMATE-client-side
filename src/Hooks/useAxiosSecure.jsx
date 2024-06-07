
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import { useEffect } from 'react'
import useAuth from './useAuth';
const axiosSecure = axios.create({
  baseURL: import.meta.env.VITE_BASEURL
})

const useAxiosSecure = () => {
  const navigate = useNavigate();
  const { handleLogout } = useAuth();

  useEffect(() => {
    axiosSecure.interceptors.request.use(
      function (config) {
        const token = localStorage.getItem('access-token');
        config.headers.Authorization = `Bearer ${ token }`
        return config;
      },
      function (error) {
        return Promise.reject(error);
      });


    axiosSecure.interceptors.response.use(function (response) {
      return response;
    }, async (error) => {
      const status = error.response.status;
      if (status === 401 || status === 403) {
        await handleLogout();
        navigate('/login');

      }
      return Promise.reject(error);
    })
  }, [navigate, handleLogout])

  return axiosSecure;
};

export default useAxiosSecure;
