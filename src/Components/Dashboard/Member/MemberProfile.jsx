import { useContext } from "react";
import { AuthContext } from "../../Provider/AuthProvider";
import { useQuery } from "@tanstack/react-query";
import UseAxiosSecure from "../../../Hooks/UseAxiosSecure";
import SharedHeadings from "../../SharedComponents/SharedHeadings";
import { Link } from "react-router-dom";


const MemberProfile = () => {
    const { user } = useContext(AuthContext)
    const axiosSecure = UseAxiosSecure()
    const { data: profile = [] } = useQuery({
        queryKey: ['profile'],
        queryFn: async () => {
            const res = await axiosSecure.get(`/members/${user?.email}`)
            return res.data
        }
    })

    console.log(profile)
    return (
        <div className="py-40">
            <SharedHeadings heading={"My Profile"} subheading={'Welcome Back'}></SharedHeadings>
            <div className="flex flex-col md:flex-row justify-center items-center gap-10">
                <div className="mx-5 md:mx-10 lg:mx-20">
                    <div className="card   bg-[#ECF4D6] shadow-xl ">
                        <div className="card-body">
                            <img className="rounded-full my-5" src={user.photoURL} alt="" />
                            <h2 className="card-title">Client Name:{profile.name}</h2>
                            <p>Email: {profile.email}</p>
                            <p>Agreement Accept Date: {profile.date}</p>

                        </div>
                    </div>
                </div>
                <div className="card md:flex-1  bg-[#ECF4D6] mx-5 md:mx-10 lg:mx-20 shadow-xl">

                    <div className="card-body text-[#265073] font-bold">
                        <h2 className="card-title">Apartment No:{profile.apartmentNo}</h2>
                        <p>Block Name: {profile.blockName}</p>
                        <p>Floor No: {profile.floorNo}</p>
                        <p>Rent: {profile.rent}$ </p>
                        <p>Status: {profile.status} </p>
                        <div className="card-actions justify-start">
                            <Link to={`/dashboard/makePayment/${profile.apartmentId}`}><button className="btn bg-[#265073] text-[#ECF4D6]">Pay Now</button></Link>
                        </div>
                    </div>


                </div>
            </div>

        </div>
    );
};

export default MemberProfile;