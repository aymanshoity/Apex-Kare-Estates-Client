import { useQuery } from "@tanstack/react-query";
import UseAxiosSecure from "../../../Hooks/UseAxiosSecure";
import SharedHeadings from "../../SharedComponents/SharedHeadings";
import SingleAnnouncement from "./SingleAnnouncement";


const Announcements = () => {
    const axiosSecure = UseAxiosSecure()
    const { data: announcements = [] } = useQuery({
        queryKey: ['announcements'],
        queryFn: async () => {
            const res = await axiosSecure.get('/announcements')
            return res.data
        }
    })
    console.log(announcements)
    return (
        <div className="py-40 mx-5 md:mx-10 lg:mx-20">
            <SharedHeadings heading={'Announcements'} subheading={"Attention!!!"}></SharedHeadings>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {
                    announcements.map((announcement, index) => <SingleAnnouncement key={announcement._id} announcement={announcement} index={index}></SingleAnnouncement>)
                }

            </div>

        </div>
    );
};

export default Announcements;