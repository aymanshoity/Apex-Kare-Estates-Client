import { Link } from "react-router-dom";
import SharedHeadings from "../../SharedComponents/SharedHeadings";


const ApartmentLocation = () => {
    return (
        <div className="my-20">
            <SharedHeadings subheading={"Find Us"} heading={'Our Location'}></SharedHeadings>
            <div>
                <div className="hero w-full h-[400px] bg-[#265073] bg-fixed" style={{ backgroundImage: 'url(https://i.ibb.co/kKrmvzX/Gulshan.png)' }}>
                    <div className="hero-overlay bg-opacity-80"></div>
                    <div className="hero-content text-center text-neutral-content">
                        <div className="max-w-lg">
                            <Link to='https://www.google.com/maps/place/Gulshan+Pink+City+Shopping+Complex,+Gulshan+Pink+City+Shopping+Center,+15+Gulshan+Ave,+Dhaka+1212/@23.7922329,90.415781,17z/data=!4m6!3m5!1s0x3755c7a1344fe415:0x1bc7e674d73196d1!8m2!3d23.7922329!4d90.415781!16s%2Fg%2F11f54lv0j_'><button className="btn bg-[#9AD0C2] text-[#265073] text-xl">Get location</button></Link>
                        </div>
                    </div>
                </div>
            </div>


        </div>
    );
};

export default ApartmentLocation;