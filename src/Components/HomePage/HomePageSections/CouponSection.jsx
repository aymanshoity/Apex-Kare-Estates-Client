import { motion } from "framer-motion"
import SharedHeadings from "../../SharedComponents/SharedHeadings";
import Coupons from "./Coupons";
import { useQuery } from "@tanstack/react-query";
import UseAxiosPublic from "../../../Hooks/UseAxiosPublic";

const CouponSection = () => {
    const axiosPublic=UseAxiosPublic()
    const {data: coupons= []}=useQuery({
        queryKey:['coupons'],
        queryFn: async()=>{
            const res=await axiosPublic('/coupons')
            return res.data
        }
    })
    return (
        <div>

            <SharedHeadings subheading={'See First!!!'} heading={'Coupons'}></SharedHeadings>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 lg:mx-40 mx-10 gap-8">
                {coupons.map((coupons) => (
                    <motion.div
                        key={coupons.id}
                        className="coupons"
                        whileHover={{ scale: 1.1, boxShadow: '0px 0px 20px rgba(0, 0, 0, 0.1)' }}
                    >
                        <Coupons key={coupons._id} coupons={coupons}></Coupons>
                    </motion.div>
                ))}
            </div>
        </div>
    );
};

export default CouponSection;