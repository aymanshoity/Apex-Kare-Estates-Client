import { MdOutlineRealEstateAgent } from "react-icons/md";
import { NavLink } from "react-router-dom";
import UseAdmin from "../../Hooks/UseAdmin";
import { useContext } from "react";
import { AuthContext } from "../Provider/AuthProvider";
import { useState } from "react";
import { useQuery } from "@tanstack/react-query";
import UseAxiosSecure from "../../Hooks/UseAxiosSecure";
import { useEffect } from "react";



const DashNavber = () => {
    const { user } = useContext(AuthContext)
    const [isAdmin] = UseAdmin()
    const [isMember, setMember] = useState(false)
    const [isUser, setUser] = useState(false)
    const axiosSecure = UseAxiosSecure()
    const { data: requests = [],} = useQuery({
        queryKey: ['requests'],
        queryFn: async() => {
            const res = await axiosSecure.get('/agreementRequests')
            return res.data
        }
    })
    
    useEffect(() => {
        if (!isAdmin) {
            const findMember = requests.find(request => request.email === user.email)
            console.log(findMember)
            if (findMember?.role === "member") {
                return setMember(true)
            }
            if (findMember?.role === "user") {
                return setUser(true)
            }
        }




    }, [user.email, requests,isAdmin])


    const navLinks = <>
        <NavLink to='/' className={({ isActive }) => (isActive ? ' text-xl font-bold  text-[#9AD0C2] mr-4' : ' text-xl  font-bold  mr-4')}>Home</NavLink>

        {
            user && isAdmin && <>
                <NavLink to='/dashboard/adminProfile' className={({ isActive }) => (isActive ? ' text-xl font-bold  text-[#9AD0C2] mr-4' : ' text-xl  font-bold  mr-4')}>Admin-Profile</NavLink>
                {/* <NavLink to='/dashboard/allUsers' className={({ isActive }) => (isActive ? ' text-xl font-bold  text-[#9AD0C2] mr-4' : ' text-xl  font-bold  mr-4')}>Account-Holders</NavLink> */}
                <NavLink to='/dashboard/manageMembers' className={({ isActive }) => (isActive ? ' text-xl font-bold  text-[#9AD0C2] mr-4' : ' text-xl  font-bold  mr-4')}>Manage-Members</NavLink>
                <NavLink to='/dashboard/makeAnnouncements' className={({ isActive }) => (isActive ? ' text-xl font-bold  text-[#9AD0C2] mr-4' : ' text-xl  font-bold  mr-4')}>Make-Announcements</NavLink>
                <NavLink to='/dashboard/agreementRequests' className={({ isActive }) => (isActive ? ' text-xl font-bold  text-[#9AD0C2] mr-4' : ' text-xl  font-bold  mr-4')}>Agreement-Requests</NavLink>
                <NavLink to='/dashboard/manageCoupons' className={({ isActive }) => (isActive ? ' text-xl font-bold  text-[#9AD0C2] mr-4' : ' text-xl  font-bold  mr-4')}>Manage-Coupons</NavLink>
            </>
        }

        {
            user && isMember && <>
                <NavLink to='/dashboard/memberProfile' className={({ isActive }) => (isActive ? ' text-xl font-bold  text-[#9AD0C2] mr-4' : ' text-xl  font-bold  mr-4')}>My profile</NavLink>
                <NavLink to='/dashboard/announcements' className={({ isActive }) => (isActive ? ' text-xl font-bold  text-[#9AD0C2] mr-4' : ' text-xl  font-bold  mr-4')}>Announcements</NavLink>
                <NavLink to='/dashboard/payment' className={({ isActive }) => (isActive ? ' text-xl font-bold  text-[#9AD0C2] mr-4' : ' text-xl  font-bold  mr-4')}>Make Payment</NavLink>
                <NavLink to='/dashboard/paymentHistory' className={({ isActive }) => (isActive ? ' text-xl font-bold  text-[#9AD0C2] mr-4' : ' text-xl  font-bold  mr-4')}>Payment-History</NavLink>


            </>
        }
        {
            user && isUser && <>
                <NavLink to='/dashboard/userProfile' className={({ isActive }) => (isActive ? ' text-xl font-bold  text-[#9AD0C2] mr-4' : ' text-xl  font-bold  mr-4')}>My profile</NavLink>
                <NavLink to='/dashboard/announcements' className={({ isActive }) => (isActive ? ' text-xl font-bold  text-[#9AD0C2] mr-4' : ' text-xl  font-bold  mr-4')}>Announcements</NavLink>
            </>
        }






    </>



    return (
        <div className="navbar bg-[#265073] p-4 fixed z-10 bg-opacity-80">
            <div className="navbar-start">
                <div className="dropdown">
                    <label tabIndex={0} className="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-[#ECF4D6]" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                    </label>
                    <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-[#ECF4D6] text-[#265073] rounded-box w-52">
                        {navLinks}
                    </ul>
                </div>
                <div className="flex flex-row gap-4 items-center">
                    <MdOutlineRealEstateAgent className="w-[50px] h-[50px] text-[#ECF4D6]" />
                    <p className=" text-2xl text-[#ECF4D6]">Apex-Kare-Estates</p>
                </div>

            </div>

            <div className="navbar-end hidden lg:flex text-[#ECF4D6]">
                <ul className="menu menu-horizontal px-1">
                    {navLinks}
                </ul>
            </div>

        </div>
    );
};

export default DashNavber;