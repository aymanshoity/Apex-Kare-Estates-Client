import { useQuery } from "@tanstack/react-query";
import UseAxiosSecure from "../../../Hooks/UseAxiosSecure";
import SharedHeadings from "../../SharedComponents/SharedHeadings";
import CouponRow from "./CouponRow";
import { useState } from "react";
import Swal from "sweetalert2";
import UseAxiosPublic from "../../../Hooks/UseAxiosPublic";


const ManageCoupon = () => {
    const axiosSecure = UseAxiosSecure()
    const axiosPublic = UseAxiosPublic()
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
                const userCoupon = {
                    coupon_code:coupon.coupon_code,
                    discount_percent:coupon.discount_percent,
                    valid_from:coupon.valid_from,
                    valid_until:coupon.valid_until,
                    description:coupon.description,
                    image_url:coupon.image_url,
                    coupon_id:coupon._id
                }
                axiosSecure.post('/coupons', userCoupon)
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
                    .catch(error => {
                        console.error(error)
                        Swal.fire("coupon has already been posted!");
                    })

            }
        });



    }
    const handleDelete = (coupon) => {

        Swal.fire({
            title: "Are you sure you want to remove this Coupon?",
            text: "You won't be able to revert this!",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes, remove it!"
        }).then((result) => {
            if (result.isConfirmed) {
                
                axiosSecure.delete(`/coupons/${coupon._id}`)
                    .then(res => {
                        console.log(res.data)
                        if (res.data.deletedCount > 0) {
                            Swal.fire({
                                title: "Removed!",
                                text: "Your coupon has been removed.",
                                icon: "success"
                            });
                        }
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
                                <th>Delete</th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                manageCoupons.map(coupon => <CouponRow handleDelete={handleDelete} handleAdd={handleAdd} key={coupon._id} coupon={coupon}></CouponRow>)
                            }

                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    );
};

export default ManageCoupon;