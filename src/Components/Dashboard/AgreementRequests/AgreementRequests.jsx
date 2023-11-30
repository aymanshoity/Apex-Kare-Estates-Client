import { useQuery } from "@tanstack/react-query";
import UseAxiosSecure from "../../../Hooks/UseAxiosSecure";
import SharedHeadings from "../../SharedComponents/SharedHeadings";
import SingleRequest from "./SingleRequest";
import Swal from "sweetalert2";


const AgreementRequests = () => {
    const axiosSecure = UseAxiosSecure()
    const { data: requests = [], refetch } = useQuery({
        queryKey: ['requests'],
        queryFn: async () => {
            const res = await axiosSecure.get('/agreementRequests')
            return res.data
        }
    })

    const handleAccept = (request) => {
        Swal.fire({
            title: "Are you sure ,you want to accept the request?",
            text: "You won't be able to revert this!",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes, Accept it!"
        }).then((result) => {
            const userRole = {
                role: "member",
                status: "accepted"
            }
            if (result.isConfirmed) {
                axiosSecure.patch(`/agreementRequests/admin/${request._id}`, userRole)
                    .then(res => {
                        console.log(res.data)
                        if (res.data.modifiedCount > 0) {
                            Swal.fire({
                                title: "Accepted!",
                                text: "The request has been accepted.",
                                icon: "success"
                            });
                            refetch()
                            axiosSecure.get(`/agreementRequests/admin/${request._id}`)
                                .then(res => {
                                    const data=res.data
                                    console.log(data)
                                    const memberInfo = {
                                        userId:data._id,
                                        apartmentId: data.apartmentId,
                                        name: data.name,
                                        email: data.email,
                                        photo: data.photoURL,
                                        floorNo: data.floorNo,
                                        blockName: data.blockName,
                                        apartmentNo: data.apartmentNo,
                                        rent: data.rent,
                                        date: data.date,
                                        role: data.role,
                                        status: data.status,
                                    }
                                    axiosSecure.post('/members', memberInfo)
                                        .then(res => {
                                            console.log(res.data)
                                            if (res.data.insertedId) {
                                                Swal.fire({
                                                    title: `User has been promoted to member`,
                                                    timer: 3000
                                                });

                                            }
                                        })
                                })
                        }
                    })
                    .catch(error => {
                        console.error('Error updating user profile:', error.response.data);
                    });


            }
        });
    }
    const handleReject = (request) => {
        Swal.fire({
            title: "Are you sure ,you want to reject the request?",
            text: "You won't be able to revert this!",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes, Reject it!"
        }).then((result) => {
            const userRole = {
                role: "user",
                status: "rejected"
            }
            if (result.isConfirmed) {
                axiosSecure.patch(`/agreementRequests/admin/${request._id}`, userRole)
                    .then(res => {
                        console.log(res.data)
                        if (res.data.modifiedCount > 0) {
                            Swal.fire({
                                title: "Rejected!",
                                text: "The request has been rejected.",
                                icon: "success"
                            });
                            refetch()
                        }
                    })
                    .catch(error => {
                        console.error('Error updating user profile:', error.response.data);
                    });



            }
        });

    }
    return (
        <div className="py-40 ">
            <SharedHeadings heading={'Agreement Requests'} subheading={"Let's see"}></SharedHeadings>
            <h2 className="text-2xl text-center text-[#265073]">Total Requests: {requests.length}</h2>
            <div className="grid grid-cols-1 lg:grid-cols-2 ">
                {
                    requests.map(request => <SingleRequest refetch={refetch} key={request._id} handleAccept={handleAccept} handleReject={handleReject} request={request}></SingleRequest>)
                }
            </div>

        </div>
    );
};

export default AgreementRequests;