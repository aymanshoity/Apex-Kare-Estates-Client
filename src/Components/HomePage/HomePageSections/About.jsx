import SharedHeadings from "../../SharedComponents/SharedHeadings";


const About = () => {
    return (
        <div className="my-40">
            <SharedHeadings heading={'About Us'} subheading={'Who we are?'}></SharedHeadings>
            <div className="hero min-h-screen bg-fixed" style={{ backgroundImage: 'url(https://i.ibb.co/WBSPbZ2/pexels-pixabay-276724.jpg)' }}>
                <div className="hero-overlay bg-[#265073] bg-opacity-60"></div>
                <div className="hero-content  ">
                    <div className="flex flex-col lg:flex-row items-center justify-around gap-6">


                        <div className="text-left max-w-md text-[#ECF4D6]">
                            <h1 className="mb-5 text-5xl font-bold fancy">Hello there</h1>
                            <p className="mb-5 fancy text-2xl font-semibold">At Apex-Kare-Estates, we take pride in redefining the standards of residential living. As a leading building management company, we are dedicated to ensuring a seamless and enjoyable experience for our residents. Here's a glimpse into who we are and what sets us apart:</p>

                            <p className="mb-5 fancy text-2xl font-semibold">
                                we are driven by a mission to create thriving communities where residents feel at home, safe, and connected. We are committed to providing exceptional property management services that enhance the quality of life for everyone within our buildings.
                            </p>
                            <div className="flex justify-center lg:justify-start">
                                <button className="btn bg-[#9AD0C2] text-[#265073]  fancy text-2xl">Get Started</button>
                            </div>

                        </div>

                        <div>
                            <img className="w-[400px] h-[250px] mr-8" src="https://i.ibb.co/WBSPbZ2/pexels-pixabay-276724.jpg" alt="" />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default About;