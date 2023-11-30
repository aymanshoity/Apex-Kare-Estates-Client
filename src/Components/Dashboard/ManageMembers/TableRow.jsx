import { AiOutlineDelete } from "react-icons/ai";

const TableRow = ({member,index,handleDelete}) => {
    const {email,name,userId}=member
    return (
        <tr className="md:font-lg md:text-xl">
            <th>{index+1}</th>
            <td>{name}</td>
            <td>{email}</td>
            <td><button onClick={()=>handleDelete(userId,member)} className="btn bg-[#265073] text-[#ECF4D6] md:font-bold md:text-xl"><AiOutlineDelete /></button></td>
        </tr>
    );
};

export default TableRow;