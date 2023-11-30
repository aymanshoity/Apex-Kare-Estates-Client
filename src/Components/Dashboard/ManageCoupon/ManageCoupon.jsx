import { useQuery } from "@tanstack/react-query";
import UseAxiosSecure from "../../../Hooks/UseAxiosSecure";
import SharedHeadings from "../../SharedComponents/SharedHeadings";
import CouponRow from "./CouponRow";
import { useState } from "react";
import Swal from "sweetalert2";


const ManageCoupon = () => {
    const axiosSecure = UseAxiosSecure()
    // const [modalOpen, setModalOpen] = useState(false)
    const { data: manageCoupons = [] } = useQuery({
        queryKey: ['manageCoupons'],
        queryFn: async () => {
            const res = await axiosSecure.get('/manageCoupons')
            return res.data
        }
    })
    console.log(manageCoupons)
    const handleAdd = (coupon) => {
        Swal.fire({
            title: `Get ${coupon.discount_percent}% discount using ${coupon.coupon_code}`,
            text: `${coupon.description}`,
            showCancelButton: true,
            confirmButtonColor: "#265073",
            cancelButtonColor: "#d33",
            confirmButtonText: "Submit"
        }).then((result) => {
            if (result.isConfirmed) {
                axiosSecure.post('/coupons', coupon)
                    .then(res => {
                        console.log(res.data)
                        if (res.data.insertedId) {
                            Swal.fire({
                                title: "Submitted",
                                text: "Coupon has been Submitted .",
                                icon: "success"
                            });
                        }
                    })
                    .catch(error=>{
                        console.error(error)
                        Swal.fire("coupon has already been posted!");
                    })
                
            }
        });



    }
    return (
        <div className="py-40">
            <SharedHeadings heading={'Manage Coupons'} subheading={"Let's work"}></SharedHeadings>
            <div className="mx-5 md:mx-10 lg:mx-20 text-[#265073]">
                <div className="overflow-x-auto">
                    <table className="table">
                        {/* head */}
                        <thead className="text-[#265073] font-bold text-xl">
                            <tr>

                                <th>Coupon Code </th>
                                <th>Discount</th>
                                <th>Validity</th>
                                <th>Add</th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                manageCoupons.map(coupon => <CouponRow handleAdd={handleAdd} key={coupon._id} coupon={coupon}></CouponRow>)
                            }

                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    );
};

export default ManageCoupon;