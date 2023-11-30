
import { Link } from 'react-router-dom';

const Coupons = ({coupons}) => {
    const {coupon_code,discount_percent,valid_from,valid_until,description,image_url}=coupons
    return (
        <div className="card glass  bg-[#265073] ">
            <figure><img className='h-[250px]' src={image_url} /></figure>
            <div className="card-body ">
                <h2 className="card-title text-[#ECF4D6]">Great Deal: {discount_percent}% discount</h2>
                <h2 className="card-title text-[#ECF4D6]">Valid:{valid_from} -{valid_until} </h2>
                <h2 className="card-title text-[#ECF4D6]">Code :{coupon_code}  </h2>
                <p className='text-[#ECF4D6]'>{description}</p>
                <p className='text-[#ECF4D6]'>Why are you waiting? hurry!!</p>
                <div className="card-actions justify-end">
                    <Link to='/apartments'><button className="btn bg-[#9AD0C2] text-[#265073] rounded-full fancy text-2xl">Grab it Today</button></Link>
                </div>

            </div>

        </div>
    );
};

export default Coupons;