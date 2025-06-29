import React, { useRef } from "react";
import {
  Navigation,
  Pagination,
  Scrollbar,
  A11y,
  Autoplay,
} from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";

interface ServiceItem {

  title: string;
  price: string;
  imageUrl: string;
  link: string;


}

interface ServiceCarouselProps {
  services: ServiceItem[];
}

const Carousel: React.FC<ServiceCarouselProps> = ({ services }) => {
  const swiperRef = useRef<any>(null);

  if (!Array.isArray(services) || services.length === 0) {
    return <div className="text-center p-4">No classes available.</div>;
  }

  return (
    <section className="bg-white p-6">
      <div className="container mx-auto relative w-full">
        <Swiper
          ref={swiperRef}
          modules={[Autoplay, Navigation, Pagination, Scrollbar, A11y]}
          centeredSlides={true}
          autoplay={{
            delay: 5500,
            disableOnInteraction: false,
          }}
          spaceBetween={20}
          loop={true}
          pagination={{ clickable: true }}
          breakpoints={{
            380: {                                                                                                                
              slidesPerView: 1,
              spaceBetween: 10,
            },
            640: {
              slidesPerView: 2,
              spaceBetween: 20,
            },
            768: {
              slidesPerView: 3,
              spaceBetween: 30,
            },
            1024: {
              slidesPerView: 4,
              spaceBetween: 30,
            },
            1280: {
              slidesPerView: 4,
              spaceBetween: 30,
            },
          }}
          className="mySwiper"
        >
          {services.map((classItem, index) => (
            <SwiperSlide key={index}>
              <div className="bg-white rounded-lg shadow-lg overflow-hidden transition-transform transform hover:scale-105 cursor-pointer">
                <img
                  alt={classItem.title}
                  className="w-full h-64 object-cover"
                  src={classItem.imageUrl || "https://placehold.co/300x400"}
                />
                <div className="p-4 text-center">
                  <h2 className="text-xl font-bold">{classItem.title}</h2>
                  <p className="text-green-500 font-bold">{classItem.price}</p>
                  <div className="mt-4">
                    <button className="text-orange-500">
                      <i className="fas fa-share-alt"></i>
                    </button>
                  </div>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
        <div className="flex justify-end text-3xl space-x-5 mt-4 text-green-600">
          <div
            className="cursor-pointer hover:transform hover:scale-150"
            onClick={() => swiperRef.current.swiper.slidePrev()}
          >
            ‹
          </div>
          <div
            className="cursor-pointer hover:transform hover:scale-150"
            onClick={() => swiperRef.current.swiper.slideNext()}
          >
            ›
          </div>
        </div>
      </div>
    </section>
  );
};

export default Carousel;