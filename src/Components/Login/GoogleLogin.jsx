import { useContext } from "react";
import { FaGoogle } from "react-icons/fa6";
import { AuthContext } from "../Provider/AuthProvider";
import { useLocation, useNavigate } from "react-router-dom";
import Swal from "sweetalert2";
// https://apex-kare-estates-server.vercel.app
const GoogleLogin = () => {
    const {  googleSignIn } = useContext(AuthContext)
    const location = useLocation()
    const navigate = useNavigate()
    const from = location.state?.from?.pathname || "/";
    console.log(location.state)
    const handleGoogleLogIn = () => {
        googleSignIn()
            .then(result => {
                console.log(result.user)
                const loggedUser = {
                    name: result.user.displayName,
                    email: result.user.email,
                    photo: result.user.photoURL,
                }
                fetch('https://apex-kare-estates-server.vercel.app/accountHolders', {
                    method: 'POST',
                    headers: {
                        'content-type': 'application/json'
                    },
                    body: JSON.stringify(loggedUser)
                })
                    .then(res => res.json())
                    .then(data => {
                        console.log(data)
                        Swal.fire("User Logged Successfully");
                        navigate(from, { replace: true })
                    })
                
            })
            .catch(error => {
                console.log(error)
            })
    }

    return (
        <div>
            <button onClick={handleGoogleLogIn} className="btn bg-[#9AD0C2] text-[#265073] my-10">
                <FaGoogle></FaGoogle>Google
            </button>
        </div>
    );
};

export default GoogleLogin;