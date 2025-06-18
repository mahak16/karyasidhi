import React from "react";
import Faq from "../assets/faq.jpg";
import pattern from "../assets/pattern.png";
import Ball from "../assets/Ball.png";
import Acco from "./Acco"; // your updated accordion component
import "./BallAnimation.css";

function Faqs() {
  return (
    <div className="font-montserrat relative mb-[120px] px-4">
      <img
            src={pattern}
            alt="pattern"
            className="absolute top-0 right-0 -z-1 sm:w-[50%] h-auto object-cover pointer-events-none "
          />
      <div className="bg-white flex lg:flex-row flex-col md:mx-20 lg:mx-0  relative">
        {/* Image Section */}
        <div className="flex-1/2 max-w-[1/2] w-full   flex relative lg:-mr-[100px] lg:mb-[100px] lg:-mt-[100px]">
          <img src={Faq} alt="faq" className="object-cover w-full" />
        </div>

        {/* FAQ Section */}
        <div className="flex-1/2 max-w-[1/2] h-[840px] w-full pl-7 pb-4 pt-4 pr-7 md:pr-[100px] md:pl-[100px] md:pt-[91px] md:pb-[100px] overflow-hidden bg-[#ff4230] relative z-10">
          <div className="flex flex-col items-start text-white bg-[#ff4230] w-full  relative">
            <h1 className="md:text-[44px] text-[30px] font-bold tracking-[-1.5px] pb-2  leading-1.2 border-b-2 border-[#dadadc] w-full">
              FAQ
            </h1>
            <p className="leading-[34px] text-[20px] md:pb-10 pb-4 pt-2 font-semibold tracking-[-0.3px]">
              Frequently Asked Questions
            </p>
            <div className="w-full">
              <Acco />
            </div>
          </div>

          {/* ✅ Fixed pattern z-index here */}
          
        </div>
      </div>

      {/* Ball Image */}
      <div className="mx-4 md:mx-10  mb-20 md:mt-0   relative">
        <img
          src={Ball}
          alt=""
          className="absolute -top-30  bottom-0  h-40 w-40  animate-ball"
        />
      </div>
    </div>
  );
}

export default Faqs;
