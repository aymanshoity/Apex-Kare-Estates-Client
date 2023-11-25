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
        <SwiperSlide className='relative'><img src="https://i.ibb.co/mh5QSZ0/pexels-vecislavas-popa-1571460.jpg" /></SwiperSlide>
        <SwiperSlide className='relative'><img src="https://i.ibb.co/KG0ZMt2/pexels-max-rahubovskiy-7512035.jpg" /></SwiperSlide>
        <SwiperSlide className='relative'><img src="https://i.ibb.co/McPq1tj/pexels-dmitry-zvolskiy-2062431.jpg" /></SwiperSlide>
        <div className='absolute top-10 bg-black p-10'>
            <h2 className='text-white'>jdnfm</h2>
        </div>
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