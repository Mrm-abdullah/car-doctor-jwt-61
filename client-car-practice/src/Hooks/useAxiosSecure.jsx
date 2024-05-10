import axios from "axios";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import useAuth from "./useAuth";

const axiosSecure = axios.create({
    baseURL: 'https://server-doctor-practice.vercel.app',
    withCredentials: true
});

const useAxiosSecure = () => {
    const { handleLogoutUser } = useAuth()
    const { navigate } = useNavigate()

    useEffect(() => {
        axiosSecure.interceptors.response.use(res => {
            return res;
        }, error => {
            // console.log('error tracked in the interceptor', error.response)
            if (error.response.status === 401 || error.response.status === 403) {
                // console.log('logout the user')
                handleLogoutUser()
                    .then(() => {
                        navigate('/login')
                    })
                    .catch(error => {
                        // console.log(error)
                    })
            }
        })
    }, [])

    return axiosSecure;
};

export default useAxiosSecure;