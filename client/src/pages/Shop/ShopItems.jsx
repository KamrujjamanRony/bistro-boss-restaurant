import useMenu from "../../hooks/useMenu";
import MenuCard from "../Shared/MenuCard";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper/modules";
import { useState } from "react";

import "swiper/css";
import "swiper/css/pagination";

const ShopItems = ({ item }) => {
  const [menu] = useMenu();
  const [currentPage, setCurrentPage] = useState(1);
  const [itemsPerPage] = useState(6);
  const items = menu.filter((d) => d.category === item);

  const handlePaginationChange = (swiper) => {
    setCurrentPage(swiper.realIndex + 1);
  };

  const pagination = {
    clickable: true,
    renderBullet: function (index, className) {
      return '<span class="' + className + '">' + (index + 1) + "</span>";
    },
  };

  return (
    <Swiper
      pagination={pagination}
      modules={[Pagination]}
      className="mySwiper mb-24"
      onSwiper={handlePaginationChange}
    >
      {/* Render each Swiper slide with the current items */}
      {Array.from({ length: Math.ceil(items.length / itemsPerPage) }).map(
        (_, index) => {
          const firstItemIndex = index * itemsPerPage;
          const lastItemIndex = firstItemIndex + itemsPerPage;
          const currentItems = items.slice(firstItemIndex, lastItemIndex);

          return (
            <SwiperSlide key={index}>
              <div className="grid grid-cols-3 gap-8 mb-12">
                {currentItems.map((menu) => (
                  <MenuCard key={menu._id} menu={menu} />
                ))}
              </div>
            </SwiperSlide>
          );
        }
      )}
    </Swiper>
  );
};

export default ShopItems;
