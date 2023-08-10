import { Icon } from '@iconify/react';
import { Rating } from "@smastrom/react-rating";
import { useEffect, useState } from "react";
import "swiper/css";
import "swiper/css/navigation";
import { Navigation } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import SectionHeader from "./SectionHeader";

import "@smastrom/react-rating/style.css";

const Review = () => {
  const [reviews, setReviews] = useState([]);
  useEffect(() => {
    fetch("https://bistro-boss-server-steel-five.vercel.app/review")
      .then((res) => res.json())
      .then((data) => setReviews(data));
  }, []);
  return (
    <section className="mb-20">
      <SectionHeader header="testimonials" subHeader="What Our Client's Say" />
      <Swiper navigation={true} modules={[Navigation]} className="mySwiper">
        {reviews.map((review) => (
          <SwiperSlide key={review._id}>
            <div className="flex flex-col justify-center items-center px-24">
              <Rating style={{ maxWidth: 180 }} value={review.rating} readOnly />
              <Icon icon="mdi:format-quote-open" width="160" height="160" className="-my-5" />
              <p className="text-center my-5">{review.details}</p>
              <h2 className="uppercase text-2xl text-yellow-600">
                {review.name}
              </h2>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
};

export default Review;
