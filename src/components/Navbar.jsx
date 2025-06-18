import React, { useState, useEffect } from "react";
import { FaAngleDown, FaEnvelopeOpenText } from "react-icons/fa";
import { FiMenu, FiX, FiPhoneCall } from "react-icons/fi";
import { IoLocationOutline } from "react-icons/io5";
import logok from "../assets/logok.png";
import Button from "./Button";
import { GoChevronDown } from "react-icons/go";
import { Link } from "react-router-dom";
import { FetchId } from "../utilites/FetchId.jsx";
const API_BASE_URL =
  "https://api.multiwebbuilder.technolitics.com/api/v1/multi-tenant-web-builder";

function Navbar() {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [open, setOpen] = useState(false);
  const [isServicesOpen, setIsServicesOpen] = useState(false); // Separate state for Services dropdown
  const [isLocationOpen, setIsLocationOpen] = useState(false);

  const toggleDropdown = () => {
    setIsDropdownOpen((prev) => !prev);
  };

  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 105); // Change to control when it appears
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const [locations, setLocations] = useState([]);

  useEffect(() => {
    FetchId().then((id) => {
      fetch(`${API_BASE_URL}/website/branch-management/get-all-branches/${id}`)
        .then((response) => response.json())
        .then((data) => {
          setLocations(data.data || []);
        })
        .catch((error) => {
          console.error("Error fetching locations:", error);
        });
    });
  }, []);
  const createSlug = (name) => {
    if (!name || typeof name !== "string") return "";
    return name
      .toLowerCase()
      .replace(/[^a-z0-9]+/g, "-")
      .replace(/(^-|-$)/g, "");
  };
  const toggleServices = () => setIsServicesOpen(!isServicesOpen); // Toggle Services dropdown
  const toggleLocation = () => setIsLocationOpen(!isLocationOpen);
  return (
    <nav
      className={`font-md transition-all duration-300 bg-white  z-50
      }`}
    >
      {/* TOP BLACK BAR*/}
      {!isScrolled && (
        <div className="bg-[#403937] h-[48px] text-white text-[13px] font-semibold hidden md:flex justify-start lg:ml-[360px] items-center px-15 lg:px-15 lg:text-s py-3 gap-4">
          <a
            href="mailto:hello@karyasiddhico.work"
            className="flex items-center gap-2 border-r  border-gray-500 pr-4 h-[48px]"
          >
            <FaEnvelopeOpenText className="text-red-500 text-[18px]" />
            hello@karyasiddhico.work
          </a>
          <a
            href="tel:9669231006"
            className="flex items-center gap-2 border-r  border-gray-500 pr-4 h-[48px]"
          >
            <FiPhoneCall className="text-red-500 text-[18px]" />
            +91 9669231006
          </a>
          <a
            href="#"
            className="hidden  items-center gap-2 min-w-[462px]  xl:inline-flex h-[48px]"
          >
            <IoLocationOutline className="text-red-500 text-[18px]" />
            MIG 60, Sector 02, Shankar Nagar, Raipur, Chhattisgarh, 492001
          </a>
        </div>
      )}

      {/* MAIN WHITE NAVBAR  */}
      <div className=" top-[49px] sm:h-[105px] h-[70px]  l-0 r-0 z-99 w-full pl-[15px] pr-[15px]  flex  -mx-[15px]  font-sans">
        <div className="relative w-full ">
          <div className="flex ">
            <Link to="/">
              <div className="relative lg:-mt-[50px] lg:h-[155px] min-h-[70px] md:h-[105px] left-0 bg-[#fbf0ee] sm:min-w-[360px] min-w-[205px] flex justify-center items-center">
                <img
                  src={logok}
                  alt="logo"
                  className="w-[300px] object-contain"
                />
              </div>
            </Link>

            <div className="block w-[691px]  mt-10">
              <ul className="hidden md:hidden pl-[37px]  font-sans lg:flex text-sm lg:mx-5  text-gray-800 uppercase">
                <li className="inline-block relative">
                  <Link
                    to="/"
                    className="relative mr-[10px] w-[45px] cursor-pointer active-home"
                  >
                    Home
                  </Link>
                </li>

                <li className="relative group inline-block">
                  <Link
                    to="/services"
                    className="nav-arrow  mr-[10px] cursor-pointer inline-flex items-center whitespace-nowrap "
                  >
                    Our Services
                    <GoChevronDown className=" text-sm" />
                  </Link>

                  {/* Submenu */}
                  <ul className="absolute left-5 top-[100%] mt-10 w-[200px] opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 bg-white z-50 shadow-md border-t-4 border-[#ff4332]">
                    <li>
                      <a
                        href="/service-details/coworking-seat"
                        className="block px-[24px] h-13 py-[10px] pt-4 hover:text-white hover:bg-[#403937] border-t-1 border-[#fa2d37]"
                      >
                        Coworking Seat
                      </a>
                    </li>
                    <li>
                      <a
                        href="/service-details/private-cabin"
                        className="block px-[24px] py-[10px] pt-4 hover:text-white h-13 hover:bg-[#403937] border-t-1 border-[#fa2d37]"
                      >
                        Private Cabin
                      </a>
                    </li>
                    <li>
                      <a
                        href="/service-details/meeting-room"
                        className="block px-[24px] py-[10px] pt-4 hover:text-white h-13 hover:bg-[#403937] border-t-1 border-[#fa2d37]"
                      >
                        Meeting Room
                      </a>
                    </li>
                    <li>
                      <a
                        href="/service-details/one-day-pass"
                        className="block px-[24px] py-[10px] pt-4 hover:text-white h-13 hover:bg-[#403937] border-t-1 border-[#fa2d37]"
                      >
                        One Day Pass
                      </a>
                    </li>
                    <li>
                      <a
                        href="/service-details/weekly-pass"
                        className="block px-[24px] py-[10px] pt-4 hover:text-white h-13 hover:bg-[#403937] border-t-1 border-[#fa2d37]"
                      >
                        Weekly Pass
                      </a>
                    </li>
                  </ul>
                </li>

                <li className="inline-block relative group">
                  <Link
                    to="/locations"
                    className="nav-arrow mr-[10px]  cursor-pointer inline-flex items-center w-auto whitespace-nowrap "
                  >
                    Locations
                    <GoChevronDown className="text-sm" />
                  </Link>

                  {/* Submenu */}
                  <ul className="absolute left-0 mt-10 top-full w-[200px] opacity-0 invisible group-hover:visible group-hover:opacity-100 bg-white z-50 border-t-4 border-[#fa2d37] shadow-lg transition-all duration-300 ease-out">
                    {locations.map((loc, index) => (
                      <li key={index}>
                        <a
                          href={`/location/${createSlug(
                            loc.basicDetails.name
                          )}`}
                          className="block px-[24px] h-13 py-[10px] pt-4 hover:text-white hover:bg-[#403937] border-t border-[#fa2d37]"
                        >
                          {loc.basicDetails?.name || "Unnamed Location"}
                        </a>
                      </li>
                    ))}
                  </ul>
                </li>

                <li className="inline-block relative">
                  <Link
                    to="/gallery"
                    className="nav-arrow mr-[10px]  cursor-pointer w-[66px]"
                  >
                    Gallery
                  </Link>
                </li>
                <li className="inline-block relative">
                  <Link
                    to="/blogs"
                    className="nav-arrow mr-[10px]  cursor-pointer w-[50px]"
                  >
                    Blogs
                  </Link>
                </li>
                <li className="inline-block relative">
                  <Link
                    to="/contact"
                    className="nav-arrow  cursor-pointer inline-block whitespace-nowrap"
                  >
                    Contact Us
                  </Link>
                </li>
              </ul>
            </div>
            {/* Hamburger Icon for Mobile */}
            <div
              className="lg:hidden text-3xl text-[#817a78] flex py-5  md:py-10 h-full "
              onClick={() => setOpen(!open)}
            >
              {open ? <FiMenu /> : <FiMenu />}
            </div>
          </div>
        </div>
        <Link to="/bookseat">
          <Button
            item="Book your seat"
            className=" text-white  lg:text-md"
            buttonClass="lg:-ml-50  min-w-[200px]  my-[25px] py-3   hidden lg:block border-l-2"
          />
        </Link>
        <Link to="/bookseat">
          <div className="fixed bottom-0 left-0 w-full z-50   shadow-xl sm:hidden flex items-center justify-center">
            <Button
              item="Book your seat"
              className="text-white text-center"
              buttonClass="w-full h-full py-5  "
            />
          </div>
        </Link>
      </div>
      <div
        className={`fixed top-0 left-0 w-full bg-white  transition-all duration-1000 z-50 ${
          isScrolled
            ? "translate-y-0 opacity-100"
            : "-translate-y-full opacity-0"
        }`}
      >
        <div className=" top-[49px] sm:h-[105px] h-[70px]  l-0 r-0 z-99 w-full pl-[15px] pr-[15px]  flex  -mx-[15px]  font-sans">
          <div className="relative w-full ">
            <div className="flex ">
              <div className="relative lg:-mt-[50px] lg:h-[155px] min-h-[70px] md:h-[105px]  left-0 bg-[#fbf0ee]  sm:min-w-[360px] min-w-[205px]  flex justify-center items-center">
                <img
                  src={logok}
                  alt="logo"
                  className="w-[300px] lg:mt-10   object-contain"
                />
              </div>
              <div className="block w-[691px]  mt-10">
                <ul className="hidden md:hidden pl-[37px]  font-sans lg:flex text-sm lg:mx-5  text-gray-800 uppercase">
                  <li className="inline-block relative">
                    <Link
                      to="/"
                      className="relative mr-[10px] w-[45px] cursor-pointer active-home"
                    >
                      Home
                    </Link>
                  </li>

                  <li className="relative group inline-block">
                    <a
                      href="#"
                      className="nav-arrow  mr-[10px] cursor-pointer inline-flex items-center whitespace-nowrap "
                    >
                      Our Services
                      <GoChevronDown className=" text-sm" />
                    </a>

                    {/* Submenu */}
                    <ul className="absolute left-5 top-[100%] mt-10 w-[200px] opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 bg-white z-50 shadow-md border-t-4 border-[#ff4332]">
                      <li>
                        <a
                          href="/service-details/coworking-seat"
                          className="block px-[24px] h-13 py-[10px] pt-4 hover:text-white hover:bg-[#403937] border-t-1 border-[#fa2d37]"
                        >
                          Coworking Seat
                        </a>
                      </li>
                      <li>
                        <a
                          href="/service-details/private-cabin"
                          className="block px-[24px] py-[10px] pt-4 hover:text-white h-13 hover:bg-[#403937] border-t-1 border-[#fa2d37]"
                        >
                          Private Cabin
                        </a>
                      </li>
                      <li>
                        <a
                          href="/service-details/meeting-room"
                          className="block px-[24px] py-[10px] pt-4 hover:text-white h-13 hover:bg-[#403937] border-t-1 border-[#fa2d37]"
                        >
                          Meeting Room
                        </a>
                      </li>
                      <li>
                        <a
                          href="/service-details/one-day-pass"
                          className="block px-[24px] py-[10px] pt-4 hover:text-white h-13 hover:bg-[#403937] border-t-1 border-[#fa2d37]"
                        >
                          One Day Pass
                        </a>
                      </li>
                      <li>
                        <a
                          href="/service-details/weekly-pass"
                          className="block px-[24px] py-[10px] pt-4 hover:text-white h-13 hover:bg-[#403937] border-t-1 border-[#fa2d37]"
                        >
                          Weekly Pass
                        </a>
                      </li>
                    </ul>
                  </li>

                  <li className="inline-block relative group">
                    <Link
                      to="/locations"
                      className="nav-arrow mr-[10px]  cursor-pointer inline-flex items-center w-auto whitespace-nowrap "
                    >
                      Locations
                      <GoChevronDown className="text-sm" />
                    </Link>

                    {/* Submenu */}
                    <ul className="absolute left-0 mt-10 top-full w-[200px] opacity-0 invisible group-hover:visible group-hover:opacity-100 bg-white z-50 border-t-4 border-[#fa2d37] shadow-lg transition-all duration-300 ease-out">
                      {locations.map((loc, index) => (
                        <li key={index}>
                          <a
                            href={`/location/${createSlug(
                              loc.basicDetails.name
                            )}`}
                            className="block px-[24px] h-13 py-[10px] pt-4 hover:text-white hover:bg-[#403937] border-t border-[#fa2d37]"
                          >
                            {loc.basicDetails?.name || "Unnamed Location"}
                          </a>
                        </li>
                      ))}
                    </ul>
                  </li>

                  <li className="inline-block relative">
                    <Link
                      to="/gallery"
                      className="nav-arrow mr-[10px]  cursor-pointer w-[66px]"
                    >
                      Gallery
                    </Link>
                  </li>
                  <li className="inline-block relative">
                    <Link
                      to="/blogs"
                      className="nav-arrow mr-[10px]  cursor-pointer w-[50px]"
                    >
                      Blogs
                    </Link>
                  </li>
                  <li className="inline-block relative">
                    <a
                      href="#"
                      className="nav-arrow  cursor-pointer inline-block whitespace-nowrap"
                    >
                      Contact Us
                    </a>
                  </li>
                </ul>
              </div>
              {/* Hamburger Icon for Mobile */}
              <div
                className="lg:hidden text-3xl text-[#817a78] flex py-5  md:py-10 h-full "
                onClick={() => setOpen(!open)}
              >
                {open ? <FiMenu /> : <FiMenu />}
              </div>
            </div>
          </div>
          <Link to="/bookseat">
            <Button
              item="Book your seat"
              className=" text-white  lg:text-md"
              buttonClass="lg:-ml-50  min-w-[200px] my-[25px] mr-[15px] leading-[55px]  hidden lg:block border-l-2"
            />
          </Link>
        </div>
      </div>

      {/* Mobile Menu Dropdown */}
      {/* Fullscreen Mobile Drawer */}
      {open && (
        <div>
          <div className="fixed inset-0 bg-black/30 bg-opacity-20 backdrop-sm z-40"></div>
          <div
            className={`fixed inset-0 bg-white z-50 h-screen w-3/5 sm:w-3/5 md:w-2/5 transition-transform duration-500 ease-in-out transform ${
              open ? "translate-x-0" : "translate-x-full"
            } shadow-xl`}
          >
            {/* Close Icon */}
            <div
              className="flex justify-end p-4 text-2xl text-gray-800"
              onClick={() => setOpen(false)}
            >
              <FiX />
            </div>

            {/* Menu Items */}
            <ul className="flex flex-col px-6 space-y-6 text-gray-800 text-md transition-all">
              <li className="inline-block border-b-1 pb-2 border-black/10">
                <Link to="/" className="w-[45px] cursor-pointer hover:text-red-500">
                  Home
                </Link>
              </li>
              <li className="inline-block border-b-1 pb-2 border-black/10">
                <a
                  href="#"
                  className="cursor-pointer flex items-center justify-between w-full hover:text-red-500"
                  onClick={(e) => {
                    e.preventDefault();
                    toggleServices();
                  }}
                >
                  <span className="w-[116px]">Our Services</span>
                  <GoChevronDown
                    className={`text-sm transition-transform duration-300 ${
                      isServicesOpen ? "rotate-180" : ""
                    }`}
                  />
                </a>
                <ul
                  className={`w-full transition-all duration-300 ease-out overflow-hidden border-t border-black/20 ${
                    isServicesOpen
                      ? "max-h-[200px] opacity-100 visible"
                      : "max-h-0 opacity-0 invisible"
                  }`}
                >
                  <li>
                    <a
                      href="/service-details/coworking-seat"
                      className="block px-[24px] h-13 py-[10px] pt-4 hover:text-white hover:bg-[#403937] border-t-1 border-black/20"
                    >
                      Coworking Seat
                    </a>
                  </li>
                  <li>
                    <a
                      href="/service-details/private-cabin"
                      className="block px-[24px] py-[10px] pt-4 hover:text-white h-13 hover:bg-[#403937] border-t-1 border-black/20"
                    >
                      Private Cabin
                    </a>
                  </li>
                  <li>
                    <a
                      href="/service-details/meeting-room"
                      className="block px-[24px] py-[10px] pt-4 hover:text-white h-13 hover:bg-[#403937] border-t-1 border-black/20"
                    >
                      Meeting Room
                    </a>
                  </li>
                  <li>
                    <a
                      href="/service-details/one-day-pass"
                      className="block px-[24px] py-[10px] pt-4 hover:text-white h-13 hover:bg-[#403937] border-t-1 border-black/20"
                    >
                      One Day Pass
                    </a>
                  </li>
                  <li>
                    <a
                      href="/service-details/weekly-pass"
                      className="block px-[24px] py-[10px] pt-4 hover:text-white h-13 hover:bg-[#403937] border-t-1 border-black/20"
                    >
                      Weekly Pass
                    </a>
                  </li>
                </ul>
              </li>
              <li className="inline-block border-b-1 pb-2 border-black/10">
                <a
                  href="#"
                  className="cursor-pointer flex items-center justify-between w-full hover:text-red-500"
                  onClick={(e) => {
                    e.preventDefault();
                    toggleLocation();
                  }}
                >
                  <span className="w-[116px]">Location</span>
                  <GoChevronDown
                    className={`text-sm transition-transform duration-300 ${
                      isLocationOpen ? "rotate-180" : ""
                    }`}
                  />
                </a>
                <ul
                  className={`w-full transition-all duration-300 ease-out overflow-hidden border-t border-black/20 ${
                    isLocationOpen
                      ? "max-h-[200px] opacity-100 visible"
                      : "max-h-0 opacity-0 invisible"
                  }`}
                >
                  {locations.map((loc, index) => (
                    <li key={index}>
                      <a
                        href={`/location/${createSlug(loc.basicDetails?.name)}`}
                        className="block px-[24px] h-13 py-[10px] pt-4 hover:text-white hover:bg-[#403937] border-t-1 border-black/20"
                      >
                        {loc.basicDetails?.name || "Unnamed Location"}
                      </a>
                    </li>
                  ))}
                </ul>
              </li>
              <li className="inline-block relative border-b-1 pb-2 border-black/10">
                <Link to="/gallery" className="cursor-pointer hover:text-red-500 w-[66px]">
                  Gallery
                </Link>
              </li>
              <li className="inline-block relative border-b-1 pb-2 border-black/10">
                <Link to="/blogs" className="cursor-pointer hover:text-red-500 w-[50px]">
                  Blogs
                </Link>
              </li>
              <li className="inline-block relative border-b-1 pb-2 border-black/10">
                <a href="#" className="cursor-pointer hover:text-red-500 w-[92px]">
                  Contact Us
                </a>
              </li>
            </ul>
            <a
              href="mailto:hello@karyasiddhico.work"
              className="flex items-center gap-2 mx-3 text-[14px] text-gray-800 mt-15 mb-1 pr-3"
            >
              <FaEnvelopeOpenText className="text-gray-600" />
              hello@karyasiddhico.work
            </a>
            <a
              href="tel:9669231006"
              className="flex items-center gap-2 text-gray-800 mx-5 text-[14px] pr-3"
            >
              <FiPhoneCall className="text-gray-600" />
              +91 88892 51000
            </a>
          </div>
        </div>
      )}
    </nav>
  );
}

export default Navbar;