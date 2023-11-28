import { FaRegUser } from "react-icons/fa";
import { RiAdminFill } from "react-icons/ri";
const TableRow = ({user,index,handleMakeAdmin}) => {
    const {name,email,role}=user
    return (
        <tr>
        <th>{index+1}</th>
        <td>{name}</td>
        <td>{email}</td>
        <td>
            {
                user.role==='admin'? <button className="btn text-xl bg-[#D1A054]"><RiAdminFill />Admin</button>:<button onClick={()=>handleMakeAdmin(user)} className="btn text-xl bg-[#D1A054]"><FaRegUser /></button>
            }
        </td>
        
        
        </tr>
    );
    
};

export default TableRow;