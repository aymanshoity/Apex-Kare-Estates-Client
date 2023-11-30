import { IoIosAddCircleOutline } from "react-icons/io";

const CouponRow = ({coupon,handleAdd}) => {
    const {coupon_code,discount_percent,description,image_url,_id,valid_from,valid_until}=coupon
    return (
        <tr className="md:font-lg md:text-xl">
            <th>{coupon_code}</th>
            <td>{discount_percent}%</td>
            <td>{valid_from}-{valid_until}</td>
            <td><button onClick={()=>handleAdd(coupon)} className="btn bg-[#265073] text-[#ECF4D6] md:font-bold md:text-xl"><IoIosAddCircleOutline /></button></td>
        </tr>
    );
};

export default CouponRow;