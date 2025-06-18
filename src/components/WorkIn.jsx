import React from "react";
import Work from "../assets/Work.jpg";
import { FaPlay } from "react-icons/fa";
import Button from "./Button";
import { useState,useEffect } from "react";

function WorkIn() {
  const [isOpen, setIsOpen] = useState(false);
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'auto';
    }
    return () => (document.body.style.overflow = 'auto');
  }, [isOpen]);
  return (
    <section
      className="relative bg-center bg-cover bg-no-repeat w-full h-full pt-[107px] pb-[116px]"
      style={{
        backgroundImage: `url(${Work})`,
        backgroundAttachment: 'fixed',
      }}
    >
      {/* Overlay */}
      <div className="absolute inset-0 bg-[#3f3836b3] z-0" />

      <div className="relative z-10 px-[15px] max-w-[1200px] mx-auto flex flex-wrap  items-center">
        {/* Left Column */}
        <div className="w-full lg:w-[58.333333%] px-[15px]">
          <div>
            <h3 className="text-white text-[28px] md:text-[44px] lg:text-[64px] font-bold font-[Montserrat] tracking-[-1.5px] leading-tight m-0">
              Karyasiddhi - A Place You’ll Love to Work In.
            </h3>
          </div>
        </div>

        {/* Right Column */}
        <div className="w-full lg:w-[41.666667%] px-[15px] text-left lg:text-right mt-8 lg:mt-0">
          <Button
              
              buttonClass="inline-bloc w-[122px] h-[116px] leading-[116px] text-[20px] text-white bg-[#ff4332] border-l-2 border-white  font-semibold text-center no-underline cursor-pointer hover:text-red-500"
              className=" flex  justify-center"
              item={<FaPlay className="text-xl" />}
              curtainColor="white"
              onClick={() => setIsOpen(true)}
            />
            {isOpen && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/70 backdrop-md"
          role="dialog"
          aria-modal="true"
          onClick={() => setIsOpen(false)}
        >
          <div className="relative w-[90%] max-w-3xl bg-[#212121]  overflow-hidden ">
            {/* Close Button */}
            <button
              className="absolute top-0 right-2 text-white text-3xl font-bold z-10"
              onClick={() => setIsOpen(false)}
              aria-label="Close video"
            >
              &times;
            </button>

            {/* YouTube Embed */}
            <div className="w-full aspect-video">
              <iframe
                className="w-full h-full"
                src="https://www.youtube.com/embed/cii6ruuycQA?si=lQ3Y_wsBj3ARJuFh" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin"
                
               
                
                allowFullScreen
              ></iframe>
            </div>
          </div>
        </div>
      )}
        </div>
      </div>
    </section>
  );
}

export default WorkIn;
