import { useQuery } from "@tanstack/react-query";
import UseAxiosSecure from "../../../Hooks/UseAxiosSecure";
import SharedHeadings from "../../SharedComponents/SharedHeadings";
import TableRow from "./TableRow";
import Swal from "sweetalert2";


const AllUsers = () => {
    const axiosSecure=UseAxiosSecure()
    const {data: users=[]}=useQuery({
        queryKey:['users'],
        queryFn: async()=>{
            const res= await axiosSecure.get('/accountHolders')
            return res.data

        }
    })
    const handleMakeAdmin=user=>{
        Swal.fire({
            title: `Are you sure you want make ${user.name} Admin?`,
            text: "You won't be able to revert this!",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes,Of course"
        }).then((result) => {
            if (result.isConfirmed) {
                const userRole={
                    role:"admin"
                }
                fetch(`https://apex-kare-estates-server.vercel.app/accountHolders/admin/${user._id}`, {
                    method: 'PATCH',
                    headers: {
                        'content-type': 'application/json'
                    },
                    body: JSON.stringify(userRole)
                })
                    .then(res => res.json())
                    .then(data => {
                        console.log(data)
                        if (data.modifiedCount > 0) {
                                Swal.fire({
                                    title: "Done!",
                                    text: `${user.name} is Admin now` ,
                                    icon: "success"
                                });
                            }
                    })
                

            }
        });
    }
    return (
        <div className="py-40">
            <SharedHeadings heading={"All User"}></SharedHeadings>

            <div className="lg:mx-10 mx-auto bg-white">
                <div className="mx-8  py-10 flex justify-between items-around ">
                    <h2 className="text-2xl font-bold"> Total Users:{users.length} </h2>
                </div>
                <div>
                    <div className="overflow-x-auto lg:mx-8 rounded-lg">
                        <table className="table">
                            {/* head */}
                            <thead className="bg-[#265073] text-[#ECF4D6] text-xl">
                                <tr>
                                    <th></th>
                                    <th>Name</th>
                                    <th>Email</th>
                                    <th>Role</th>

                                </tr>
                            </thead>
                            <tbody className="text-xl">

                                {
                                    users.map((user, index) => <TableRow handleMakeAdmin={handleMakeAdmin} key={user._id} index={index} user={user}></TableRow>)
                                }
                            </tbody>
                        </table>
                    </div>
                </div>

            </div>
            
        </div>
    );
};

export default AllUsers;