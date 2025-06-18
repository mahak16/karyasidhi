import React, { useState,useEffect } from 'react'
import testimonialPattern from '../assets/testimonialPattern.png'
import  Box  from './Box.jsx'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Autoplay } from 'swiper/modules'
import 'swiper/css'
import { FaSortDown } from 'react-icons/fa'
import { FetchId } from '../utilites/FetchId.jsx'
function Reviews() {
  
  const [review,setReview] = useState([]);
  useEffect(() => {
        FetchId().then((id) => {
          fetch(
            `https://api.multiwebbuilder.technolitics.com/api/v1/multi-tenant-web-builder/website/testimonial/get-all-testimonials/${id}`
          )
            .then((response) => response.json())
            .then((data) => {
            setReview(data.data);
          });
        });
    });
  return (

    <div className='bg-[#fbefed] pt-[120px] pb-[117px] relative z-10   w-full '>
        <img
            src={testimonialPattern}
                alt="Background"
                className="absolute top-0 left-0 object-cover"
              />
        <FaSortDown className='text-6xl  absolute -top-10 text-[#ff4231] translate-x-[50%] right-[50%]' />
         <div className="relative w-full max-w-[1195px] px-4 sm:px-[15px] mx-auto">
            <Swiper
        slidesPerView={3}
        spaceBetween={30}
        loop={true}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        modules={[Autoplay]}
        navigation={false}
        pagination={false}
         breakpoints={{
            0: {
              slidesPerView: 1,
            },
            640: {
              slidesPerView: 1,
            },
            768: {
              slidesPerView: 2,
            },
            1024: {
              slidesPerView: 3,
            },
          }}
      >
        {
          review.map((review,index)=>(

        <SwiperSlide key={index}>
          <Box
          image={`https://technolitics-s3-bucket.s3.ap-south-1.amazonaws.com/multitenantwebbuilder-s3-bucket/${
                    review.image
                  }`}
          name={review.name}
          desc={review.review}
          title={review.companyProfile}
          />
        </SwiperSlide>
          ))}
        
      </Swiper>
        </div>
    </div>
  )
}

export default Reviews