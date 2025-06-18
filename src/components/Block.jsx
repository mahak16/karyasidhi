// src/components/Card.jsx
import React from "react";

const Block = ({ logo, heading, text }) => {
  return (
    // <div className="sm:px-4 w-full sm:w-1/2 md:w-[270px]">
    //   <div className="bg-white group relative z-10 w-full h-auto sm:h-[354px] mt-[30px] px-6 pt-[35px] pb-[28px] flex flex-col items-start transition-all duration-300">

    //     {/* Image */}
    //     <img
    //       src={logo}
    //       alt={heading}
    //       className="w-[50px] h-[50px] sm:w-[60px] sm:h-[60px] mt-[10px] mb-[15px] max-w-full transform transition-transform duration-300 ease-in-out group-hover:scale-90"
    //     />

    //     {/* Heading */}
    //     <h4 className="text-[18px] sm:text-[22px] leading-[26px] sm:leading-[30px] pt-[5px] pb-[18px] sm:pb-[22px] font-bold text-[#3f3836] group-hover:text-[#ff4332] transition-colors">
    //       {heading}
    //     </h4>

    //     {/* Text */}
    //     <p className="text-sm sm:text-base font-[500] leading-[26px] sm:leading-[34px] text-[#74706f] tracking-[-0.3px] pr-[10px]">
    //       {text}
    //     </p>
    //   </div>
    // </div>
    <div className="flex lg:flex-1/4 lg:max-w-[25%] md:flex-1/2 md:max-w-[50%] max-w-full flex-1 px-4 relative sm:flex-row flex-col ">
    <div className="bg-white border-1 border-[#f7eae8] pt-[35px] pb-[38px] pr-[32px] pl-[48px] mt-[30px]  group relative z-10 w-full h-auto sm:h-[354px]   flex flex-col items-start transition-all duration-300">
      <img
        src={logo}
        alt={heading}
        className="w-[50px] h-[50px] sm:w-[60px] sm:h-[60px] mt-[10px] mb-[15px]  max-w-full transform transition-transform duration-300 ease-in-out group-hover:scale-90"
      />
      <h4 className="text-[22px] leading-[30px] pt-[5px] pb-[22px] font-bold group-hover:text-[#ff4332] transition-colors text-[#3f3836]">{heading}</h4>
      <p className="font-medium pr-[10px] text-[16px] leading-[34px] text-[#74706f]">{text}</p>
    </div>
    </div>
   
  );
};

export default Block;
