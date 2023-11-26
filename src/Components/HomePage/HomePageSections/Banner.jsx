import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import { Autoplay, Pagination, Navigation } from 'swiper/modules';
import { useRef } from 'react';
const Banner = () => {

    const progressCircle = useRef(null);
    const progressContent = useRef(null);
    const onAutoplayTimeLeft = (s, time, progress) => {
        progressCircle.current.style.setProperty('--progress', 1 - progress);
        progressContent.current.textContent = `${Math.ceil(time / 1000)}s`;
    };
    return (
        <Swiper
            spaceBetween={30}
            centeredSlides={true}
            autoplay={{
                delay: 2500,
                disableOnInteraction: false,
            }}
            pagination={{
                clickable: true,
            }}
            navigation={true}
            modules={[Autoplay, Pagination, Navigation]}
            onAutoplayTimeLeft={onAutoplayTimeLeft}
            className="mySwiper max-h-screen"
        >
            <SwiperSlide >
                <div className="hero min-h-screen" style={{ backgroundImage: 'url(https://i.ibb.co/mh5QSZ0/pexels-vecislavas-popa-1571460.jpg)' }}>
                    <div className="hero-content text-center rounded-lg text-[#ECF4D6] bg-[#265073] bg-opacity-80 mx-10 my-44">
                        <div className="max-w-md">
                            <h1 className="mb-5 text-3xl lg:text-5xl font-bold">Coming Home Never Felt So Good!</h1>

                            <button className="btn bg-[#9AD0C2] text-[#265073]">Get Started</button>
                        </div>
                    </div>
                </div>
            </SwiperSlide>
            <SwiperSlide >
                <div className="hero min-h-screen" style={{ backgroundImage: 'url(https://i.ibb.co/KG0ZMt2/pexels-max-rahubovskiy-7512035.jpg)' }}>
                    <div className="hero-content text-center rounded-lg text-[#ECF4D6] bg-[#265073] bg-opacity-80 mx-10 my-44">
                        <div className="max-w-md">
                            <h1 className="mb-5 text-3xl lg:text-5xl font-bold">Find Your Dream Home Today</h1>
                            <button className="btn bg-[#9AD0C2] text-[#265073]">Get Started</button>
                        </div>
                    </div>
                </div>
            </SwiperSlide>
            <SwiperSlide >
                <div className="hero min-h-screen" style={{ backgroundImage: 'url(https://i.ibb.co/McPq1tj/pexels-dmitry-zvolskiy-2062431.jpg)' }}>
                    <div className="hero-content text-center rounded-lg text-[#ECF4D6] bg-[#265073] bg-opacity-80 mx-10 my-44">
                        <div className="max-w-md">
                            <h1 className="mb-5 text-3xl lg:text-5xl font-bold">Building Your Quality
                                of Comfortable Life</h1>
                            <button className="btn bg-[#9AD0C2] text-[#265073]">Get Started</button>
                        </div>
                    </div>
                </div>
            </SwiperSlide>

            <div className="autoplay-progress" slot="container-end">
                <svg viewBox="0 0 48 48" ref={progressCircle}>
                    {/* <circle cx="24" cy="24" r="20"></circle> */}
                </svg>
                <span ref={progressContent}></span>

            </div>
        </Swiper>

    );
};

export default Banner;