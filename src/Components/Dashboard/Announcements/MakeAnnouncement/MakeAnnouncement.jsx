import SharedHeadings from "../../../SharedComponents/SharedHeadings";
import UseAxiosSecure from "../../../../Hooks/UseAxiosSecure";
import Swal from "sweetalert2";


const MakeAnnouncement = () => {
    const axiosSecure = UseAxiosSecure()
    const handleSubmit = e => {
        e.preventDefault()
        const form = e.target;
        const title = form.title.value;
        const description = form.description.value;
        const announcement = {
            title: title,
            description: description,
            date: new Date().toLocaleString().split(',')[0],
        }
        console.log(announcement)
        Swal.fire({
            title: "Are you sure you want make this announcement?",
            text: "You won't be able to revert this!",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes, make it!"
        }).then((result) => {
            if (result.isConfirmed) {
                axiosSecure.post('/announcements', announcement)
                    .then(res => {
                        console.log(res.data)
                        if (res.data.insertedId) {
                            Swal.fire({
                                title: "Announced!",
                                text: "Your announcement has been made.",
                                icon: "success"
                            });
                        }
                    })

            }
        });



    }
    return (
        <div className="py-40">
            <SharedHeadings subheading={'Time to send some message'} heading={'Make an Announcement'}></SharedHeadings>
            <div className="lg:w-[1280px] mx-auto">
                <form className="card-body" onSubmit={handleSubmit}>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Title</span>
                        </label>
                        <input type="text" name="title" placeholder="Title" className="input input-bordered" required />
                    </div>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Description</span>
                        </label>
                        <input type="text" name="description" placeholder="description" className="input input-bordered" required />
                    </div>
                    <div className="form-control mt-6">
                        <button className="btn bg-[#265073] text-[#ECF4D6]">Announce</button>
                    </div>

                </form>
            </div>
        </div>
    );
};

export default MakeAnnouncement;