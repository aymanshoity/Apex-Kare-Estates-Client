import { useQuery } from "@tanstack/react-query";
import { useContext } from "react";
import UseAxiosSecure from "../../../Hooks/UseAxiosSecure";
import { AuthContext } from "../../Provider/AuthProvider";
import SharedHeadings from "../../SharedComponents/SharedHeadings";


const UserProfile = () => {
    const {user}=useContext(AuthContext)
    const axiosSecure=UseAxiosSecure()
    const {data: userprofile=[]}=useQuery({
        queryKey:['userprofile',user?.email],
        queryFn:async()=>{
            const res= await axiosSecure.get(`/agreementRequests/${user.email}`)
            return res.data
        }
    })
    console.log(userprofile)
    return (
        <div className="py-40">
            <SharedHeadings heading={"My Profile"} subheading={'Welcome Back'}></SharedHeadings>
            <div className="flex flex-col md:flex-row justify-center items-center gap-10">
                <div className="mx-5 md:mx-10 lg:mx-20">
                    <div className="card   bg-[#ECF4D6] shadow-xl ">
                        <div className="card-body">
                            <img className="rounded-full my-5" src={user.photoURL} alt="" />
                            <h2 className="card-title">Client Name:{userprofile.name}</h2>
                            <p>Email: {userprofile.email}</p>
                            <p>Agreement Accept Date: {userprofile.date}</p>

                        </div>
                    </div>
                </div>
                <div className="card md:flex-1  bg-[#ECF4D6] mx-5 md:mx-10 lg:mx-20 shadow-xl">
                    <div className="card-body text-[#265073] font-bold">
                        <h2 className="card-title">Apartment No:none</h2>
                        <p>Block Name: none</p>
                        <p>Floor No: none</p>
                        <p>Rent: none </p>
                        <p>Status: {userprofile.status} </p>
                        
                    </div>


                </div>
            </div>

        </div>
    );
};

export default UserProfile;
