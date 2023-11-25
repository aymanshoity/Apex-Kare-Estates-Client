import { NavLink } from "react-router-dom";
import { IoLogInOutline } from "react-icons/io5";

const Navbar = () => {

    const navLinks = <>
        <NavLink to='/' className={({ isActive }) => (isActive ? ' text-xl font-bold  text-[#9AD0C2] mr-4' : ' text-xl  font-bold  mr-4')}>Home</NavLink>
        <NavLink to='/apartment' className={({ isActive }) => (isActive ? ' text-xl font-bold  text-[#9AD0C2] mr-4' : ' text-xl  font-bold  mr-4')}>Apartment</NavLink>
        <div className="flex flex-row items-center">
        <IoLogInOutline className="text-xl font-bold" />
        <NavLink to='/login' className={({ isActive }) => (isActive ? ' text-xl font-bold  text-[#9AD0C2] mr-4' : ' text-xl  font-bold  mr-4')}>Login</NavLink>
        </div>
        

    </>
    return (
        <div className="navbar bg-[#265073] p-4">
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
                    <img className="w-[50px] h-[50px] bg-[#ECF4D6]" src="https://i.ibb.co/CMkbCP6/Letter-Ak-Home-Logo.jpg" alt="" />
                    <p className=" text-2xl text-[#ECF4D6]">Apex-Kare-Estates</p>
                </div>

            </div>

            <div className="navbar-center hidden lg:flex text-[#ECF4D6]">
                <ul className="menu menu-horizontal px-1">
                    {navLinks}
                </ul>
            </div>
            <div className="navbar-end">
                <a className="btn bg-[#ECF4D6] text-xl  font-bold text-[#265073]">Register</a>
            </div>
        </div>
    );
};

export default Navbar;