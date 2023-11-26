import { motion } from "framer-motion"
import SharedHeadings from "../../SharedComponents/SharedHeadings";
import Coupons from "./Coupons";
import { useEffect, useState } from "react";

const CouponSection = () => {
    const [cards, setCard] = useState([])
    useEffect(() => {
        fetch('../../../../public/coupon.json')
            .then(res => res.json())
            .then(data => {
                console.log(data)
                setCard(data)
            })
    }, [])
    return (
        <div>

            <SharedHeadings subheading={'See First!!!'} heading={'Coupons'}></SharedHeadings>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 lg:mx-40 mx-10 gap-6">
                {cards.map((card) => (
                    <motion.div
                        key={card.id}
                        className="card"
                        whileHover={{ scale: 1.1, boxShadow: '0px 0px 20px rgba(0, 0, 0, 0.1)' }}
                    >
                        <Coupons card={card}></Coupons>
                    </motion.div>
                ))}
            </div>
        </div>
    );
};

export default CouponSection;