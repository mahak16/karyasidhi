import React, { useEffect, useState } from 'react';
import LocationCard from '../components/LocationCard';
import Navbar from '../components/Navbar';
import ExtraSection from '../components/ExtraSection';
import {FetchId} from '../utilites/FetchId';
import Button from '../components/Button';
import Footer from '../components/Footer';
import WhatsAppButton from '../components/WhatsAppButton'
import axios from "axios";

const API_BASE_URL = 'https://api.multiwebbuilder.technolitics.com/api/v1/multi-tenant-web-builder'; 

function ContactPage() {
  const [branches, setBranches] = useState([]);
  const [formData, setFormData] = useState({
      name: '',  
      phone: '',
      email: '',
      address:'',
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
    stringTwo: formData.phone,
    stringThree: formData.address,
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
        phone: '',
        email: '',
        address: '',
        remarks: '',
        websiteProjectId: '67777610906e9b81e76e962f'
      });

     
    } catch (err) {
      setError(`Error: ${err.response?.data?.message || err.message}` );
      console.error('Error submitting form:', err);
    }
  };
  useEffect(() => {
    const fetchBranches = async () => {
      try {
        const websiteID = await FetchId();
        const response = await fetch(`${API_BASE_URL}/website/branch-management/get-all-branches/${websiteID}`);
        const result = await response.json();
        setBranches(result?.data || []);
      } catch (error) {
        console.error('Failed to fetch branches:', error);
      }
    };

    fetchBranches();
  }, []);

  return (
    <div>
      <Navbar />
      <WhatsAppButton/>
      <ExtraSection
        mode="breadcrumb"
        breadcrumbLinks={[
          { label: "Home", path: "/" },
          { label: "Contact", path: "/contact" },
        ]}
      />
      <div className='pt-[120px] px-4 mx-auto pb-4 border-b-1 border-[#f7eae8] relative flex xl:max-w-[1200px] lg:max-w-[960px] md:max-w-[720px] max-w-[540px] flex-col lg:flex-row'>
        <div className="lg:flex-1/2 lg:max-w-1/2 w-full relative px-4 mt-[-9px]">
          <h3 className='text-[44px] text-[#3f3836] pb-[27px] font-bold tracking-[-1.5px] '>Feel free to connect with Karyasiddhi Coworking Space.</h3>
        </div>
        <div className="lg:flex-1/2 lg:max-w-1/2 relative px-4  text-[16px]">
          <p className='font-medium leading-[34px] text-[#74706f] tracking-[-0.3px]'>We’re here to help you find the perfect coworking solution.</p>
          <p className='font-medium leading-[34px] text-[#74706f] tracking-[-0.3px]'>From flexible workspaces to modern amenities, we have everything to help your business thrive.</p>
        </div>
      </div>

      <div className="mt-[10px] lg:gap-10 relative z-10 !pb-0 xl:max-w-[1200px]  lg:max-w-[960px] md:max-w-[720px] max-w-[540px] px-4 mx-auto flex flex-col lg:flex-row flex-wrap gap-6">
        {branches.map((branch, index) => (
          <LocationCard
            key={index}
            city={branch.basicDetails.city}
            name={branch.basicDetails.name}
            address={branch.basicDetails.address}
            mapLink={branch.mapLink}
            phone={branch.basicDetails.mobileNumber}
            whatsappLink={`https://api.whatsapp.com/send?phone=${branch.basicDetails.mobileNumber}&text=Hello,%20I’m%20reaching%20out%20for%20more%20info.`}
            email={branch.basicDetails.email}
          />
        ))}
      </div>
      <div className="pt-[50px] pb-[120px] relative z-10 px-4 mx-auto xl:max-w-[1200px] lg:max-w-[960px] md:max-w-[720px] max-w-[540px] flex justify-center">
        <div className="flex-2/3 max-w-[66.66%] relative px-4">
            <div className="pb-[49px] text-center ">
                <h3 className='text-[44px] font-bold text-[#3f3836] tracking-[-1.5px]m-0'>Write us message.</h3>
            </div>
            <div className="mx-[10px] text-[#817a78]">
                <form action="/submit-contact" className='flex flex-wrap md:flex-row flex-col' onSubmit={handleSubmit}>
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
                    placeholder="Email"
                    name = "email"
                    className="w-full leading-[68px] pl-[30px] bg-[#fbf0ee] text-[14px] font-semibold text-[#010101]"
                    required
                    value={formData.email}
                    onChange={handleChange}
                  />
                </div>
              </div>
              <div className="flex-1/2 md:max-w-[50%] relative w-full px-4  ">
                <div className="mx-[-10px] mt-[10px]">
                  <input
                    type="text"
                    placeholder="Contact Number"
                    name = "phone"
                    className="w-full leading-[68px] pl-[30px] bg-[#fbf0ee] text-[14px] font-semibold text-[#010101]"
                    required
                    value={formData.phone}
                    onChange={handleChange}
                  />
                </div>
              </div>
              <div className="flex-1/2 md:max-w-[50%] relative w-full px-4  ">
                <div className="mx-[-10px] mt-[10px]">
                  <input
                    type="text"
                    placeholder="Your city"
                    name = "address"
                    className="w-full leading-[68px] pl-[30px] bg-[#fbf0ee] text-[14px] font-semibold text-[#010101]"
                    required
                    value={formData.address}
                    onChange={handleChange}
                  />
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
                    value={formData.remarks}
                    onChange={handleChange}
                    
                  ></textarea>
                  <div className='flex justify-center'>
                  <Button
                    buttonClass="mt-[10px] h-full py-5 text-white"
                    item="send message"
                    onClick={handleSubmit}
                  />
                  </div>
                </div>
              </div>
                </form>
            </div>
        </div>
      </div>
      <Footer/>
    </div>
  );
}

export default ContactPage;
