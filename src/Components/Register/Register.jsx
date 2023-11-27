import { useContext } from "react";
import { useForm } from "react-hook-form"
import { Link, useNavigate } from "react-router-dom";
import { AuthContext } from "../Provider/AuthProvider";
import { updateCurrentUser, updateProfile } from "firebase/auth";
import Swal from "sweetalert2";
import GoogleLogin from "../Login/GoogleLogin";

const Register = () => {
    const navigate = useNavigate()
    const { user, createUser, logOut } = useContext(AuthContext)
    const { register, handleSubmit, reset, formState: { errors } } = useForm()
    const onSubmit = (data) => {
        console.log(data)
        createUser(data.email, data.password)
            .then(result => {
                console.log(result)
                updateProfile(result.user, {
                    displayName: data.name,
                    photoURL: data.PhotoURL
                })
                    .then(() => {
                        Swal.fire("User Created Successfully!");
                        reset();
                        logOut()
                            .then()
                            .catch(error => console.log(error))
                        navigate('/')
                    })
                    .catch(error => {
                        console.error(error)
                    })
            })
            .catch(error => {
                console.error(error)
            })

    }
    return (
        <div className="hero min-h-screen py-32" style={{ backgroundImage: 'url(https://i.ibb.co/x561gzR/Download-free-image-of-Turquoise-acrylic-texture-background-wallpaper-by-Nunny-about-turquoise-turqu.jpg)' }}>
            <div>
                <div className="text-center text-[#ECF4D6] my-10">
                    <h1 className="text-5xl font-bold">Register now!</h1>
                </div>
                <div className="flex flex-col lg:flex-row gap-6 justify-between">
                    <div>
                        <img className="lg:w-[600px] w-[400px] h-[600px] rounded-xl" src="https://i.ibb.co/Fz8Nsrr/3918929.jpg" alt="" />
                    </div>
                    <div className="card w-full max-w-sm shadow-2xl bg-[#ECF4D6]">

                        <form onSubmit={handleSubmit(onSubmit)} className="card-body text-[#265073]">
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Your name</span>
                                </label>
                                <input {...register("name", { required: true })} type="text" placeholder="Your name" className="input input-bordered" required />
                                {errors.name && <span>This field is required</span>}
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Your Photo URL</span>
                                </label>
                                <input {...register("PhotoURL", { required: true })} type="text" placeholder="Your Photo URL" className="input input-bordered" required />
                                {errors.PhotoURL && <span>This field is required</span>}
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Email</span>
                                </label>
                                <input {...register("email", { required: true })} type="email" placeholder="email" className="input input-bordered" required />
                                {errors.email && <span>This field is required</span>}
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Password</span>
                                </label>
                                <input {...register("password", { required: true, minLength: 6, maxLength: 16, pattern: /(?=.*[0-9])(?=.*[!@#$%^&*])(?=.*[a-z])(?=.*[A-Z])/ })} type="password" placeholder="password" className="input input-bordered" required />
                                {errors.password?.type === "required" && (
                                    <p className="text-red-600">Password is required</p>
                                )}
                                {errors.password?.type === "minLength" && (
                                    <p className="text-red-600">Password length should be at least 6</p>
                                )}
                                {errors.password?.type === "maxLength" && (
                                    <p className="text-red-600">Password length should be maximum 16 characters</p>
                                )}
                                {errors.password?.type === "pattern" && (
                                    <p className="text-red-600">Password should contain at least 1 number and one Special character 1 Uppercase and 1 lowercase</p>
                                )}

                            </div>
                            <div className="form-control mt-6">
                                <button className="btn bg-[#9AD0C2] text-[#265073]">Register</button>
                            </div>
                            <Link className='text-center text-[#265073]' to='/login'><p>Already registered? Go to log in</p></Link>

                        </form>
                        <div className="divider">OR</div>
                        <div className="flex flex-col justify-center items-center">
                            <p>Or Sign Up with</p>
                            <GoogleLogin></GoogleLogin>
                        </div>
                    </div>
                </div>
            </div>

        </div>
    );
};

export default Register;