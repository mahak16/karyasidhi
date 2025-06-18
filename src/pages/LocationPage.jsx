import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom"; // Added for navigation
import Navbar from "../components/Navbar";
import ExtraSection from "../components/ExtraSection";
import Footer from "../components/Footer";
import { FetchId } from "../utilites/FetchId";
import WhatsAppButton from "../components/WhatsAppButton";
import { HiArrowRight } from "react-icons/hi2";
import { FaPhoneAlt, FaWhatsapp, FaEnvelope, FaMapMarkerAlt } from "react-icons/fa";

const API_BASE_URL =
  "https://api.multiwebbuilder.technolitics.com/api/v1/multi-tenant-web-builder";

function LocationPage() {
  const [branches, setBranches] = useState([]);

  useEffect(() => {
    const fetchBranches = async () => {
      try {
        const websiteID = await FetchId();
        const response = await fetch(
          `${API_BASE_URL}/website/branch-management/get-all-branches/${websiteID}`
        );
        const result = await response.json();
        setBranches(result?.data || []);
      } catch (error) {
        console.error("Failed to fetch branches:", error);
      }
    };

    fetchBranches();
  }, []);

  // Function to create a slug from branch name
  const createSlug = (name) =>
    name
      .toLowerCase()
      .replace(/[^a-z0-9]+/g, "-")
      .replace(/(^-|-$)/g, "");

  return (
    <div>
      <Navbar />
      <ExtraSection
        mode="breadcrumb"
        breadcrumbLinks={[
          { label: "Home", path: "/" },
          { label: "Locations", path: "/locations" },
        ]}
      />
      <WhatsAppButton />

      <div className="pt-[111px] pb-[120px] relative px-4 mx-auto xl:max-w-[1200px] lg:max-w-[960px] md:max-w-[720px] max-w-[540px]">
        <div className="flex flex-wrap justify-center">
          {branches.map((branch) => (
            <Link
              key={branch._id}
              to={`/location/${createSlug(branch.basicDetails.name)}`}
              state={{ location: branch }}
              className="lg:flex-1/3 lg:max-w-[34.3333%] md:flex-[58.888%] md:max-w-[58.888%] flex-1 max-w-full relative px-4 mt-[10px] group transition-all duration-500 cursor-pointer"
            >
              <div className="overflow-hidden">
                <div className="transform transition-transform duration-500 group-hover:rotate-3 group-hover:scale-105 origin-center">
                  <img
                    src={`https://technolitics-s3-bucket.s3.ap-south-1.amazonaws.com/multitenantwebbuilder-s3-bucket/${branch.basicDetails.logo}`}
                    alt=""
                  />
                </div>
              </div>
              <div className="hover:shadow-md shadow-gray-100 border-1 border-[#f7eae8] lg:pt-[53px] pt-[30px] md:px-[60px] px-[30px] pb-[40px]">
                <ul>
                  <li className="text-[14px] font-[500] text-[#817a78]">
                    {branch.basicDetails.city}
                  </li>
                </ul>
                <h3 className="group-hover:text-[#ff4231] text-[24px] leading-[36px] pt-[5px] pb-[10px] font-bold text-[#3f3836] tracking-[-1.5px]">
                  {branch.basicDetails.name}
                </h3>
                <ul className="leading-[30px]">
                  <li className="text-[14px] font-medium text-[#817a78]">
                    <a href={branch.mapLink}>{branch.basicDetails.address}</a>
                  </li>
                </ul>
                <div className="flex justify-between">
                  <Link
              key={branch._id}
              to={`/location/${createSlug(branch.basicDetails.name)}`}
              state={{ location: branch }}
              className="lg:flex-1/3 lg:max-w-[34.3333%] md:flex-[58.888%] md:max-w-[58.888%] flex-1 max-w-full relative px-4 mt-[10px] group transition-all duration-500 cursor-pointer"
            >
                  <div className="pr-4 translate-y-[27px] text-[20px] text-[#ff4332]">
                    <HiArrowRight className="w-[20px] h-[20px]" />
                  </div>
                  </Link>
                  <div className="pt-[10px] flex items-center">
                    <ul className="flex">
                      <li className="mt-[5px] mb-[5px] flex items-center text-[18px]">
                        <a
                          href={`tel:${branch.basicDetails.mobileNumber}`}
                          className="mr-[10px]"
                        >
                          <div className="top-0 h-[44px] w-[44px] left-0 right-0 bottom-0 rounded-full text-[20px] text-[#ff4332] bg-[#fbf0ee]">
                            <FaPhoneAlt className="relative top-[12px] left-[12px] pr-0 z-20" />
                          </div>
                        </a>
                      </li>
                      <li className="mt-[5px] mb-[5px] flex items-center text-[18px]">
                        <a
                          href={`https://api.whatsapp.com/send?phone=${branch.basicDetails.mobileNumber}&text=Hello,%20I’m%20reaching%20out%20for%20more%20info.`}
                          className="mr-[10px]"
                        >
                          <div className="top-0 h-[44px] w-[44px] left-0 right-0 bottom-0 rounded-full text-[20px] text-[#ff4332] bg-[#fbf0ee]">
                            <FaWhatsapp className="relative top-[12px] left-[12px] pr-0 z-20" />
                          </div>
                        </a>
                      </li>
                      <li className="mt-[5px] mb-[5px] flex items-center text-[18px]">
                        <a
                          href={`mailto:${branch.basicDetails.email}`}
                          className="mr-[10px]"
                        >
                          <div className="top-0 h-[44px] w-[44px] left-0 right-0 bottom-0 rounded-full text-[20px] text-[#ff4332] bg-[#fbf0ee]">
                            <FaEnvelope className="relative top-[12px] left-[12px] pr-0 z-20" />
                          </div>
                        </a>
                      </li>
                      <li className="mt-[5px] mb-[5px] flex items-center text-[18px]">
                        <a
                          href={`mailto:${branch.basicDetails.email}`}
                          className="mr-[10px]"
                        >
                          <div className="top-0 h-[44px] w-[44px] left-0 right-0 bottom-0 rounded-full text-[20px] text-[#ff4332] bg-[#fbf0ee]">
                            <FaMapMarkerAlt className="relative top-[12px] left-[12px] pr-0 z-20" />
                          </div>
                        </a>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default LocationPage;