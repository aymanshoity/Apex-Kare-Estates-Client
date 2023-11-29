import { useContext } from "react";
import { AuthContext } from "../../Provider/AuthProvider";
import { useQuery } from "@tanstack/react-query";
import UseAxiosSecure from "../../../Hooks/UseAxiosSecure";


const MemberProfile = () => {
    const {user}=useContext(AuthContext)
    const axiosSecure=UseAxiosSecure()
    const {data : profile=[]}=useQuery({
        queryKey: ['profile'],
        queryFn: async()=>{
            const res=await axiosSecure.get(`/agreementRequests?email=${user.email}&role=member`)
            // console.log(res.data)
            return res.data
        }
    })
    return (
        <div>
            
        </div>
    );
};

export default MemberProfile;