import React from 'react';
import space from '../assets/space.jpg';
import Button from './Button';
import we_know1 from '../assets/weKnow1.jpg';
import we_know2 from '../assets/weKnow2.jpg';
import logo_small from '../assets/logo_small.png';
import ball2 from '../assets/ball2.png';
import { FiArrowRight } from "react-icons/fi";
import { motion } from "framer-motion";
import { Link } from 'react-router-dom';

function Productivity() {
  return (
    <div className="relative bg-white overflow-hidden">
      {/* Main Flex Container */}
      <div className="flex flex-col lg:flex-row pt-[111px] pb-[120px] mx-auto sm:px-6 md:px-10 lg:px-12 max-w-[1400px] z-[1]">
        
        {/* LEFT SECTION */}
        <div className="w-full relative z-[2]">
          <h1 className="relative font-bold text-[26px] px-4 sm:text-[44px] text-[#3f3836] tracking-[-1.5px] md:leading-14">
            Coworking where Positivity meets Productivity
          </h1>
          <p className="text-[#736f6e] relative px-4 mr-[-2px] pt-[39px] pb-[50px] text-[16px] font-semibold leading-[34px] tracking-[-0.3px]">
            At Karyasiddhi Co-Working Space, we believe workspaces should inspire. It’s not just about working—it’s about sparking creativity, fostering collaboration, and fueling motivation. Our space blends focus, comfort, and productivity, with moments to relax and recharge through play, celebrations, and events. Here, you can work for hours without discomfort, as we prioritize both comfort and creativity for long-term success.
          </p>
          <img src={space} alt="Space" className="w-full max-w-full max-h-100 pt-15 object-contain px-4" />
        </div>

        {/* RIGHT SECTION */}
        <motion.div
      initial={{ opacity: 0, x: 100 }}
      whileInView={{ opacity: 1, x: 0 }}
      
      transition={{ duration: 0.8, ease: "easeOut" }}
      className="w-full relative flex flex-col gap-1 sm:mt-10 mt-2 lg:mt-0 px-4"
    >
      
        <div className="w-full relative flex flex-col gap-1 sm:mt-10 mt-2 lg:mt-0  ">
          {/* Top Row */}
          <div className="flex flex-col md:flex-row gap-0 sm:gap-2">
            <div className="bg-[#ff4332] text-white w-full p-5 md:w-[50%] sm:pr-[75px] sm:pt-[53px] sm:pb-[60px] sm:pl-[75px] relative z-10">
              <h1 className="text-[24px] leading-[30px] pr-[15px] pb-[18px] font-bold">
                Where positivity meets productivity.
              </h1>
              <Link to = '/bookseat'>
              <Button
                item={<span className="flex items-center gap-2">More <FiArrowRight className="text-white text-xl" /></span>}
                className="text-white"
                buttonClass="bg-[#3F3836] border-l-2 border-white px-4 py-2 border-[#3f3836] bg-gray-800 hover:text-[#3F3836]"
                curtainColor="white"
              />
              </Link>
            </div>
            <div className="w-full md:w-[50%] mr-2">
              <img src={we_know1} alt="Work Event" className="w-full h-full object-cover" />
            </div>
          </div>

          {/* Center Logo */}
          <div className="relative flex justify-center items-center h-0">
            <img
              src={logo_small}
              alt="Small Logo"
              className="absolute w-[100px] h-[90px] bg-white top-[-10px] lg:top-[50%] translate-y-[-50%] left-1/2 translate-x-[-50%] z-20 object-contain p-2"
            />
          </div>

          {/* Bottom Row */}
          <div className="flex flex-col md:flex-row gap-0 sm:gap-2">
            <div className="w-full md:w-[50%]">
              <img src={we_know2} alt="Play Area" className="w-full h-full object-cover" />
            </div>
            <div className="bg-[#3f3836] text-white w-full md:w-[50%] p-5 sm:pr-[75px] sm:pt-[53px] sm:pb-[60px] sm:pl-[75px] relative z-10 mr-[5px]">
              <h1 className="text-[24px] leading-[30px] pr-[15px] pb-[18px] font-bold">
                A happy space to work, play, and collaborate.
              </h1>
              <Link to = '/bookseat'>
              <Button
                item={<span className="flex items-center gap-2">More <FiArrowRight className="text-white text-xl" /></span>}
                className="text-white"
                buttonClass="bg-[#3F3836] border-l-2 border-white px-4 py-2 border-[#3f3836]"
              />
              </Link>
            </div>
          </div>

        </div>
       </motion.div>
      </div>

      {/* Ball Decoration */}
      <div className="absolute top-40 sm:left-6 w-40 z-[0] animate-ball opacity-50 left-[40%] md:opacity-100">
        <img src={ball2} alt="Ball Decoration" className="sm:w-full sm:h-auto " />
      </div>
    </div>
  );
}

export default Productivity;