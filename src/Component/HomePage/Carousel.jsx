// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

// import required modules
import { Pagination, Navigation } from 'swiper/modules';
import Slide from './Slide';

const Carousel = () => {
    return (
        <Swiper
        slidesPerView={1}
        spaceBetween={30}
        loop={true}
        pagination={{
          clickable: true,
        }}
        navigation={true}
        modules={[Pagination, Navigation]}
        className="mySwiper"
      >
        <SwiperSlide><Slide image='https://i.ibb.co/10zSwBX/slider-image-1.jpg' title='Find Your Perfect Match on Soulmate' description='Discover meaningful connections and lifelong love. Join Soulmate today and meet the person you’ve been waiting for.'></Slide></SwiperSlide>
        <SwiperSlide><Slide image='https://i.ibb.co/qNHhG2R/slider-image-2.jpg' title='Love Begins Here at Soulmate' description='Your journey to finding true love starts now. Explore profiles, connect, and build your future together on Soulmate.'></Slide></SwiperSlide>
        <SwiperSlide><Slide image='https://i.ibb.co/Vp8t6hy/slider-image-3.jpg' title='Your Soulmate Awaits You' description="Don't wait for love to find you. Take the first step towards happiness and join Soulmate to meet your perfect match."></Slide></SwiperSlide>
      </Swiper>
    );
};

export default Carousel;