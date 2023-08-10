import { Swiper, SwiperSlide } from 'swiper/react';
import { FreeMode, Pagination } from 'swiper/modules';

import 'swiper/css';
import 'swiper/css/free-mode';
import 'swiper/css/pagination';

import img1 from "../../assets/home/slide1.jpg";
import img2 from "../../assets/home/slide2.jpg";
import img3 from "../../assets/home/slide3.jpg";
import img4 from "../../assets/home/slide4.jpg";
import img5 from "../../assets/home/slide5.jpg";
import SectionHeader from '../../components/Home/SectionHeader';

const Categories = () => {
    return (
        <>
        <SectionHeader header="order online" subHeader="From 11:00am to 10:00pm" />
      <Swiper
        slidesPerView={4}
        spaceBetween={30}
        freeMode={true}
        pagination={{
          clickable: true,
        }}
        modules={[FreeMode, Pagination]}
        className="mySwiper mb-24"
      >
        <SwiperSlide>
            <img src={img1} alt="slide1" />
            <h3 className='text-4xl uppercase text-center -mt-16 text-white font-cinzel drop-shadow-xl mb-20 text-shadow'>salad</h3>
        </SwiperSlide>
        <SwiperSlide>
            <img src={img2} alt="slide1" />
            <h3 className='text-4xl uppercase text-center -mt-16 text-white font-cinzel drop-shadow-xl mb-20 text-shadow'>pizzas</h3>
        </SwiperSlide>
        <SwiperSlide>
            <img src={img3} alt="slide1" />
            <h3 className='text-4xl uppercase text-center -mt-16 text-white font-cinzel drop-shadow-xl mb-20 text-shadow'>soups</h3>
        </SwiperSlide>
        <SwiperSlide>
            <img src={img4} alt="slide1" />
            <h3 className='text-4xl uppercase text-center -mt-16 text-white font-cinzel drop-shadow-xl mb-20 text-shadow'>desserts</h3>
        </SwiperSlide>
        <SwiperSlide>
            <img src={img5} alt="slide1" />
            <h3 className='text-4xl uppercase text-center -mt-16 text-white font-cinzel drop-shadow-xl mb-20 text-shadow'>salad</h3>
        </SwiperSlide>
      </Swiper>
    </>
    );
};

export default Categories;