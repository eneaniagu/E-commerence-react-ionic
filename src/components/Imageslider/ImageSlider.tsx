import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Keyboard, Pagination, Scrollbar, Zoom } from 'swiper';
import 'swiper/css';
import 'swiper/css/autoplay';
import 'swiper/css/keyboard';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import 'swiper/css/zoom';
import '@ionic/react/css/ionic-swiper.css';
import '@ionic/react/css/ionic-swiper.css';
import './ImageSlider.scss';

const slideOpts = {
  initialSlide: 0,
  speed: 400,
};

const ImageSlider: React.FC = () => {
  return (
    <div className='slide-img'>
    <Swiper  
    modules={[Autoplay, Keyboard, Pagination, Scrollbar, Zoom]}
    autoplay={true}
    keyboard={true}
    pagination={true}
   
    
    >
    <SwiperSlide>
    <img src="../img/slider/2.jpg" alt="Slide 1" className="slider-img" />
    </SwiperSlide>
    <SwiperSlide>
    <img src="../img/slider/3.jpg" alt="Slide 1" />
    </SwiperSlide>
    <SwiperSlide>
    <img src="../img/slider/7.jpg" alt="Slide 1" />
    </SwiperSlide>
  </Swiper>
  </div>
  );
};

export default ImageSlider;