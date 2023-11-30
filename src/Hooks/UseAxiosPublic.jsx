import axios from "axios";


const axiosPublic=axios.create({
    baseURL:'https://apex-kare-estates-server.vercel.app'
})
const UseAxiosPublic = () => {
    return axiosPublic
};

export default UseAxiosPublic;