
import { useContext } from "react";
import SharedHeadings from "../SharedComponents/SharedHeadings";
import {  useNavigate } from "react-router-dom";
import { AuthContext } from "../Provider/AuthProvider";
import UseAxiosSecure from "../../Hooks/UseAxiosSecure";
import { useQuery } from "@tanstack/react-query";


const MakePayment = () => {
    const { user } = useContext(AuthContext)
    const axiosSecure=UseAxiosSecure()
    const {data: profile=[]}=useQuery({
        queryKey: ['profile'],
        queryFn: async ()=>{
            const res= await axiosSecure.get(`/members/${user?.email}`)
            return res.data
        }
    })
    const navigate=useNavigate()
    console.log(profile)
    const handleProceed=(e)=>{
        e.preventDefault()
        const form=e.target;
        const email=form.email.value
        const name=profile.name
        const apartmentId=profile.apartmentId
        const apartmentNo=form.apartmentNo.value
        const floorNo=form.floor.value
        const blockName=form.block.value
        const rent=form.rent.value
        const month=form.month.value
        const date=new Date().toLocaleString().split(',')[0];
        const data={email,name,apartmentNo,apartmentId,floorNo,blockName,rent,month,date}
        navigate('/dashboard/payment', {state:{data:data}})
    }

    return (
        <div className="py-40">
            <SharedHeadings subheading={"It's time to pay"} heading={'Make Payment'}></SharedHeadings>
            <div className="mx-5 md:mx-10 lg:mx-20">
                <form onSubmit={handleProceed} className="card-body">
                    <div className="grid grid-cols-1 md:grid-cols-2 justify-center gap-5">
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Member Email</span>
                            </label>
                            <input type="email" name="email" disabled defaultValue={user.email} placeholder="email" className="input input-bordered" required />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Apartment No.</span>
                            </label>
                            <input type="text" name="apartmentNo" disabled defaultValue={profile.apartmentNo} placeholder="Apartment No." className="input input-bordered" required />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Floor No.</span>
                            </label>
                            <input type="text" name="floor" disabled defaultValue={profile.floorNo} placeholder="Floor No." className="input input-bordered" required />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Block Name</span>
                            </label>
                            <input type="text" name="block" disabled defaultValue={profile.blockName} placeholder="Block Name" className="input input-bordered" required />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Rent($)</span>
                            </label>
                            <input type="text" name="rent" disabled defaultValue={profile.rent} className="input input-bordered" required />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Month</span>
                            </label>
                            <input type="text" name="month" placeholder="month" className="input input-bordered" required />
                        </div>
                    </div>

                    <div className="form-control mt-6">
                        <button  className="btn bg-[#265073] w-full text-[#ECF4D6]">Proceed</button>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default MakePayment;