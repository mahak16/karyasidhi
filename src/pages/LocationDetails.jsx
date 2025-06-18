import React, { useEffect, useState } from "react";
import { Link, useParams, useLocation } from "react-router-dom";
import Navbar from "../components/Navbar.jsx";
import ExtraSection from "../components/ExtraSection.jsx";
import Footer from "../components/Footer";
import { FetchId } from "../utilites/FetchId.jsx";
import {
  FaPhoneAlt,
  FaWhatsapp,
  FaEnvelope,
  FaMapMarkerAlt,
} from "react-icons/fa";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Navigation, Autoplay } from "swiper/modules";
import Work from "../assets/Work.jpg";
import Work2 from "../assets/Work2.jpg";
import BookUrSeat from "../components/BookUrSeat.jsx";
import WhatsappButton from "../components/WhatsAppButton.jsx";
import { IoMdClose } from "react-icons/io";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";
import Button from "../components/Button.jsx";
const API_BASE_URL =
  "https://api.multiwebbuilder.technolitics.com/api/v1/multi-tenant-web-builder";
const LocationDetails = () => {
  const { slug } = useParams();
  const { state } = useLocation();
  const locationFromState = state?.location;
  const [location, setLocation] = useState(locationFromState || null);
  const [locations, setLocations] = useState([]);
  const [testimonials, setTestimonials] = useState([]);
  const [expandedIndexes, setExpandedIndexes] = useState({});
  const [popupState, setPopupState] = useState(null);

  const toggleReadMore = (index) => {
    setExpandedIndexes((prev) => ({
      ...prev,
      [index]: !prev[index],
    }));
  };

  const openPopup = (index, images) => {
    setPopupState({ index, images });
  };

  const closePopup = () => {
    setPopupState(null);
  };

  const nextImage = () => {
    setPopupState((prev) => {
      const newIndex = (prev.index + 1) % prev.images.length;
      return { ...prev, index: newIndex };
    });
  };

  const prevImage = () => {
    setPopupState((prev) => {
      const newIndex =
        (prev.index - 1 + prev.images.length) % prev.images.length;
      return { ...prev, index: newIndex };
    });
  };

  useEffect(() => {
    if (!locationFromState) {
      FetchId().then((id) => {
        fetch(
          `${API_BASE_URL}/website/branch-management/get-all-branches/${id}`
        )
          .then((response) => response.json())
          .then((data) => {
            const allLocations = data.data || [];
            const matchedLocation = allLocations.find(
              (loc) =>
                loc.basicDetails?.name &&
                loc.basicDetails.name
                  .toLowerCase()
                  .replace(/[^a-z0-9]+/g, "-")
                  .replace(/(^-|-$)/g, "") === slug
            );
            setLocation(matchedLocation || null);
            setLocations(allLocations);
          })
          .catch((error) => {
            console.error("Error fetching location details:", error);
          });
      });
    } else {
      FetchId().then((id) => {
        fetch(
          `${API_BASE_URL}/website/branch-management/get-all-branches/${id}`
        )
          .then((response) => response.json())
          .then((data) => {
            setLocations(data.data || []);
          });
      });
    }
  }, [locationFromState, slug]);

  useEffect(() => {
    FetchId().then((id) => {
      fetch(
        `https://api.multiwebbuilder.technolitics.com/api/v1/multi-tenant-web-builder/website/testimonial/get-all-testimonials/${id}`
      )
        .then((response) => response.json())
        .then((data) => {
          setTestimonials(data.data || []);
        });
    });
  }, []);

  const createSlug = (name) => {
    if (!name || typeof name !== "string") {
      return ""; // Return empty string if name is undefined or not a string
    }
    return name
      .toLowerCase()
      .replace(/[^a-z0-9]+/g, "-")
      .replace(/(^-|-$)/g, "");
  };
  const getYouTubeEmbedUrl = (url) => {
    if (!url) return "";
    const videoIdMatch = url.match(/(?:v=)([^&]+)/);
    const videoId = videoIdMatch ? videoIdMatch[1] : "";
    return videoId ? `https://www.youtube.com/embed/${videoId}` : "";
  };

  if (!location) return <div className="p-10 text-center">Loading...</div>;

  return (
    <>
      <Navbar />
      <WhatsappButton />
      <ExtraSection
        mode="breadcrumb"
        breadcrumbLinks={[
          { label: "Home", path: "/" },
          { label: "Locations", path: "/locations" },
          {
            label: location.basicDetails?.name || "Location",
            path: `/location/${slug}`,
          },
        ]}
      />
      <div className="pt-[120px] mx-auto px-4 lg:mx-20 flex flex-col md:flex-row justify-center">
        {/* Left Side */}
        <div className="flex-2/3 md:max-w-[66.66%]  w-[100%]">
          <div className="  px-4 ">
            <img
              src={`https://technolitics-s3-bucket.s3.ap-south-1.amazonaws.com/multitenantwebbuilder-s3-bucket/${location.basicDetails.logo}`}
              alt="Banner"
              className="w-[100%] h-[513px] object-cover mb-6 pb-4"
            />

            <ul>
              <li className="text-[#817a78]">{location.basicDetails.city}</li>
            </ul>
            <h3 className="text-[44px] max-w-[770px] text-[#3f3836] font-bold  pr-[50px] leading-tight pb-0 mb-[20px]">
              {location.basicDetails?.name || "Unnamed Location"}
            </h3>
            <ul className="leading-[30px] pb-[40px] border-b-1 border-[#e4e4ee]">
              <li className="leading-[30px] text-[#817a78]">
                {location.basicDetails.address}
              </li>
            </ul>
            <div className="justify-end translate-x-[-9px] translate-y-[-155px] flex items-center">
              <div className="flex gap-4 text-[#ff4232]">
                <a href={`tel:${location.basicDetails.mobileNumber}`}>
                <div className="top-0 h-[44px] w-[44px] left-0 right-0 bottom-0 rounded-full  text-[#ff4332] bg-[#fbf0ee]">
                  <FaPhoneAlt className="relative top-[32%] left-[32%] pr-0 z-20" />
                </div></a>
                <a href={location.socialMediaDetails.whatsapp}>
                <div className="top-0 h-[44px] w-[44px] left-0 right-0 bottom-0 rounded-full  text-[#ff4332] bg-[#fbf0ee]">
                  <FaWhatsapp className="relative top-[32%] left-[32%] pr-0 z-20" />
                </div></a>
                <a href={`mailto:${location.basicDetails.email}`}>
                <div className="top-0 h-[44px] w-[44px] left-0 right-0 bottom-0 rounded-full  text-[#ff4332] bg-[#fbf0ee]">
                  <FaEnvelope className="relative top-[32%] left-[32%] pr-0 z-20" />
                </div></a>
                <a href={location.locationLink}>
                <div className="top-0 h-[44px] w-[44px] left-0 right-0 bottom-0 rounded-full  text-[#ff4332] bg-[#fbf0ee]">
                  <FaMapMarkerAlt className="relative top-[32%] left-[32%] pr-0 z-20" />
                </div></a>
              </div>
            </div>

            {/* Main Description */}
            <div
              className="text-[16px] text-[#817a78] font-medium leading-[34px] tracking-[0.7px] "
              dangerouslySetInnerHTML={{
                __html: location.description || "No description available.",
              }}
            />
            <div
              className="text-[16px] text-[#817a78] leading-[34px] py-4  tracking-[0.7px] w-full"
              dangerouslySetInnerHTML={{
                __html: location.description || "No additional description.",
              }}
            />
            {/* Multiple Description if present */}

            {location?.multipleDescriptions?.map((item, index) => (
              <div key={index} className="w-full flex flex-col py-4">
                {/* Single Image */}
                {item.singleImage?.image && (
                  <div className="w-full mb-6">
                    <a
                      href={item.singleImage.hyperLink}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <img
                        src={`https://technolitics-s3-bucket.s3.ap-south-1.amazonaws.com/multitenantwebbuilder-s3-bucket/${item.singleImage.image}`}
                        alt="Single Image"
                        className="w-full h-[600px] object-cover"
                      />
                    </a>
                  </div>
                )}
                {item.singleImage?.hyperLink && (
                  <div className="w-full mb-6">
                    <iframe
                      src={getYouTubeEmbedUrl(item.singleImage.hyperLink)}
                      title="YouTube Video"
                      className="w-full h-[400px]"
                      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                      allowFullScreen
                    ></iframe>
                  </div>
                )}
                {/* Description */}

                {/* Multiple Images */}
                <div className="grid  grid-cols-2 gap-[10px] mt-[25px] w-full">
                  {item.multipleImages?.map((images, idx) => (
                    <img
                      key={idx}
                      onClick={() => openPopup(idx, item.multipleImages)}
                      src={`https://technolitics-s3-bucket.s3.ap-south-1.amazonaws.com/multitenantwebbuilder-s3-bucket/${images}`}
                      alt=""
                      className={`w-full h-[224.4px] object-cover cursor-pointer ${
                        item.multipleImages.length % 2 !== 0 &&
                        idx === item.multipleImages.length - 1
                          ? "col-span-2"
                          : ""
                      }`}
                    />
                  ))}
                </div>
                {/* Dynamic Button */}
                {item.button?.title && item.button?.hyperLink && (
                  <div className="flex justify-center py-15 pt-10">
                    <a
                      href={item.button.hyperLink}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <Button
                        item={item.button.title}
                        buttonClass="leading-[54px] border-l-2 border-black px-8 text-white bg-[#ff4232] items-center"
                      />
                    </a>
                    
                  </div>
                )}
                  <hr className="w-full text-[#e4e4ee] py-4"/>
              </div>
            ))}

            {/* Popup for Image */}
            {popupState !== null && (
              <div className="fixed inset-0 bg-black bg-opacity-75 flex items-center justify-center z-50">
                <div className="relative">
                  <button
                    onClick={closePopup}
                    className="absolute top-2 right-2 text-white text-3xl font-bold"
                  >
                    <IoMdClose />
                  </button>
                  <button
                    onClick={prevImage}
                    className="absolute left-2 top-1/2 transform -translate-y-1/2 text-white text-3xl font-bold"
                  >
                    <FaChevronLeft />
                  </button>
                  <img
                    src={`https://technolitics-s3-bucket.s3.ap-south-1.amazonaws.com/multitenantwebbuilder-s3-bucket/${
                      popupState.images[popupState.index]
                    }`}
                    alt="Popup"
                    className="max-w-[90vw] max-h-[90vh] object-contain"
                  />
                  <button
                    onClick={nextImage}
                    className="absolute right-2 top-1/2 transform -translate-y-1/2 text-white text-3xl font-bold"
                  >
                    <FaChevronRight />
                  </button>
                
                </div>
              </div>
            )}

            <Swiper
              modules={[Pagination, Navigation, Autoplay]}
              autoplay={{ delay: 5000 }}
              loop={true}
              slidesPerView={1}
              spaceBetween={0}
            >
              <SwiperSlide className="w-full">
                <div className="relative w-full h-[368px]">
                  <img
                    src={Work}
                    alt="Carousel"
                    className="w-full sm:h-full h-[556px] object-cover"
                  />
                </div>
              </SwiperSlide>
              <SwiperSlide className="w-full">
                <div className="relative w-full h-[368px]">
                  <img
                    src={Work2}
                    alt="Carousel"
                    className="w-full sm:h-full h-[556px] object-cover"
                  />
                </div>
              </SwiperSlide>
            </Swiper>
            <div className="w-full h-[100%] p-[30px] bg-[#fbf0ee]">
              <Swiper
                slidesPerView={3}
                spaceBetween={30}
                loop={true}
                autoplay={{
                  delay: 2500,
                  disableOnInteraction: false,
                }}
                modules={[Autoplay]}
                navigation={false}
                pagination={false}
                breakpoints={{
                  0: {
                    slidesPerView: 1,
                  },
                  640: {
                    slidesPerView: 1,
                  },
                }}
              >
                {testimonials.map((review, index) => {
                  const maxLength = 100;
                  const isLong = review.review?.length > maxLength;
                  const shortDesc = review.review?.slice(0, maxLength);
                  const isExpanded = expandedIndexes[index];

                  return (
                    <SwiperSlide key={index} className="w-full overflow-hidden">
                      <div className="flex sm:flex-row flex-col items-start">
                        <img
                          src={`https://technolitics-s3-bucket.s3.ap-south-1.amazonaws.com/multitenantwebbuilder-s3-bucket/${review.image}`}
                          alt="Review"
                          className="md:w-[170px] w-full h-full md:h-[170px] md:ml-0 ml-5 object-cover"
                        />
                        <div className="pl-[40px]">
                          <h3 className="text-[#3F3836] font-bold leading-[34px] text-[20px]">
                            {review.name}
                          </h3>
                          <p className="text-[16px] text-[#ff4232] font-normal leading-[34px] tracking-[0.7px]">
                            {review.companyProfile}
                          </p>
                          <p className="text-[16px] font-semibold text-[#838999] leading-[34px] tracking-[0.7px]">
                            {isExpanded || !isLong
                              ? review.review
                              : `${shortDesc}... `}
                            {isLong && (
                              <button
                                className="inline-block font-normal text-[#ef2917] ml-1"
                                onClick={() => toggleReadMore(index)}
                              >
                                {isExpanded ? "Read Less" : "Read More"}
                              </button>
                            )}
                          </p>
                        </div>
                      </div>
                    </SwiperSlide>
                  );
                })}
              </Swiper>
            </div>
            <div className="w-full h-[100%] mb-10 mt-10">
              <BookUrSeat heading="Get a call Back" />
            </div>
          </div>
        </div>
        {/* Right Side */}
        <div className="w-full lg:flex-4/12 md:flex-1/2 sm:flex-7/12 flex-1 lg:max-w-[28.33%] md:max-w-[50%] sm:max-w-7/12 px-[15px] sticky top-[120px] self-start pb-[160px] ">
          <div className="pt-[45px] px-[50px] pb-[43px] bg-white border border-[#f7eae8] rounded-none relative before:absolute before:content-[''] before:left-[46px] before:top-[-1px] before:w-0 before:h-0 before:border-l-[8px] before:border-l-transparent before:border-r-[8px] before:border-r-transparent before:border-t-[6px] before:border-t-[#ff4232] shadow-light ">
            <h3 className="m-0 text-[#3f3836] text-[20px] font-bold capitalize tracking-[0]">
              More Locations
            </h3>
            {locations
              .filter((loc) => loc.basicDetails?.name) // Filter out locations without a name
              .map((loc, index) => (
                <div key={index} className="relative mt-[50px]">
                  <div className="min-w-[66px] table-cell align-middle">
                    <img
                      style={{ height: "65px", width: "65px" }}
                      src={`https://technolitics-s3-bucket.s3.ap-south-1.amazonaws.com/multitenantwebbuilder-s3-bucket/${loc.basicDetails.logo}`}
                      alt={`${
                        loc.basicDetails?.name || "location"
                      }_bannerimage`}
                    />
                  </div>
                  <div className="table-cell align-middle pl-[15px]">
                    <h4 className="m-0 text-[16px] leading-[28px] font-normal text-[#838999]">
                      <Link
                        to={`/location/${createSlug(loc.basicDetails.name)}`}
                        state={{ location: loc }}
                        className="transition-all duration-400 ease-in-out leading-[24px] text-[#3f3836] pr-[10px] text-[18px] font-semibold tracking-[0] hover:text-[#ff4232]"
                      >
                        {loc.basicDetails?.name || "Unnamed Location"}
                        <div className="text-[16px] font-semibold text-[#74706f]">
                          {loc.basicDetails?.city}
                        </div>
                      </Link>
                    </h4>
                  </div>
                </div>
              ))}
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default LocationDetails;
