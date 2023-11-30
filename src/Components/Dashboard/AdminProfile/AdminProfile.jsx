import { useContext } from "react";
import UseAxiosSecure from "../../../Hooks/UseAxiosSecure";
import { AuthContext } from "../../Provider/AuthProvider";
import SharedHeadings from "../../SharedComponents/SharedHeadings";
import { useQuery } from "@tanstack/react-query";
import UseAxiosPublic from "../../../Hooks/UseAxiosPublic";
import { FaBuilding } from "react-icons/fa";
import { MdOutlineEventAvailable } from "react-icons/md";
import { CgUnavailable } from "react-icons/cg";
import { FaUsers ,FaUserPlus} from "react-icons/fa6";
import { useEffect } from "react";
import { useState } from "react";
const AdminProfile = () => {
    const axiosSecure = UseAxiosSecure()
    const axiosPublic = UseAxiosPublic()
    const [userLength,setUserLength]=useState(0)
    const { user } = useContext(AuthContext)

    const { data: apartments = [] } = useQuery({
        queryKey: ['apartments'],
        queryFn: async () => {
            const res = await axiosPublic.get('/apartments')
            return res.data
        }
    })
    console.log(apartments)
    const { data: members = [] } = useQuery({
        queryKey: ['members'],
        queryFn: async () => {
            const res = await axiosSecure.get('/members')
            return res.data
        }
    })
    console.log(members)
    const { data: agreementRequests = [] } = useQuery({
        queryKey: ['agreementRequests'],
        queryFn: async () => {
            const res = await axiosSecure.get('/agreementRequests')
            return res.data
        }
    })
    console.log(agreementRequests)
    useEffect(()=>{
        const userlength=agreementRequests.filter(request=> request.role==='user')
        setUserLength(userlength.length)
    },[])
    return (
        <div className="py-40">
            <SharedHeadings heading={"My Profile"} subheading={'Welcome Back'}></SharedHeadings>
            <div className="flex flex-col lg:flex-row justify-center items-center gap-10">
                <div className="mx-5 md:mx-10 lg:mx-20">
                    <div className="card  bg-[#ECF4D6] shadow-xl ">
                        <div className="card-body">
                            <img className="rounded-full my-5" src={user.photoURL} alt="" />
                            <h2 className="card-title">Admin Name:{user.displayName}</h2>
                            <p>Email: {user.email}</p>


                        </div>
                    </div>
                </div>
                <div className="flex-1 mx-5 md:mx-10 lg:mx-20">
                    <div className="grid grid-cols-1 md:grid-cols-2 justify-center items-center gap-10">
                        <div className="card h-[250px] bg-[#ECF4D6] shadow-xl">
                            <div className="card-body">
                                <div className="card-actions justify-end text-9xl">
                                <FaBuilding />
                                </div>
                                <h2 className="card-title">Total Flats: {apartments.length}</h2>

                            </div>
                        </div>
                        <div className="card h-[250px] bg-[#ECF4D6] shadow-xl">
                            <div className="card-body">
                                <div className="card-actions justify-end text-9xl">
                                <MdOutlineEventAvailable />
                                </div>
                                <h2 className="card-title">Available Flats: {apartments.length}</h2>

                            </div>
                        </div>
                        <div className="card h-[250px] bg-[#ECF4D6] shadow-xl">
                            <div className="card-body">
                                <div className="card-actions justify-end text-9xl">
                                <CgUnavailable />
                                </div>
                                <h2 className="card-title">Unavailable Flats: {apartments.length}</h2>

                            </div>
                        </div>
                        <div className="card h-[250px] bg-[#ECF4D6] shadow-xl">
                            <div className="card-body">
                                <div className="card-actions justify-end text-9xl">
                                <FaUsers />
                                </div>
                                <h2 className="card-title">Users: {userLength}</h2>

                            </div>
                        </div>
                        <div className="card h-[250px] bg-[#ECF4D6] shadow-xl">
                            <div className="card-body">
                                <div className="card-actions justify-end text-9xl">
                                <FaUserPlus />
                                </div>
                                <h2 className="card-title">Members: {members.length}</h2>

                            </div>
                        </div>
                    </div>
                </div>

            </div>

        </div>
    );
};

export default AdminProfile;