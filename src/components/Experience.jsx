// import React from "react";
// import { useEffect, useState } from "react";
// import { FetchId } from "../utilites/FetchId";
// import Button from './Button'
// import { Swiper, SwiperSlide } from "swiper/react";
// import { Navigation, Pagination } from "swiper/modules";
// import "swiper/css";
// import "swiper/css/navigation";
// import "swiper/css/pagination";



// function Experience() {
//   const [gallery, setGallery] = useState([]);

//   useEffect(() => {
//     FetchId().then((id) => {
//       fetch(
//         `https://api.multiwebbuilder.technolitics.com/api/v1/multi-tenant-web-builder/website/gallery/get-all-galleries/${id}`
//       )
//         .then((response) => response.json())
//         .then((data) => {
//           setGallery(data.data);
//         });
//     });
//   }, []);

//   return (
//      <div className="bg-[#3f3836] text-white w-full  flex flex-col">
//         <h3 className="font-bold text-[44px] tracking-[-1.5px] flex  justify-center items-center h-80">
//           The Karyasiddhi Experience
//         </h3>
//         <div className=" border-white h-full  p-0 w-full mx-auto flex flex-col md:flex-row ">
//           {gallery.map((banner) => (
//             <div key={banner.id} className="relative border-3 overflow-hidden group">
//                 <img
//                   src={`https://technolitics-s3-bucket.s3.ap-south-1.amazonaws.com/multitenantwebbuilder-s3-bucket/${banner.mediaDetails.images[0]}`  }
//                   alt=""
//                   className="w-[439px] object-cover h-[375px] "
//                 />
//                 <div className="absolute inset-0 bg-black/30 scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-center z-10"></div>
//                 <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-500 z-20">
//               <Button className="font-[500px] text-[14px] " curtainColor="white"  item ={banner.title} buttonClass="w-auto h-[116px] px-10 pointer border-l-2 border-white hover:text-red-500"/>
//             </div>
//             </div>
//           ))}
//       </div>
//     </div>
//   );
// }

// export default Experience;
import React, { useEffect, useState } from "react";
import { FetchId } from "../utilites/FetchId";
import Button from "./Button";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay, FreeMode } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { Link } from "react-router-dom";

function Experience() {
  const [gallery, setGallery] = useState([]);
  const [isLargeScreen, setIsLargeScreen] = useState(window.innerWidth >= 1200);

  useEffect(() => {
    // Fetch gallery data
    FetchId().then((id) => {
      fetch(
        `https://api.multiwebbuilder.technolitics.com/api/v1/multi-tenant-web-builder/website/gallery/get-all-galleries/${id}`
      )
        .then((response) => response.json())
        .then((data) => {
          setGallery(data.data);
        })
        .catch((error) => {
          console.error("Error fetching gallery:", error);
        });
    });

    // Handle window resize
    const handleResize = () => {
      setIsLargeScreen(window.innerWidth >= 1200);
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <div className="bg-[#3f3836] text-white  flex flex-col w-full relative z-2">
      <h3 className="font-bold text-[30px] px-5 md:text-[44px]  tracking-[-1.5px] flex justify-center items-center h-80 text-center">
        The Karyasiddhi Experience
      </h3>

      <div className="border-white h-full p-0 w-full mx-auto flex flex-col md:flex-row">
        {isLargeScreen ? (
          // Static grid for screens >= 1200px (4 images, 25% width each)
          <div className="flex w-full">
            {gallery.slice(0, 4).map((banner) => (
              <div
                key={banner.id}
                className="relative border-3 overflow-hidden group"
                style={{ width: "25%" }}
              >
                <img
                  src={`https://technolitics-s3-bucket.s3.ap-south-1.amazonaws.com/multitenantwebbuilder-s3-bucket/${banner.mediaDetails.images[0]}`}
                  alt={banner.title || "Gallery image"}
                  className="w-full h-[375px] object-cover"
                  onError={(e) => {
                    console.error("Image failed to load:", e.target.src);
                    e.target.src = "https://via.placeholder.com/439x375?text=Image+Not+Found";
                  }}
                />
                <div className="absolute inset-0 bg-black/30 scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-center z-10"></div>
                <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-500 z-20">
                  <Link to={`/gallery/${encodeURIComponent(banner.title)}`}>
  <Button
    className="font-[500px] text-[14px]"
    curtainColor="white"
    item={banner.title}
    buttonClass="w-auto h-[116px] px-10 pointer border-l-2 border-white hover:text-red-500"
  />
</Link>
                </div>
              </div>
            ))}
          </div>
        ) : (
          // Swiper for screens < 1200px
          <Swiper
            modules={[Navigation, Pagination, Autoplay, FreeMode]}
            freeMode={true}
            speed={600}
            loop={true}
            allowSlidePrev={false}
            autoplay={{
              delay: 2500,
              disableOnInteraction: false,
            }}
             // Small gap for better visibility
            slidesPerView={1} // Default to 1 slide for small screens
            breakpoints={{
              535: {
                slidesPerView: 1,
              },
              767:{
                slidesPerView:2,
              },
              768: {
                slidesPerView: 3,
                
              },
              1024: {
                slidesPerView: 3,
                
              },
            }}
            style={{ width: "100%" }} // Ensure Swiper takes full width
          >
            {gallery.map((banner) => (
              <SwiperSlide key={banner.id} style={{ height: "auto" }}>
                <div className="relative border-3 overflow-hidden group w-full">
                  <img
                    src={`https://technolitics-s3-bucket.s3.ap-south-1.amazonaws.com/multitenantwebbuilder-s3-bucket/${banner.mediaDetails.images[0]}`}
                    alt={banner.title || "Gallery image"}
                    className="w-full h-[375px] object-cover"
                    onError={(e) => {
                      console.error("Image failed to load:", e.target.src);
                      e.target.src = "https://via.placeholder.com/439x375?text=Image+Not+Found";
                    }}
                  />
                  <div className="absolute inset-0 bg-black/30 scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-center z-10"></div>
                  <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-500 z-20">
                    <Button
                      className="font-[500px] text-[14px]"
                      curtainColor="white"
                      item={banner.title}
                      buttonClass="w-auto h-[116px] px-10 pointer border-l-2 border-white hover:text-red-500"
                    />
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        )}
      </div>
    </div>
  );
}

export default Experience;