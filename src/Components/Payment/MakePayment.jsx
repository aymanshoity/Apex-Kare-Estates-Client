
import { useContext } from "react";
import SharedHeadings from "../SharedComponents/SharedHeadings";
import { Link, useLoaderData, useParams } from "react-router-dom";
import { AuthContext } from "../Provider/AuthProvider";


const MakePayment = () => {
    const { user } = useContext(AuthContext)
    const { id } = useParams()
    const data = useLoaderData()
    console.log(data, id)
    return (
        <div className="py-40">
            <SharedHeadings subheading={"It's time to pay"} heading={'Make Payment'}></SharedHeadings>
            <div className="mx-5 md:mx-10 lg:mx-20">
                <form className="card-body">
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
                            <input type="text" name="apartmentNo" disabled defaultValue={data.apartmentNo} placeholder="Apartment No." className="input input-bordered" required />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Floor No.</span>
                            </label>
                            <input type="text" name="floor" disabled defaultValue={data.floorNo} placeholder="Floor No." className="input input-bordered" required />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Block Name</span>
                            </label>
                            <input type="text" name="block" disabled defaultValue={data.blockName} placeholder="Block Name" className="input input-bordered" required />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Rent($)</span>
                            </label>
                            <input type="text" name="rent" disabled defaultValue={data.rent} className="input input-bordered" required />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Month</span>
                            </label>
                            <input type="text" name="month" placeholder="month" className="input input-bordered" required />
                        </div>
                    </div>

                    <div className="form-control mt-6">
                        <Link to={`/dashboard/payment/${data.id}`}><button  className="btn bg-[#265073] text-[#ECF4D6]">Pay</button></Link>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default MakePayment;