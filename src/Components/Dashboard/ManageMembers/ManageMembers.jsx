import { useContext } from "react";
import { AuthContext } from "../../Provider/AuthProvider";
import { useQuery } from "@tanstack/react-query";
import UseAxiosSecure from "../../../Hooks/UseAxiosSecure";
import SharedHeadings from "../../SharedComponents/SharedHeadings";
import TableRow from "./TableRow";
import Swal from "sweetalert2";


const ManageMembers = () => {
    const axiosSecure = UseAxiosSecure()
    const { data: members = [], refetch } = useQuery({
        queryKey: ['members'],
        queryFn: async () => {
            const res = await axiosSecure.get('/members')
            return res.data
        }
    })
    console.log(members)
    refetch()
    const handleDelete = (userId, member) => {

        Swal.fire({
            title: `Are you sure you want to remove ${member.name}?`,
            text: "You won't be able to revert this!",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes, delete it!"
        }).then((result) => {
            if (result.isConfirmed) {
                const userRole = {
                    role: "user",
                    status: "rejected"
                }
                axiosSecure.patch(`/agreementRequests/admin/${userId}`, userRole)
                    .then(res => {
                        console.log(res.data)
                        if (res.data.modifiedCount > 0) {
                            axiosSecure.delete(`/members/${member._id}`)
                                .then(res => {
                                    console.log(res.data)
                                    if (res.data.deletedCount > 0) {
                                        Swal.fire({
                                            title: "Removed!!",
                                            text: "The member has been removed",
                                            icon: "success"
                                        });
                                        
                                    }
                                    refetch()
                                })
                        }
                    })

            }
        });

    }
    return (
        <div className="py-40">
            <SharedHeadings heading={'All Members'} subheading={"Let's see"}></SharedHeadings>
            <div className="mx-5 md:mx-10 lg:mx-20 text-[#265073]">
                <div className="overflow-x-auto">
                    <table className="table">
                        {/* head */}
                        <thead className="text-[#265073] md:font-bold md:text-xl">
                            <tr>
                                <th></th>
                                <th>Name</th>
                                <th>Email</th>
                                <th>Action</th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                members.map((member, index) => <TableRow handleDelete={handleDelete} index={index} key={member._id} member={member}></TableRow>)
                            }

                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    );
};

export default ManageMembers;