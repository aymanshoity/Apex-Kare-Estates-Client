import axios from "axios";
import { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { AuthContext } from "../Components/Provider/AuthProvider";


const axiosSecure = axios.create({
    baseURL: 'https://apex-kare-estates-server.vercel.app'
})

const UseAxiosSecure = () => {
    const {logOut } = useContext(AuthContext)
    const navigate = useNavigate()
    axiosSecure.interceptors.request.use(function (config) {
        const token = localStorage.getItem('Access-token')
        // console.log('request stopped by interceptor', token)
        config.headers.authorization = `Bearer ${token}`
        return config
    }, function (error) {
        // Do something with request error
        return Promise.reject(error);
    });
    axiosSecure.interceptors.response.use(function (response) {

        return response;
    },  async(error)=> {
        const status = error.response.status
        // console.log('status error in the interceptor', status)
        if (status === 401 || status == 403) {
            await logOut()
                .then()
                .catch(error => console.log(error))
            navigate('/login')

        }
        return Promise.reject(error);
    });
    return axiosSecure


};

export default UseAxiosSecure;