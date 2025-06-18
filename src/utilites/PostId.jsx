import React, { useState, useEffect, useRef } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Navigation, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { motion } from "framer-motion";
import logo_small from "../assets/logo_small.png";
import Button from "../components/Button";
import { GoArrowLeft, GoArrowRight } from "react-icons/go";
import { FetchId } from "./FetchId";
import { Link } from "react-router-dom";

function PostId() {
  const [post, setPost] = useState([]);
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);
  const prevRef = useRef(null);
  const nextRef = useRef(null);
  const [swiperReady, setSwiperReady] = useState(false);

  useEffect(() => {
    FetchId().then((id) => {
      fetch(
        `https://api.multiwebbuilder.technolitics.com/api/v1/multi-tenant-web-builder/website/banner/get-all-banners/${id}?type=HOME_BANNER`
      )
        .then((response) => response.json())
        .then((data) => setPost(data.data));
    });

    const handleResize = () => setWindowWidth(window.innerWidth);
    window.addEventListener("resize", handleResize);

    const timer = setTimeout(() => setSwiperReady(true), 100);

    return () => {
      window.removeEventListener("resize", handleResize);
      clearTimeout(timer);
    };
  }, []);

  const isMobile = windowWidth < 768;

  return (
    <div className="w-full sm:h-[810px] h-[80vh] relative z-0 overflow-hidden">
      {swiperReady && (
        <Swiper
          modules={[Pagination, Navigation, Autoplay]}
          autoplay={{ delay: 5000 }}
          loop={true}
          navigation={{
            prevEl: prevRef.current,
            nextEl: nextRef.current,
          }}
          onInit={(swiper) => {
            swiper.params.navigation.prevEl = prevRef.current;
            swiper.params.navigation.nextEl = nextRef.current;
            swiper.navigation.init();
            swiper.navigation.update();
          }}
          className="w-full h-full"
        >
          {post.map((item) => (
            <SwiperSlide key={item._id} className="w-full">
              <div className="relative w-full h-full ">
                <img
                  src={`https://technolitics-s3-bucket.s3.ap-south-1.amazonaws.com/multitenantwebbuilder-s3-bucket/${
                    isMobile
                      ? item.bannerImage.mobileView
                      : item.bannerImage.webView
                  }`}
                  alt="Carousel"
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 flex flex-col justify-center left-[12%] text-white">
                  <div className="flex items-start max-w-[90%] md:max-w-[670px]">
                    <div className="left-0 w-2 h-[78%] bg-red-500"></div>
                    <motion.div
                      initial={{ x: -20, opacity: 0 }}
                      whileInView={{ x: 0, opacity: 1 }}
                      transition={{ duration: 1 }}
                    >
                      <motion.p
                        initial={{ opacity: 0, y: -20 }}
                        whileInView={{ y: 0, opacity: 1 }}
                        transition={{ duration: 1, delay: 0.5 }}
                        className="text-xl text-white font-semibold mb-4 flex items-center capitalize pl-5 "
                      >
                        <img
                          src={logo_small}
                          className="w-13 h-9 mr-3"
                          alt="karyasiddhi"
                        />
                        Karyasidhi
                      </motion.p>
                      <h3 className="text-[36px] sm:text-[48px] md:text-[64px] lg:text-[90px]  font-bold text-white capitalize -tracking-[2px] pt-3 pb-10 pl-[30px]  leading-[110%]">
                        {item.title}
                      </h3>
                      <Link to = '/bookseat'>
                      <Button
                        item="book a seat"
                        buttonClass=" py-5 border-l-2 border-white hover:text-[#ff4332] bg-[#ff4332] md:mt-0 mt-10 hidden sm:block"
                        curtainColor="white"
                      />
                      </Link>
                    </motion.div>
                  </div>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      )}

      {/* Navigation Buttons */}
      <div
        ref={prevRef}
        className="absolute bottom-0 md:left-0 lg:left-[11%] xl:left-[12%] z-10 h-[80px] w-[95px] bg-white md:flex items-center justify-center hover:bg-[#fff8f7] hover:text-[#ff4231] leading-[80px]  pointer font-[18px] hidden"
      >
        <GoArrowLeft className="text-center" />
      </div>
      <div
        ref={nextRef}
        className="absolute bottom-0 md:left-[95px]  lg:left-[17%] z-10 h-[80px] w-[95px] bg-white md:flex items-center justify-center hover:bg-[#fff8f7] hover:text-[#ff4231] leading-[80px]  pointer font-[18px] hidden"
      >
        <GoArrowRight className="text-center" />
      </div>
    </div>
  );
}

export default PostId;
