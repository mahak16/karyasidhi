import React from 'react';
import { TiTick } from "react-icons/ti";
import computer1 from '../assets/computer1.png';

function HeroSection() {
  return (
    <div className="bg-white pb-[100px] px-4 lg:px-[11.5%]">
      <div className=" sm:mx-10 md:mx-auto   h-full bg-[#faedeb] ">
        <div className="flex flex-col lg:flex-row gap-6">
          {/* Left Column */}
          <div className="lg:flex-[7/12]  lg:max-w-[58.33%]  pt-[68px] pl-[50px] pr-[50px] lg:pr-[0] xl:pr-[0]  xl:pl-[80px] lg:pl-[60px]  pb-[80px]">
            <h1 className="text-[26px] md:text-[44px] tracking-[-1.5px] leading-[1.2] font-bold text-[#403937] mb-2">
              Karyasiddhi, A Space for Productivity, A Hub for Growth
            </h1>
            <p className="text-[#74706f] pt-[30px] pr-0 lg:pr-[35px] font-semibold leading-[34px] tracking-[-0.7px] text-[15px]">
              At Karyasiddhi, we believe a great workspace is more than just a desk. It's a dynamic, inspiring, and peaceful environment where every detail is thoughtfully designed to foster productivity, creativity, and relaxation. Our coworking space offers the perfect balance of greenery and lightness, creating an atmosphere that helps you stay focused, relaxed, and motivated.
            </p>
          </div>

          {/* Right Column */}
          <div className="lg:flex-1 lg:max-w-[41.666%] mt-0">
            <div className="bg-[#ff4230] mx-auto lg:ml-[50px] relative pb-[28px] pt-[36px] px-[20px] pl-[70px] lg:pl-[55px] flex justify-center items-center flex-col gap-[4px] lg:gap-2 mb-10 w-[90%] lg:w-auto">
  <img
    src={computer1}
    alt=""
    className="absolute left-[16px] md:left-[100px] lg:left-[40px] top-[50%] translate-y-[-50%]  md:w-[100px] lg:w-[50px] h-auto"
  />
  <h2 className="text-white text-[32px] md:text-[44px] leading-[36px] tracking-[-1.5px] font-bold flex justify-center items-center">
    Cowork
  </h2>
  <p className="text-[#fbf0ee] font-[500] text-[16px] md:text-[18px] tracking-[-0.3px] text-center">
    Focus and Succeed
  </p>
  <span className="absolute z-10 bg-white top-[-56px] left-0 md:w-full min-w-[170px] text-center leading-[56px] text-[14px] font-bold text-[#3f3836] italic whitespace-nowrap">
    Coming soon - surat
  </span>
</div>

            {/* Features List */}
            <div className="ml-0 lg:ml-[60px] px-4 pb-4">
              <ul>
                {[
                  "Affordable Flexibility",
                  "Productive and peaceful Env",
                  "At Heart of the City",
                  "Growth Focus community",
                  "Best-in-class Amenities",
                ].map((text, idx) => (
                  <li
                    key={idx}
                    className="font-semibold text-[16px] lg:text-[18px] text-[#3f3836] leading-[40px] tracking-[-0.8px] flex gap-3 items-start mx-2 lg:mx-5 px-3"
                  >
                    <TiTick className="text-[#ff4230] mt-1 text-2xl" />
                    {text}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default HeroSection;
