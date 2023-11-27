

const SingleApartment = ({ apartment,handleAgreement }) => {
    const { apartmentImage, floorNo, blockName, apartmentNo, rent,status } = apartment;
    return (
        <div className="card card-side bg-[#9AD0C2] shadow-xl mx-10 lg:mx-40 my-20 rounded-lg">
            <div className="w-1/2 rounded-lg">
                <figure><img className="object-fill h-[300px] w-full rounded-lg" src={apartmentImage} alt="Movie" /></figure>
            </div>
            <div className="card-body w-1/2">
                <h2 className="card-title font-extrabold">Appartment No:{apartmentNo}</h2>
                <p className="card-title font-semibold">Floor No:{floorNo}</p>
                <p className="card-title font-semibold">Block No:{blockName}</p>
                <p className="card-title font-semibold">Rent: {rent}$</p>
                <p className="card-title font-semibold">Status: <span className="text-red-600">{status}</span></p>
                <div className="card-actions justify-start">
                    <button onClick={()=>handleAgreement(apartment)} className="btn bg-[#265073] text-[#ECF4D6]">Agreement</button>
                </div>
            </div>
        </div>
    );
};

export default SingleApartment;