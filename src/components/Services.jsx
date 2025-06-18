
// import React from 'react';
// import Block from './Block';
// import bgPattern from '../assets/bgPattern.png';
// import Button from './Button';
// import air_conditioner from '../assets/air_conditioner.svg';
// import desk from '../assets/desk.jpeg'
// import chair from '../assets/chair.jpeg'
// import network from '../assets/network.jpeg'
// import Kitchen from '../assets/Kitchen.jpeg'
// import lunch from '../assets/lunch.jpeg'
// import coffee_cup from '../assets/coffee_cup.svg'
// import glassOfwater from '../assets/glassOfwater.svg'
// import presentation from '../assets/presentation.svg'
// import printer from '../assets/printer.svg'
// import locker from '../assets/locker.svg'
// import charge from '../assets/charge.svg'
// import cleaning from '../assets/cleaning.svg'
// import toilet from '../assets/toilet.svg'
// import parking from '../assets/parking.jpeg'
// import camera from '../assets/camera.jpeg'
// import meeting from '../assets/meeting.png';
// const blocksData = [
//   { logo: network, heading: "High speed internet", text: "Stay connected with reliable, high-speed internet." },
//   { logo: desk, heading: "Individual Seating", text: "Private seating for a productive work environment." },
//   { logo: chair, heading: "Ergonomic Chairs", text: "Chairs designed to reduce strain during long hours.." },
//   { logo: air_conditioner, heading: "Air Conditioners", text: "Temperature-controlled environment for maximum comfort." },
//   { logo: Kitchen, heading: "Fully Equipped Kitchen", text: "Prepare meals, snacks, and drinks in our kitchen." },
//   { logo: lunch, heading: "Separate Lunch Area", text: "A designated space to enjoy your meals comfortably." },
//   { logo: coffee_cup, heading: "No Limit Tea & Coffee", text: "Unlimited tea and coffee to keep you refreshed." },
//   { logo: glassOfwater, heading: "Free and Full-Time Water", text: "Access fresh water anytime to stay hydrated." },
//    { logo: parking, heading: "Huge Parking Space", text: "Convenient, spacious parking for easy arrival." },
//   { logo: meeting, heading: "Conference / Meeting Rooms", text: "Professional meeting rooms for meetings and discussions." },
//    { logo: presentation, heading: "Big Screen for Presentations", text: "Large display for effective presentations." },
//    { logo: printer, heading: "Printer and Scanner", text: "Quick access to printers and scanners for documents." },
//    { logo: locker, heading: "Individual Lockers", text: "Welcoming staff at entry." },
//    { logo: camera, heading: "Full Security Cameras", text: "Relax and chill during breaks." },
//    { logo: cleaning, heading: "Hygienic Workspace", text: "Grab snacks and drinks anytime." },
//    { logo: toilet, heading: "Hygienic Washrooms", text: "De-stress with games and fun." },
//    { logo: charge, heading: "Free Power Supply", text: "Uninterrupted power supply for consistent charging." }
// ];

// const Services = () => {
//   return (
//     <div
//       className="w-full p-6 bg-cover bg-center relative"
//       style={{
//         backgroundImage: `url(${bgPattern})`,
//         backgroundRepeat: 'no-repeat',
//         backgroundSize: 'auto',
//         backgroundPosition: 'top left',
        
//       }}
//     >
//       <div className="bg-[#faedeb]/90 w-full h-full absolute top-0 left-0 z-0"></div>

//       <div className="relative z-10 max-w-7xl mx-auto ">
        

//         <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8 mt-10 ">
//           {/* Special Info Box */}
//           <div className=" text-5xl font-bold flex px-5 ">
//             <h1>What we are offering at our Coworking Space.</h1>
//           </div>

//           {/* First 3 Blocks */}
//           {blocksData.slice(0, 3).map((block, i) => (
//             <Block key={i} logo={block.logo} heading={block.heading} text={block.text} />
//           ))}

//           {/* Middle Blocks */}
//           {blocksData.slice(3, 15).map((block, i) => (
//             <Block key={i + 3} logo={block.logo} heading={block.heading} text={block.text} />
//           ))}

//           {/* Final 2 Cards */}
//           {blocksData.slice(15, 17).map((block, i) => (
//             <Block key={i + 15} logo={block.logo} heading={block.heading} text={block.text} />
//           ))}

//           {/* Final Info Box taking 2 columns */}
//           <div className="md:col-span-2  text-center p-20 flex w-155 md:w-auto justify-center border-4 border-black  shadow flex-col">
//             <h1 className='font-bold text-4xl text-justify px-10 '> Experience the Vibe – Schedule Your Visit to Our Co-Work Space!</h1>
//             <Button name = "BOOK A SEAT" className='w-45 mt-10'/>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Services;
import React from 'react';
import Block from './Block';
import bgPattern from '../assets/bgPattern.png';
import Button from './Button';
import air_conditioner from '../assets/air_conditioner.svg';
import desk from '../assets/desk.jpeg';
import chair from '../assets/chair.jpeg';
import network from '../assets/network.jpeg';
import Kitchen from '../assets/Kitchen.jpeg';
import lunch from '../assets/lunch.jpeg';
import coffee_cup from '../assets/coffee_cup.svg';
import glassOfwater from '../assets/glassOfwater.svg';
import presentation from '../assets/presentation.svg';
import printer from '../assets/printer.svg';
import locker from '../assets/locker.svg';
import charge from '../assets/charge.svg';
import cleaning from '../assets/cleaning.svg';
import toilet from '../assets/toilet.svg';
import parking from '../assets/parking.jpeg';
import camera from '../assets/camera.jpeg';
import meeting from '../assets/meeting.png';
import servicesdot from '../assets/servicesdot.png'
import { Link } from "react-router-dom";
const blocksData = [
  { logo: network, heading: "High speed internet", text: "Stay connected with reliable, high-speed internet." },
  { logo: desk, heading: "Individual Seating", text: "Private seating for a productive work environment." },
  { logo: chair, heading: "Ergonomic Chairs", text: "Chairs designed to reduce strain during long hours.." },
  { logo: air_conditioner, heading: "Air Conditioners", text: "Temperature-controlled environment for maximum comfort." },
  { logo: Kitchen, heading: "Fully Equipped Kitchen", text: "Prepare meals, snacks, and drinks in our kitchen." },
  { logo: lunch, heading: "Separate Lunch Area", text: "A designated space to enjoy your meals comfortably." },
  { logo: coffee_cup, heading: "No Limit Tea & Coffee", text: "Unlimited tea and coffee to keep you refreshed." },
  { logo: glassOfwater, heading: "Free and Full-Time Water", text: "Access fresh water anytime to stay hydrated." },
  { logo: parking, heading: "Huge Parking Space", text: "Convenient, spacious parking for easy arrival." },
  { logo: meeting, heading: "Conference / Meeting Rooms", text: "Professional meeting rooms for meetings and discussions." },
  { logo: presentation, heading: "Big Screen for Presentations", text: "Large display for effective presentations." },
  { logo: printer, heading: "Printer and Scanner", text: "Quick access to printers and scanners for documents." },
  { logo: locker, heading: "Individual Lockers", text: "Welcoming staff at entry." },
  { logo: camera, heading: "Full Security Cameras", text: "Relax and chill during breaks." },
  { logo: cleaning, heading: "Hygienic Workspace", text: "Grab snacks and drinks anytime." },
  { logo: toilet, heading: "Hygienic Washrooms", text: "De-stress with games and fun." },
  { logo: charge, heading: "Free Power Supply", text: "Uninterrupted power supply for consistent charging." }
];

const Services = () => {
  return (
    <div
      className="w-full sm:p-6 bg-cover bg-center relative"
      style={{
        backgroundImage: `url(${bgPattern})`,
        backgroundRepeat: 'no-repeat',
        backgroundSize: 'auto',
        backgroundPosition: 'top left',
      }}
    >
      <div className="bg-[#faedeb]/90 w-full h-full absolute top-0 left-0 z-0"></div>

      <div className="relative z-10 lg:max-w-7xl mx-auto">
        <div className="flex flex-wrap flex-col md:flex-row justify-center  pt-[90px] pb-[120px]">
  {/* Title Block: full width */}
  <div className="lg:flex-1/4 lg:max-w-[25%] relative px-4 w-full mt-[22px]">
    <h3 className="text-[30px]  sm:text-[36px] md:text-[46px] text-[#3f3836] tracking-[-1.5px] font-bold leading-tight ">
      What we are offering at our Coworking Space.
    </h3>
  </div>

  {/* Service Cards */}
  {blocksData.map((block, i) => (
    <Block key={i} logo={block.logo} heading={block.heading} text={block.text} />
  ))}

  {/* Final CTA Block */}
  {/* <div className="sm:px-4 px-0  relative mb-20">
  <div className="md:mx-18  lg:max-w-[520px] lg:h-[355px] p-7 py-15 sm:p-10 md:p-14    border-4 border-[#3f3836] mt-[30px] flex flex-col items-start ">
    <h1 className="font-bold text-[34px]  leading-10">
      Experience the Vibe – Schedule Your Visit to Our Co-Work Space!
    </h1>
    <div className="mt-6  ">
      <Button item = "book a seat" buttonClass=" py-5 border-l-3 border-[#403937] text-white " />
    </div>
  </div>
  </div> */}
    <div className="md:flex-1/2 md:max-w-[50%] flex-1 w-full relative px-4 flex-col md:flex-row">
        <div className="border-[4px] border-[#3f3836] pt-[62px] pb-[64px] px-[30px] lg:px-[95px] mt-[30px]">
          <div className="  text-[#3f3836] tracking-[-1.5px] leading-tight"> 
            <h3 className='text-[34px] pb-[31px] font-bold'>Experience the Vibe – Schedule Your Visit to Our Co-Work Space!</h3>
            <Link to ='/bookseat'>
            <Button item = "book a visit" buttonClass="border-l-2 border-black text-[14px] leading-[68px] text-white px-[40px]"/>
            </Link>
          </div>
        </div>
    </div>
</div>

      </div>
      <div className="absolute bottom-[-60px] z-[1] right-0 md:right-[180px] pusher-animation">
        <img src={servicesdot} className='opacity-100'/>
      </div>
    </div>
  );
};

export default Services;
