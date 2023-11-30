
import { useContext, useEffect, useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { loadCaptchaEnginge, LoadCanvasTemplate,  validateCaptcha } from 'react-simple-captcha';
import { AuthContext } from "../Provider/AuthProvider";
import Swal from "sweetalert2";
import GoogleLogin from "./GoogleLogin";
const Login = () => {
    const {  userSignIn } = useContext(AuthContext)
    const [disabled, setDisabled] = useState(true)
    const location = useLocation()
    const navigate = useNavigate()
    const from = location.state?.from?.pathname || "/";
    console.log(location.state)
    useEffect(() => {
        loadCaptchaEnginge(6);
    }, [])

    const handleValidateCaptcha = (e) => {
        const user_captcha_value = e.target.value;
        if (validateCaptcha(user_captcha_value)) {
            setDisabled(false)
        } else {
            setDisabled(true)
        }

    }
    const handleSubmit = (e) => {
        e.preventDefault()

        const form = e.target
        const email = form.email.value
        const password = form.password.value
        const loggedUser = { email, password }
        console.log(loggedUser)
        userSignIn(email, password)
            .then(result => {
                console.log(result)
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
        <div className="hero min-h-screen py-32" style={{ backgroundImage: 'url(https://i.ibb.co/x561gzR/Download-free-image-of-Turquoise-acrylic-texture-background-wallpaper-by-Nunny-about-turquoise-turqu.jpg)' }}>
            <div>
                <div className="text-center text-[#ECF4D6] my-10">
                    <h1 className="text-5xl font-bold">Login now!</h1>
                </div>
                <div className="flex flex-col lg:flex-row gap-6 justify-between">
                    <div>
                        <img className="lg:w-[600px] w-[400px] h-[600px] rounded-xl" src="https://i.ibb.co/0mSWYBV/2942004.jpg" alt="" />
                    </div>
                    <div className="card w-full max-w-sm shadow-2xl bg-[#ECF4D6]">

                        <form onSubmit={handleSubmit} className="card-body text-[#265073]">

                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Email</span>
                                </label>
                                <input name="email" type="email" placeholder="email" className="input input-bordered" required />

                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Password</span>
                                </label>
                                <input name="password" type="password" placeholder="password" className="input input-bordered" required />


                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <LoadCanvasTemplate />
                                </label>
                                <input onBlur={handleValidateCaptcha} type="text" placeholder="type" className="input input-bordered" required />


                            </div>
                            <div className="form-control mt-6">
                                <button disabled={disabled} className="btn  bg-[#9AD0C2] text-[#265073] ">Login</button>
                            </div>

                            <Link className='text-center text-[#265073]' to='/register'><p>New to this Website? Go to Register Page</p></Link>

                        </form>
                        <div className="divider">OR</div>
                        <div className="flex flex-col justify-center items-center">
                            <p>Or Sign In with</p>
                            <GoogleLogin></GoogleLogin>
                        </div>
                    </div>
                </div>
            </div>

        </div>
    );
};

export default Login;