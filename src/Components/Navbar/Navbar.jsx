import { Link, NavLink, useNavigate } from "react-router-dom";
import { IoLogInOutline, IoLogOutOutline } from "react-icons/io5";
import { MdOutlineRealEstateAgent } from "react-icons/md";
import { useContext } from "react";
import { AuthContext } from "../Provider/AuthProvider";
const Navbar = () => {
    const navigate = useNavigate()
    const { user, logOut } = useContext(AuthContext)
    const handleLogout = () => {
        logOut()
            .then()
            .catch(error => console.log(error))
        navigate('/')
    }
    const navLinks = <>
        <div className="flex flex-row items-center justify-center">
            <NavLink to='/' className={({ isActive }) => (isActive ? ' text-xl font-bold  text-[#9AD0C2] mr-4' : ' text-xl  font-bold  mr-4')}>Home</NavLink>
            <NavLink to='/apartments' className={({ isActive }) => (isActive ? ' text-xl font-bold  text-[#9AD0C2] mr-4' : ' text-xl  font-bold  mr-4')}>Apartment</NavLink>

            {
                user ? <>
                    <div className="flex flex-row items-center justify-center">
                        <IoLogOutOutline className="text-2xl font-extrabold mr-2" />

                        <div className="dropdown text-[#265073] ">
                            <div tabIndex={0} role="button" className="btn btn-ghost btn-circle avatar">
                                <div className="w-10 rounded-full">
                                <img src={user?.photoURL} alt="" />
                                </div>
                            </div>
        
                            <ul className="dropdown-content z-[1] menu p-2 shadow bg-[#ECF4D6] rounded-box w-52 lg:flex lg:flex-col">
                                <li><p className="text-xl font-bold">{user.displayName}</p></li>
                                <li><NavLink to='/dashboard' className={({ isActive }) => (isActive ? ' text-xl font-bold  text-[#9AD0C2] mr-4' : ' text-xl  font-bold  mr-4')}>Dashboard</NavLink></li>
                                <li><button onClick={handleLogout} className=" text-xl font-bold">Logout</button></li>

                            </ul>
                        </div>

                    </div>


                </> : <>
                    <div className="flex flex-row items-center justify-center">
                        <IoLogInOutline className="text-2xl font-bold" />
                        <NavLink to='/login' className={({ isActive }) => (isActive ? ' text-xl font-bold  text-[#9AD0C2] mr-4' : ' text-xl  font-bold  mr-4')}>Login</NavLink>
                    </div>

                </>
            }
        </div>
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

            <div className="navbar-center hidden lg:flex text-[#ECF4D6]">
                <ul className="menu menu-horizontal px-1">
                    {navLinks}
                </ul>
            </div>
            <div className="navbar-end">
                <Link to='/register'><a className="btn bg-[#ECF4D6] text-xl  font-bold text-[#265073]">Register</a></Link>
            </div>
        </div>
    );
};

export default Navbar;