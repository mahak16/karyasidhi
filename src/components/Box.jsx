import React, { useState } from 'react';
import quoteicon from '../assets/quoteicon.png';

function Box({ image, title, desc, name }) {
  const [isExpanded, setIsExpanded] = useState(false);

  const toggleReadMore = () => {
    setIsExpanded(!isExpanded);
  };

  const maxLength = 100; // Customize as needed
  const isLong = desc.length > maxLength;
  const shortDesc = desc.slice(0, maxLength);

  return (
    <div className='bg-white relative w-full max-w-[400px] mx-auto h-auto sm:px-4 hover:text-[#ef2917] transition-colors duration-300'>
      <div className='bg-white border-[1px] border-white relative text-center'>
        <p className='text-[16px] font-[500] pt-[50px] pb-[25px] sm:px-[30px] md:px-[40] lg:px-[60] px-[20px] mr-[10px]  leading-[30px] text-[#74706f]'>
          {isExpanded || !isLong ? desc : `${shortDesc}... `}
          {isLong && (
            <button
              className='inline-block text-[#ef2917] font-[400]  ml-1'
              onClick={toggleReadMore}
            >
              {isExpanded ? 'Show Less' : 'Read More'}
            </button>
          )}
        </p>
      </div>

      <div className='flex justify-center gap-4 items-center pb-[50px] pt-0 '>
        <img src={image} alt="" className='rounded-full w-[50px] h-[50px] object-cover block' />
        <div className='flex flex-col items-start'>
          <h3 className='font-bold text-[20px] text-[#3f3836] tracking-[-1.5px] pt-5'>{name}</h3>
          <span className='text-[#ef2917] block font-semibold pb-[24px] text-[13px]'>{title}</span>
        </div>
      </div>

      <div className='absolute top-0 left-5'>
        <img src={quoteicon} alt="quote icon" className='w-[43px] h-[39px]' />
      </div>
    </div>
  );
}

export default Box;
