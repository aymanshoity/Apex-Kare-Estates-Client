import { useContext } from "react";
import { AuthContext } from "../../Provider/AuthProvider";
import { useQuery } from "@tanstack/react-query";
import UseAxiosSecure from "../../../Hooks/UseAxiosSecure";
import SharedHeadings from "../../SharedComponents/SharedHeadings";


const ManageMembers = () => {
    const {user}=useContext(AuthContext)
    const axiosSecure=UseAxiosSecure()
    const {data: members=[]}=useQuery({
        queryKey:['members'],
        queryFn:async()=>{
            const res=await axiosSecure.get('/members')
            return res.data
        }
    })
    console.log(members)
    return (
        <div className="py-40">
            <SharedHeadings heading={'All Members'} subheading={"Let's see"}></SharedHeadings>
            
        </div>
    );
};

export default ManageMembers;