import React from "react";
import axios from "axios";
import Button from "./Button";
import { IoChevronDownSharp } from "react-icons/io5";
import { useState } from "react";
import { FetchId } from "../utilites/FetchId";
const API_BASE_URL =
  "https://api.multiwebbuilder.technolitics.com/api/v1/multi-tenant-web-builder";
function BookUrSeat({heading = "We'll follow up"}) {
  const [isOpen, setIsOpen] = useState(false);
  const [formData, setFormData] = useState({
     name: '',
     
        businessname: '',
        businesscategory: '',
        phone: '',
        email: '',
        serviceType: '',
        service: '',
        numSeats: '',
        preferredLocation: '',
        remarks: '',
    websiteProjectId: '67777610906e9b81e76e962f',
  });

    const [message, setMessage] = useState('');
  const [error, setError] = useState('');
  
  const handleChange = (e) => {
  const { name, value } = e.target;
  setFormData((prev) => ({
    ...prev,
    [name]: value,
  }));
};


  const handleSubmit = async (e) => {
    e.preventDefault();
    setMessage('');
    setError('');

  // Build the "strings" object
  const stringMapped = {
    stringOne: formData.name,
    stringTwo: formData.businessname,
    stringThree: formData.businesscategory,
    stringFour: formData.phone,
    
    stringSix: formData.serviceType,
    stringSeven: formData.service,
    stringEight: formData.numSeats,
    stringNine: formData.preferredLocation,
    
  };

  // Final payload
  const payload = {
    strings: stringMapped,
    email: formData.email,
    remarks: formData.remarks,
    websiteProjectId: formData.websiteProjectId,
  };

    try {
      const response = await axios.post(
        `${API_BASE_URL}/website/service-enquiry/create-service-enquiry`,
        payload,
        {
          headers: {
            'Content-Type': 'application/json',
                  },
        }
      );

      setMessage('Service enquiry submitted successfully!');
       setFormData({
        name: '',
        businessname: '',
        businesscategory: '',
        phone: '',
        email: '',
        serviceType: '',
        service: '',
        numSeats: '',
        preferredLocation: '',
        remarks: '',
        websiteProjectId: '67777610906e9b81e76e962f'
      });

     
    } catch (err) {
      setError(`Error: ${err.response?.data?.message || err.message}` );
      console.error('Error submitting form:', err);
    }
  };
  return (
    <section >
      
          <div className="pb-[49px]">
            <h3 className="text-[44px] font-bold text-[#3f3836] tracking-[-1.5] leading-1.2">
              {heading}
            </h3>
          </div>
          <div className="mx-[10px]">
            <form className="flex flex-wrap md:flex-row flex-col " onSubmit={handleSubmit}>
              <div className="flex-1/2 md:max-w-[50%] relative w-full px-4 font-semibold text-[#010101] ">
                <div className="mx-[-10px] mt-[10px]">
                  <input
                    type="text"
                    placeholder="Name"
                    name = "name"
                    className="w-full leading-[68px] pl-[30px] bg-[#fbf0ee] text-[14px] fontsemibold text-[#0b0a0a] focus:outline-none"
                    required
                    value={formData.name}
                    onChange={handleChange}
                  />
                </div>
              </div>
              <div className="flex-1/2 md:max-w-[50%] relative w-full px-4  ">
                <div className="mx-[-10px] mt-[10px]">
                  <input
                    type="text"
                    placeholder="Company/business Name"
                    className="w-full leading-[68px] pl-[30px] bg-[#fbf0ee] text-[14px] font-semibold text-[#010101] focus:outline-none"
                    required
                    name = "businessname"
                    value = {formData.businessname}
                    onChange={handleChange}
                  />
                </div>
              </div>
              <div className="flex-1/2 md:max-w-[50%] relative w-full px-4  ">
                <div className="mx-[-10px] mt-[10px]">
                  <input
                    type="text"
                    placeholder="Business category"
                    className="w-full leading-[68px] pl-[30px] bg-[#fbf0ee] text-[14px] font-semibold text-[#010101] focus:outline-none"
                    required
                    name = "businesscategory"
                    onChange={handleChange}
                    value = {formData.businesscategory}
                  />
                </div>
              </div>
              <div className="flex-1/2 md:max-w-[50%] relative w-full px-4 ] ">
                <div className="mx-[-10px] mt-[10px]">
                  <input
                    type="text"
                    placeholder="Contact number"
                    className="w-full leading-[68px] pl-[30px] bg-[#fbf0ee] text-[14px] font-semibold text-[#010101] focus:outline-none"
                    required
                    name = "phone"
                    onChange={handleChange}
                    value={formData.phone}
                  />
                </div>
              </div>
              <div className="flex-1/2 md:max-w-[50%] relative w-full px-4  ">
                <div className="mx-[-10px] mt-[10px]">
                  <input
                    type="email"
                    placeholder="Email Addess"
                    className="w-full leading-[68px] pl-[30px] bg-[#fbf0ee] text-[14px] font-semibold text-[#010101] focus:outline-none"
                    required
                    name = "email"
                    onChange={handleChange}
                    value={formData.email}
                  />
                </div>
              </div>
              <div className="flex-1/2 md:max-w-[50%] relative w-full px-4 ">
                <div className="mx-[-10px] mt-[10px]">
                  <input
                    type="text"
                    placeholder="Select a service"
                    className="w-full leading-[68px] pl-[30px] bg-[#fbf0ee] text-[14px] font-semibold text-[#010101] focus:outline-none"
                    required
                    name ="service"
                    onChange={handleChange}
                    value = {formData.service}
                  />
                </div>
              </div>
              <div className="flex-1/2 md:max-w-[50%] relative w-full px-4">
                <div className="mx-[-10px] mt-[10px]">
                  <select
                    id="num-seats"
                    name="numSeats"
                    required
                    className="w-full bg-[#fbf0ee] leading-[68px] pl-[30px] text-[14px] text-[#827b79] font-semibold  rounded-none appearance-none focus:outline-none  "
                    onChange={handleChange}
                    value={formData.numSeats}
                  >
                    <option value="" disabled selected>
                      Select number of seats
                    </option>
                    <option value="1">1</option>
                    <option value="2">2</option>
                    <option value="3-5">3–5</option>
                    <option value="6-9">6–9</option>
                    <option value="10-15">10–15</option>
                    <option value="16-20">16–20</option>
                  </select>

                  {/* Custom dropdown arrow */}
                  <div className="pointer-events-none absolute top-1/2 right-4 transform -translate-y-1/2">
                    <IoChevronDownSharp
                      className={`absolute right-4 top-1/2 transform transition-transform duration-300 ${
                        isOpen ? "-rotate-180" : "rotate-0"
                      } text-[#817a78] pointer-events-none`}
                    />
                  </div>
                </div>
              </div>
              <div className="flex-1/2 md:max-w-[50%] relative w-full px-4">
                <div className="mx-[-10px] mt-[10px]">
                  <select
                    id="num-seats"
                    name="preferredLocation"
                    required
                    className="w-full bg-[#fbf0ee] leading-[68px] pl-[30px] text-[14px] text-[#827b79] font-semibold  rounded-none appearance-none focus:outline-none  "
                    onChange={handleChange}
                    value={formData.preferredLocation}
                  >
                    <option value="" disabled selected>
                      Select a preferred location
                    </option>
                    <option value="Raipur">Raipur</option>
                    <option value="Surat">Surat</option>
                    
                  </select>

                  {/* Custom dropdown arrow */}
                  <div className="pointer-events-none absolute top-1/2 right-4 transform -translate-y-1/2">
                    <IoChevronDownSharp
                      className={`absolute right-4 top-1/2 transform transition-transform duration-300 ${
                        isOpen ? "-rotate-180" : "rotate-0"
                      } text-[#817a78] pointer-events-none`}
                    />
                  </div>
                </div>
              </div>
              <div className="flex-1 max-w-full relative px-4 ">
                <div className="-ml-[10px] -mr-[10px]  mt-[10px]">
                  <textarea
                    name="remarks"
                    placeholder="Message"
                    rows="10"
                    cols="30"
                    className="bg-[#fbf0ee] w-full h-[190px] pl-[30px] text-[14px] font-semibold text-[#0b0a0a] pt-[10px] focus:outline-none "
                    required
                    onChange={handleChange}
                    value={formData.remarks}
                  ></textarea>
                  <Button 
                    onClick={handleSubmit}
                    buttonClass="mt-[10px] h-full py-5 text-white"
                    item="send message"
                  />
                </div>
              </div>
            </form>
          </div>
          
        
    </section>
  );
}

export default BookUrSeat;
