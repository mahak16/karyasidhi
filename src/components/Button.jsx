// import { motion } from "framer-motion";

// const Button = ({name,className=""}) => {
//   return (
//     <motion.button
//       className={`relative  mt-6 mx-10   group ${className}`}
//     >
//       {/* Background sliding layer */}
//       <motion.span
//         className="absolute inset-0 bg-black origin-left scale-x-0 group-hover:scale-x-100 transition-all duration-400  z-5 ease-out"
//         aria-hidden
//       />

//       {/* Button Text on top */}
//       <span className="relative z-10 group-hover:text-white transition-colors duration-500">
//         {name}
//       </span>
//     </motion.button>
//   );
// };

// export default Button;

// const Button = ({ name, className = "", buttonClass = ""}) => {
//   return (
//     <button className={`border-l-1 border-[#403937] relative px-6 py-2 font-semibold text-white bg-[#ff4231] overflow-hidden group/button ${buttonClass}`}>
//       <span className="relative z-10 transition-colors duration-500 ">
//         {name}
//       </span>
//       <span className={`absolute inset-0  scale-x-0 group-hover/button:scale-x-100 origin-left transition-transform duration-500 z-0 ${className}`}></span>
//     </button>
//   );
// };

// export default Button;
import React, { useState } from 'react';
import './Button.css'; // Custom animation

const Button = ({item,className,buttonClass, curtainColor,onClick}) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <button
    type="submit"
    onClick={onClick}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      className={`relative overflow-hidden px-4 font-semibold bg-[#ff4231] ${buttonClass}`}
    >
      <span className={`relative z-10 transition-colors duration-500 uppercase ${className}`}>
        {item}
      </span>

      <span
        className={`absolute top-0 left-0 h-full w-full z-0 
          ${isHovered ? 'animate-swipeIn' : 'animate-swipeOut'}`}
        style={{ backgroundColor: curtainColor }}
      ></span>
    </button>
  );
};

export default Button;

