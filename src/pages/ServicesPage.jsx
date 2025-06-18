// ServicesPage.jsx
import React, { useState, useEffect } from 'react';
import Navbar from '../components/Navbar';
import ExtraSection from '../components/ExtraSection';
import { ServiceCard } from '../components/Container';
import img1 from "../assets/img1.jpg";
import img2 from "../assets/img2.jpg";
import img3 from "../assets/img3.jpg";
import img4 from "../assets/img4.jpg";
import testimonialPattern from '../assets/testimonialPattern.png';
import Footer from "../components/Footer";
import Button from '../components/Button';
import cta_dot from '../assets/cta_dot.png'
import DotBall from "../assets/DotBall.png";
import "../components/BallAnimation.css";
import { Link } from "react-router-dom";

const services = [
  {
    img: img1,
    title: "Coworking Seat",
    desc: "Shared workspaces offering flexibility and collaboration.",
    price: "₹4,499/m",
    link: "/service-details/coworking-seat",
  },
  {
    img: img2,
    title: "Private Cabin",
    desc: "Exclusive, quiet spaces for focused and private work.",
    price: "₹13,499/m",
    link: "/service-details/private-cabin",
  },
  {
    img: img3,
    title: "Meeting Room",
    desc: "Professional meeting rooms available by hour.",
    price: "₹999/hour",
    link: "/service-details/meeting-room",
  },
  {
    img: img3,
    title: "One Day Pass",
    desc: "Flexible access to our workspace for a day.",
    price: "₹349/day",
    link: "/service-details/one-day-pass",
  },
  {
    img: img4,
    title: "Weekly Pass",
    desc: "Enjoy a full week of workspace access.",
    price: "₹1,499/week",
    link: "/service-details/weekly-pass",
  },
];

// Responsive viewType utility
function getViewType() {
  const width = window.innerWidth;
  if (width < 640) return "mobile";
  if (width >= 640 && width < 1024) return "tablet";
  return "desktop";
}

function ServicesPage() {
  const [viewType, setViewType] = useState(getViewType());

  useEffect(() => {
    const handleResize = () => {
      setViewType(getViewType());
    };
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <div className="relative bg-[#fbefed] text-black min-h-screen overflow-hidden">
  <Navbar />
  <ExtraSection
    mode="breadcrumb"
    breadcrumbLinks={[
      { label: "Home", path: "/" },
      { label: "Services", path: "/services" },
    ]}
  />

  {/* Background Pattern on the Right */}
 <section className="relative bg-[#fbefed] text-black pt-[111px] pb-[120px] overflow-hidden">
  {/* Pattern only inside this section */}
  <div className="absolute top-0 left-0 z-0 w-auto opacity-70 h-auto pointer-events-none">
    <img
      src={testimonialPattern}
      alt="Pattern"
      className="object-cover w-full h-full"
    />
  </div>

  {/* Service Cards on top of background */}
  <div className="relative z-10 flex flex-col lg:flex-row lg:flex-wrap gap-6 px-4 sm:px-[15px] max-w-[1195px] mx-auto  ">
    {services.map((service, index) => (
      <div key={index} className="w-full  lg:w-[48%]">
        <ServiceCard service={service} view={viewType} />
      </div>
    ))}
  </div>
</section>
<div className="bg-[#ff4332] pt-[111px] pb-[111px] z-10 relative">
  <div className="xl:max-w-[1200px] z-1 lg:max-w-[1000px] md:max-w-[720px] text-white max-w-[540px] mx-auto px-4 items-center flex flex-col md:flex-row md:flex-wrap">
    <div className="md:flex-1/3 md:max-w-[33.33%] w-full px-4 relative">
      <h3 className='lg:text-[44px] text-[36px] font-bold z-1 leading-[1.2] tracking-[-1.5]'>Find Your Focused Workspace—Book Your Seat Today</h3>
    </div>
    <div className="md:flex-5/12 md:max-w-[41.666%] w-full relative px-4 ">
      <p className='md:pl-[90px] font-medium text-[16px] leading-[34px] my-[30px] md:my-0'>Experience a productive, professional environment tailored to your needs. Book a free visit today and enjoy exclusive offers when you secure your spot!</p>
    </div>
    <div className="md:flex-1/4 md:max-w-[25%] w-full">
      <div className="md:!text-right ">
        <Link to = 'bookseat'>
        <Button item = "Schedule Your Visit" curtainColor="white" buttonClass="bg-black leading-[68px] border-l-2 border-white hover:text-[#ff4231]"/></Link>
      </div>
    </div>
    <div className="absolute bottom-0 right-0 z-[-1] hidden md:block">
      <img src={cta_dot} alt="" />
    </div>
    <div className="absolute top-0 left-[400px] z-[-1] animate-ball ">
      <img
                src={DotBall}
                alt=""
                className=" max-w-full  "
              />
    </div>
  </div>
</div>
<Footer/>
</div>

  );
}

export default ServicesPage;
