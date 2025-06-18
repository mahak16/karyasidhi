import React, { useEffect, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Autoplay } from "swiper/modules";
import { IoMdClose } from "react-icons/io";
import "swiper/css";
import "swiper/css/navigation";
import { FetchId } from "../utilites/FetchId";

const PopupBanner = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [post, setPost] = useState([]);

  useEffect(() => {
    // Check localStorage to see if banner has been shown
    const hasSeenPopup = sessionStorage.getItem("hasSeenPopupBanner");

    if (!hasSeenPopup) {
      setIsOpen(true); // Show popup
      sessionStorage.setItem("hasSeenPopupBanner", "true"); // Set flag
    }

    // Fetch the banner data
    FetchId().then((id) => {
      fetch(
        `https://api.multiwebbuilder.technolitics.com/api/v1/multi-tenant-web-builder/website/banner/get-all-banners/${id}?type=POPUP_BANNER`
      )
        .then((response) => response.json())
        .then((data) => setPost(data.data || []));
    });
  }, []);

  if (!isOpen || post.length === 0) return null;

  return (
   <div
  onClick={() => setIsOpen(false)}
  className="fixed inset-0 z-[9999] flex items-center justify-center bg-black/70 backdrop-sm p-10 md:p-4"
>
  <div className="relative w-full max-w-[560px] max-h-[90vh] flex flex-col items-end">
    
    {/* Close Button Above Modal */}
    <button
      onClick={() => setIsOpen(false)}
      className="-mr-8 bg-white text-black  md:p-3 p-2 z-50 hover:rotate-90 transition duration-300"
    >
      <IoMdClose className="text-xl font-bold" />
    </button>

    {/* Modal with Swiper */}
    <div
      onClick={(e) => e.stopPropagation()}
      className="relative w-full bg-white  overflow-hidden"
    >
      <Swiper
        modules={[Navigation, Autoplay]}
        autoplay={{ delay: 3000 }}
        loop={true}
        className="w-full h-full"
      >
        {post.map((item, index) => {
          const src = item?.bannerImage?.webView
            ? `https://technolitics-s3-bucket.s3.ap-south-1.amazonaws.com/multitenantwebbuilder-s3-bucket/${item.bannerImage.webView}`
            : null;
          return (
            src && (
              <SwiperSlide key={index}>
                <img
                  src={src}
                  alt={`popup-banner-${index}`}
                  className="w-full h-full object-contain"
                />
              </SwiperSlide>
            )
          );
        })}
      </Swiper>
    </div>
  </div>
</div>


   
  );
};

export default PopupBanner;
