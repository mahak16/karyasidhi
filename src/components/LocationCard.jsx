import React from 'react';
import { FaPhoneAlt } from "react-icons/fa";
import { FaWhatsapp } from "react-icons/fa";
import { FaEnvelope } from "react-icons/fa";
const LocationCard = ({name, city, address, mapLink, phoneLink,phone, whatsappLink, email }) => {
  return (
    <div className=' flex lg:flex-1/3 lg:max-w-[24%] md:flex-[58.33%] md:max-w-[58.33%] flex-1 max-w-[100%] px-4 relative mt-[30px] '>
        <div className="  border-1 border-[#f7eae8] lg:pt-[53px] pt-[30px] sm:px-[60px] lg:px-[30px] px-[30px] pb-[40px]">
            <ul>
                <li className='text-[14px] font-[500] text-[#817a78]'>{city}</li>
            </ul>
            <h3 className='text-[24px] leading-[36px] pt-[5px] pb-[10px] font-bold text-[ #3f3836] tracking-[-1.5px]'>{name}</h3>
            <ul className='leading-[30px]'>
                <li className='text-[14px] font-medium text-[#817a78]'>
                    <a href={mapLink}>{address}</a>
                </li>
            </ul>
            <div className="pt-[10px] flex items-center">
                <ul className='flex flex-col'>
                    <li className='mt-[5px] mb-[5px] flex items-center text-[18px] font-[500] text-[#817a78]'>
                        <a href={phoneLink} className='mr-[10px]'>
                            <div className=' top-0 h-[50px] w-[50px] left-0 right-0 bottom-0 rounded-full text-[20px] text-[#ff4332] bg-[#fbf0ee]'>
                                <FaPhoneAlt className='relative top-4 left-4 pr-0 z-20'/>
                            </div>
                        </a>
                        +91 {phone}
                    </li>
                    <li className='mt-[5px] mb-[5px] flex items-center text-[18px]  font-[500] text-[#817a78]'>
                        <a href={whatsappLink} className='mr-[10px]'>
                            <div className=' top-0 h-[50px] w-[50px] left-0 right-0 bottom-0 rounded-full text-[20px] text-[#ff4332] bg-[#fbf0ee]'>
                                <FaWhatsapp className='relative top-4 left-4 pr-0 z-20'/>
                            </div>
                        </a>
                        +91 {phone}
                    </li>
                    <li className='mt-[5px] mb-[5px] flex items-center text-[18px]  font-[500] text-[#817a78]'>
                        <a href={email} className='mr-[10px]'>
                            <div className=' top-0 h-[50px] w-[50px] left-0 right-0 bottom-0 rounded-full text-[20px] text-[#ff4332] bg-[#fbf0ee]'>
                                <FaEnvelope className='relative top-4 left-4 pr-0 z-20'/>
                            </div>
                        </a>
                        {email}
                    </li>
                </ul>
            </div>
        </div>
    </div>
  );
};

export default LocationCard;
