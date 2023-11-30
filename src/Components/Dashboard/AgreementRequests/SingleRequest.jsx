import { FaRegCheckCircle } from "react-icons/fa";

const SingleRequest = ({ request,handleAccept,handleReject }) => {
    const { floorNo, blockName, apartmentNo, rent, name, email, date,status } = request;
    
    return (
        <div className="card text-[#ECF4D6] bg-[#265073] shadow-xl mx-10 lg:mx-40 my-20 rounded-lg">

            <div className="card-body">
                <h2 className="card-title font-extrabold">User Name:{name}</h2>
                <h2 className="card-title font-extrabold">User Email:{email}</h2>
                <h2 className="card-title font-extrabold">Appartment No:{apartmentNo}</h2>
                <p className="card-title font-semibold">Floor No:{floorNo}</p>
                <p className="card-title font-semibold">Block No:{blockName}</p>
                <p className="card-title font-semibold">Rent: {rent}$</p>
                <p className="card-title font-semibold">Date: <span className="text-red-600">{date}</span></p>
                <div className="card-actions justify-start">
                    {
                        status==="accepted"? <button className="btn   text-[#265073] bg-[#9AD0C2]"><FaRegCheckCircle />Accepted</button>:<button onClick={()=>handleAccept(request)} className="btn   text-[#265073] bg-[#9AD0C2]">Accept</button>
                    }
                    {
                        status==="rejected"? <button className="btn  text-[#265073] bg-[#9AD0C2]"><FaRegCheckCircle />Rejected</button>:<button onClick={()=>handleReject(request)} className="btn text-[#265073] bg-[#9AD0C2] ">Reject</button>
                    }
                    
                </div>
            </div>


        </div>
    );
};

export default SingleRequest;