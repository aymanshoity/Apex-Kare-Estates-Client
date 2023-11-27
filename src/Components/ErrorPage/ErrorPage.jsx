import { Link } from "react-router-dom";


const ErrorPage = () => {
    return (

        <div className="hero min-h-screen flex flex-col lg:flex-row justify-center gap-6 items-center" style={{ backgroundImage: 'url(https://i.ibb.co/x561gzR/Download-free-image-of-Turquoise-acrylic-texture-background-wallpaper-by-Nunny-about-turquoise-turqu.jpg)' }}>
            <img className="rounded-xl w-[400px] h-[400px]" src="https://i.ibb.co/fdvtwBw/HTML-404-Page-Animated.png" alt="" />
            <div className="max-w-md text-[#ECF4D6] text-center lg:text-left">
                <h1 className="mb-5 text-9xl font-bold">404</h1>
                <p className="mb-5 text-5xl">Sorry,Page Not Found</p>
                <p className="mb-5 text-2xl ">The link you followed,probably broken or the page has been removed</p>
                <Link to='/'><button className="btn text-[#9AD0C2] bg-[#265073]">Go Home</button></Link>
            </div>
            
        </div>


    );
};

export default ErrorPage;