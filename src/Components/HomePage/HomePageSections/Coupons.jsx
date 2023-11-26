import React from 'react';

const Coupons = ({card}) => {
    const {title,image,description}=card
    return (
        <div className="card glass bg-[#265073] ">
            <figure><img className='' src={image} alt="car!" /></figure>
            <div className="card-body ">
                <h2 className="card-title text-[#ECF4D6]">Great Deals</h2>
                <h2 className="card-title text-[#ECF4D6]">Up to 40% discount</h2>
                <p className='text-[#ECF4D6]'>Why are you waiting?</p>
                <div className="card-actions justify-end">
                    <button className="btn bg-[#9AD0C2] text-[#265073] rounded-full fancy text-2xl">Rent Today</button>
                </div>

            </div>

        </div>
    );
};

export default Coupons;