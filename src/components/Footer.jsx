import React from "react";
import footerPattern from "../assets/footerPattern.png";
import footerLogo from "../assets/footerLogo.png";
import {
  FaFacebookF,
  FaInstagram,
  FaLinkedinIn,
  FaTwitter,
} from "react-icons/fa";
import logof from "../assets/logof.png";

function Footer() {
  return (
    <div className="relative z-10 w-full pt-[88px] overflow-hidden bg-[#3f3836]">
      {/* Background Image */}
      <img
        src={footerPattern}
        alt="Background"
        className="absolute top-0 left-0 object-cover  w-auto h-auto"
      />

      {/* Overlay Logo */}
      <img
        src={footerLogo}
        alt="Overlay Logo"
        className="absolute bottom-0 left-1/2 transform -translate-x-1/2 md:w-1/4 h-auto pointer-events-none z-0 "
      />

      {/* Main Content */}
      <div className="relative z-10 px-5 lg:px-20 flex flex-col lg:flex-row lg:justify-between gap-10 md:m-10">
        {/* Brand Section */}
        <div className="w-full lg:w-1/3 md:-mt-8">
          <img
            className="w-[250px] h-auto -ml-[25px]"
            src={logof}
            alt="Footer Logo"
          />
          <p
            href=""
            className="text-[#cac6c4] text-[15px] font-semibold leading-[30px] pr-[35px] pt-[40px] pb-[33px] tracking-[-0.3px]"
          >
            Karyasiddhi is a dynamic co-working space that fosters productivity,
            creativity, and relaxation—where inspiration and focus come together
            for your success.
          </p>
          {/* <a href="" className="text-[#ff4332] text-[15px] font-semibold leading-7">
            hello@karyasiddhico.work <br />
            +91 9669231006
          </a> */}
          <ul className="text-[#ff4332] text-[15px] font-semibold leading-7">
            <li>
              <a href="mailto:hello@karyasiddhico.work">
                hello@karyasiddhico.work
              </a>
            </li>
            <li>
              <a href="tel:9669231006">+91 9669231006</a>
            </li>
          </ul>
        </div>

        {/* Links Sections */}
        <div className="w-full lg:w-2/3 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
          {/* Important Links */}
          <div className="text-[#cac6c4]">
            <h1 className="text-white text-[18px] font-bold pb-[31px]">
              Important Links
            </h1>
            {[
              "Home",
              "Locations",
              "Gallery",
              "Blogs",
              "Career",
              "Contact us",
            ].map((text) => (
              <a
                key={text}
                href="#"
                className="block hover:text-[#ff4332] transition-colors duration-500 text-[16px] font-semibold leading-[36px]"
              >
                {text}
              </a>
            ))}
          </div>

          {/* Services */}
          <div className="text-[#cac6c4]">
            <h1 className="text-white text-[18px] font-bold pb-[31px]">
              Our Services
            </h1>
            {[
              "Coworking Seat",
              "Private office (Cabin)",
              "Meeting Room (Per Hour)",
              "One Day Pass",
              "Weekly Pass",
            ].map((text) => (
              <a
                key={text}
                href="#"
                className="block hover:text-[#ff4332] transition-colors duration-500 text-[16px] font-semibold leading-[36px]"
              >
                {text}
              </a>
            ))}
          </div>

          {/* Policies */}
          <div className="text-[#cac6c4]">
            <h1 className="text-white text-[18px] font-bold pb-[31px]">
              Our Policies
            </h1>
            {[
              "Privacy policy",
              "Terms & Condition",
              "Return & refund policy",
            ].map((text) => (
              <a
                key={text}
                href="#"
                className="block hover:text-[#ff4332] transition-colors duration-500 text-[16px] font-semibold leading-[36px]"
              >
                {text}
              </a>
            ))}
          </div>
        </div>
      </div>

      {/* Divider */}
      <div className="mt-[95px] py-[34px] px-5 lg:px-20 ">
        <hr className="border-t border-white/10 mb-10 z-1 relative" />

        {/* Bottom Bar */}
        <div className="flex flex-col md:flex-row justify-between items-center gap-4 text-center pb-25 sm:pb-0">
          <p className="text-[#cac6c4] text-[15px] font-semibold tracking-[-0.3px] z-1">
            copyright © 2025 by{" "}
            <a
              href="/"
              className="text-white hover:text-[#ff4332] transition-colors duration-500"
            >
              Karyasiddhi
            </a>
          </p>

          {/* <div className="flex gap-4 text-white z-1">
            <FaFacebookF className="bg-black/30 hover:bg-[#ff4332] w-10 h-10 p-2.5 rounded-full cursor-pointer" />
            <FaTwitter className="bg-black/30 hover:bg-[#ff4332] w-10 h-10 p-2.5 rounded-full cursor-pointer" />
            <FaInstagram className="bg-black/30 hover:bg-[#ff4332] w-10 h-10 p-2.5 rounded-full cursor-pointer" />
            <FaLinkedinIn className="bg-black/30 hover:bg-[#ff4332] w-10 h-10 p-2.5 rounded-full cursor-pointer" />
          </div> */}
          <ul className="flex gap-4 text-white z-1">
            <li>
              <a href="https://www.facebook.com/" aria-label="Visit our Facebook page">
                <FaFacebookF className="bg-black/30 hover:bg-[#ff4332] w-10 h-10 p-2.5 rounded-full cursor-pointer" />
              </a>
            </li>
            <li>
              <a href="https://x.com/" aria-label="Visit our Twitter page">
                <FaTwitter className="bg-black/30 hover:bg-[#ff4332] w-10 h-10 p-2.5 rounded-full cursor-pointer" />
              </a>
            </li>
            <li>
              <a href="https://www.instagram.com/" aria-label="Visit our Instagram page">
                <FaInstagram className="bg-black/30 hover:bg-[#ff4332] w-10 h-10 p-2.5 rounded-full cursor-pointer" />
              </a>
            </li>

            <li>
              <a href="https://www.linkedin.com/" aria-label="Visit our Linkedin page">
               <FaLinkedinIn className="bg-black/30 hover:bg-[#ff4332] w-10 h-10 p-2.5 rounded-full cursor-pointer" />
              </a>
            </li>
          </ul>

          <p className="text-[#cac6c4] text-[15px] font-semibold tracking-[-0.3px] z-1">
            Powered By{" "}
            <a
              href="https://www.technolitics.com/"
              className="text-white hover:text-[#ff4332]"
            >
              Technolitics
            </a>
          </p>
        </div>
      </div>
    </div>
  );
}

export default Footer;
