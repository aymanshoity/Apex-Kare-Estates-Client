import { useQuery } from "@tanstack/react-query";
import UseAxiosSecure from "../../../Hooks/UseAxiosSecure";


const Announcements = () => {
    const axiosSecure=UseAxiosSecure()
    const{data: announcements=[]}=useQuery({
        queryKey:['announcements'],
        queryFn:async()=>{
            const res=axiosSecure.get('/announcements')
            console.result(res.data)
            return res.data
        }
    })
    return (
        <div>
            
        </div>
    );
};

export default Announcements;