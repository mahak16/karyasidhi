import React from 'react';
import trustedbg from '../assets/trustedbg.jpg';
import Button from './Button';
import { Link } from "react-router-dom";
function Workspace() {
  return (
    <div
      className="relative w-full md:h-[669px] h-[401px] flex items-center justify-center text-center text-white"
      style={{
        backgroundImage: `url(${trustedbg})`,
        backgroundSize: '100% 100%',
        backgroundPosition: 'center center',
        backgroundAttachment: 'fixed',
        backgroundRepeat: 'no-repeat'
      }}
    >
      {/* Overlay with brightness */}
      <div className="absolute inset-0 bg-[#342d2cb3] opacity-100 z-0"></div>

      {/* Content */}
      <div className="relative z-10 px-4 max-w-[960px]">
        <h1 className="font-extrabold text-[26px] pb-[44px] md:text-[48px] lg:text-[64px]  leading-tight">
          A Workspace designed for Comfort, Built for Focus and Creativity.
        </h1>
        <Link to = '/bookseat'>
        <Button
          item="book a seat"
          buttonClass="mt-5 leading-[68px] px-8 border-l-2 border-white hover:text-[#ff4332] bg-[#ff4332]"
          curtainColor="white"
        />
        </Link>
      </div>
    </div>
  );
}

export default Workspace;
