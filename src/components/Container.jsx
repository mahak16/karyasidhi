import { useEffect, useRef, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { Pagination, Navigation, Autoplay } from "swiper/modules";
import { FiArrowRight } from "react-icons/fi";
import { FaArrowRight, FaArrowLeft } from "react-icons/fa";
import img1 from "../assets/img1.jpg";
import img2 from "../assets/img2.jpg";
import img3 from "../assets/img3.jpg";
import img4 from "../assets/img4.jpg";
import Button from "./Button.jsx";
import testimonialPattern from '../assets/testimonialPattern.png'

const services = [
  {
    img: img1,
    title: "Coworking Seat",
    desc: "Shared workspaces offering flexibility and collaboration.",
    price: "₹4,499/m",
    link: "/service-details/coworking-seat",
  },
  {
    img: img2,
    title: "Private Cabin",
    desc: "Exclusive, quiet spaces for focused and private work.",
    price: "₹13,499/m",
    link: "/service-details/private-cabin",
  },
  {
    img: img3,
    title: "Meeting Room",
    desc: "Professional meeting rooms available by hour.",
    price: "₹999/hour",
    link: "/service-details/meeting-room",
  },
  {
    img: img3,
    title: "One Day Pass",
    desc: "Flexible access to our workspace for a day.",
    price: "₹349/day",
    link: "/service-details/one-day-pass",
  },
  {
    img: img4,
    title: "Weekly Pass",
    desc: "Enjoy a full week of workspace access.",
    price: "₹1,499/week",
    link: "/service-details/weekly-pass",
  },
];

const Container = () => {
  const [screenSize, setScreenSize] = useState(window.innerWidth);
  const prevRef = useRef(null);
  const nextRef = useRef(null);

  useEffect(() => {
    const handleResize = () => setScreenSize(window.innerWidth);
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const isDesktop = screenSize >= 768;
  const isMobile = screenSize < 535;

  return (
    <section className="bg-[#fbf0ee] pb-[120px] pt-[65px] relative ">
      <h3 className="text-center z-1 relative  text-[28px] sm:text-[36px] lg:text-[44px] font-bold text-[#3f3836] tracking-[-1.5px] pb-[20px] px-4">
        Our Range of Services
      </h3>

      <div className="relative w-full max-w-[1195px] px-4 sm:px-[15px] mx-auto">
        {isDesktop ? (
          <>
            {/* Swiper Arrows */}
            <div
              ref={prevRef}
              className="swiper-prev absolute top-1/2 -translate-y-1/2 -left-[45px] z-20 flex items-center justify-center border-2 border-[#817a78] rounded-full h-[33px] w-[33px] cursor-pointer "
            >
              <FaArrowLeft className="text-[#817a78] text-[14px]" />
            </div>

            <div
              ref={nextRef}
              className="swiper-next absolute top-1/2 -translate-y-1/2 -right-[45px] z-20 flex items-center justify-center border-2 border-[#817a78] rounded-full h-[33px] w-[33px] cursor-pointer "
            >
              <FaArrowRight className="text-[#817a78] text-[14px]" />
            </div>

            {/* Swiper Section */}
            <Swiper
              modules={[Pagination, Navigation, Autoplay]}
              autoplay={{ delay: 3000 }}
              loop={true}
              spaceBetween={30}
              slidesPerView={2}
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
              breakpoints={{
                768: {
                  slidesPerView: 1,
                  spaceBetween: 20,
                  centeredSlides: true,
                },
                991: {
                  slidesPerView: 2,
                },
              }}
            >
              {services.map((service, index) => (
                <SwiperSlide key={index}>
                  <ServiceCard service={service} view="desktop" />
                </SwiperSlide>
              ))}
            </Swiper>
          </>
        ) : (
          // Stacked View for <768px
          <div className="flex flex-col gap-6 mt-8">
            {services.map((service, index) => (
              <ServiceCard
                key={index}
                service={service}
                view={isMobile ? "mobile" : "tablet"}
              />
            ))}
          </div>
        )}
      </div>
      <div className="absolute md:hidden  top-0 left-0  z-0">
        <img
          src={testimonialPattern}
          alt="Background"
          className=" object-cover w-full"
        />
      </div>
    </section>
  );
};

 const ServiceCard = ({ service, view }) => {
  const isMobile = view === "mobile";
  const isTablet = view === "tablet";
  const isDesktop = view === "desktop";

  return (
    <div
      onClick={() => (window.location.href = service.link)}
      className={`relative bg-white border border-[#f7eae8] transition-all duration-300 ease-out cursor-pointer z-1 ${
        isMobile
          ? "flex flex-col items-start p-[20px] "
          : isTablet
          ? "flex items-center  pr-[55px] pt-[43px] pb-[37px] pl-[280px] mt-[50px]"
          : "px-[55px] pt-[43px] pb-[37px] pl-[280px] mt-[30px] flex items-center lg:mx-0 md:mx-30 !h-[317px] "
      }`}
      style={isDesktop ? { width: "100%", maxWidth: "570px" } : {}}
    >
      <img
        src={service.img}
        alt={service.title}
        className={` ${
          isMobile
            ? "w-full h-auto mb-4"
            : isTablet
            ? " object-cover absolute bottom-[20px] left-[20px] "
            : "absolute bottom-[20px] left-[20px] w-[100px] sm:w-auto sm:h-full "
        }`}
      />

      <div className={`${isTablet ? "flex-1" : ""}`}>
        <h3 className="text-[24px] font-bold text-[#3f3836] tracking-[-1.5px]">
          {service.title}
        </h3>
        <p className="text-[16px] sm:text-[16px] font-medium pt-[5px] pb-[18px] leading-[32px] sm:leading-[34px] text-[#74706f] tracking-[-.3px]">
          {service.desc}
        </p>
        <div className="flex justify-between items-center w-full pb-[22px]">
          <span className="inline-block text-sm sm:text-base font-semibold">
            Starts from
          </span>
          <p className="text-[24px] sm:text-xl md:font-medium leading-[34px] text-[#ff4231] tracking-[-.3px]">
            {service.price}
          </p>
        </div>
        <div className="w-full flex md:justify-start">
          <Button
            item={
              <span className="flex items-center justify-center gap-2">
                More <FiArrowRight className="text-white text-l" />
              </span>
            }
            className="text-white"
            buttonClass=" leading-[36px] border-l-2 border-[#3f3836]"
          />
        </div>
        
      </div>
      
    </div>
  );
};
export { ServiceCard }
export default Container;
