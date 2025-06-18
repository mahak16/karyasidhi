import {
  Navigation,
  Pagination,
  Autoplay,
  A11y,
} from "swiper/modules";

import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

import { useState, useEffect } from "react";
import { FetchId } from "../utilites/FetchId";

function Company() {
  const [logos, setLogos] = useState([]);

  useEffect(() => {
    FetchId().then((id) => {
      fetch(
        `https://api.multiwebbuilder.technolitics.com/api/v1/multi-tenant-web-builder/website/association/get-all-associations/${id}`
      )
        .then((response) => response.json())
        .then((data) => {
          setLogos(data.data);
        });
    });
  }, []);

  return (
    <div className="bg-white text-black flex flex-col lg:flex-row items-center sm:items-start  justify-between mx-[10%] py-20 gap-10 lg:gap-0">
      {/* Left Heading */}
      <div className="w-[282px] md:mt-10">
            <h3 className="sm:text-[36px] text-[24px] leading-tight font-bold text-[#484544] sm:text-left text-center">
              Clients we <br /> have worked <br /> with.
            </h3>
          </div>

      {/* Right Logo Swipers */}
      <div className="w-full lg:w-2/3 flex flex-col  sm:gap-8">
        {/* Row 1 - Auto Left Swipe */}
        <Swiper
          className="w-full"
          modules={[Navigation, Pagination, Autoplay, A11y]}
          spaceBetween={30}
          autoplay={{
            delay: 2500,
            disableOnInteraction: false,
            reverseDirection: false,
          }}
          loop={true}
          breakpoints={{
            320: { slidesPerView: 2, spaceBetween: 20 },
            480: { slidesPerView: 3 , spaceBetween: 20},
            768: { slidesPerView: 3 },
            1024: { slidesPerView: 3 },
          }}
        >
          {[...logos, ...logos].map((logo, index) => (
            <SwiperSlide key={`row1-${index}`}>
              <img
                src={`https://technolitics-s3-bucket.s3.ap-south-1.amazonaws.com/multitenantwebbuilder-s3-bucket/${logo.logo}`}
                alt={`Logo ${index}`}
                className="h-16 w-auto mx-auto object-contain"
              />
            </SwiperSlide>
          ))}
        </Swiper>

        {/* Row 2 - Auto Right Swipe */}
        <Swiper
          className="w-full"
          modules={[Navigation, Pagination, Autoplay, A11y]}
          spaceBetween={30}
          autoplay={{
            delay: 2500,
            disableOnInteraction: false,
            reverseDirection: true,
          }}
          loop={true}
          breakpoints={{
            320: { slidesPerView: 2, spaceBetween:20 },
            480: { slidesPerView: 3, spaceBetween:20 },
            768: { slidesPerView: 3 },
            1024: { slidesPerView: 3 },
          }}
        >
          {[...logos, ...logos].map((logo, index) => (
            <SwiperSlide key={`row2-${index}`}>
              <img
                src={`https://technolitics-s3-bucket.s3.ap-south-1.amazonaws.com/multitenantwebbuilder-s3-bucket/${logo.logo}`}
                alt={`Logo ${index}`}
                className="h-16 w-auto mx-auto object-contain"
              />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
}

export default Company;
