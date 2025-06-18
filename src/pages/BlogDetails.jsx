import React, { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import Navbar from "../components/Navbar.jsx";
import ExtraSection from "../components/ExtraSection.jsx";
import Footer from "../components/Footer";
import { FetchId } from "../utilites/FetchId.jsx";
import { FaFacebookSquare, FaInstagram, FaLinkedinIn, FaTwitter } from "react-icons/fa";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Navigation, Autoplay } from "swiper/modules";
import Work from '../assets/Work.jpg';
import Work2 from '../assets/Work2.jpg';
import BookUrSeat from "../components/BookUrSeat.jsx";
import WhatsappButton from '../components/WhatsAppButton.jsx';
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";

const BlogDetail = () => {
  const { state } = useLocation();
  const blog = state?.blog;
  const [post, setPost] = useState([]);
  const [expandedIndexes, setExpandedIndexes] = useState({});
  const [test, setTest] = useState([]);
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
      const newIndex = (prev.index - 1 + prev.images.length) % prev.images.length;
      return { ...prev, index: newIndex };
    });
  };

  useEffect(() => {
    FetchId().then((id) => {
      fetch(
        `https://api.multiwebbuilder.technolitics.com/api/v1/multi-tenant-web-builder/website/post/get-post-by-slug/${id}?slug=${slug}`
      )
        .then((response) => response.json())
        .then((data) => {
          setPost(data.data);
        });
    });
  }, []);

  useEffect(() => {
    FetchId().then((id) => {
      fetch(
        `https://api.multiwebbuilder.technolitics.com/api/v1/multi-tenant-web-builder/website/testimonial/get-all-testimonials/${id}`
      )
        .then((response) => response.json())
        .then((data) => {
          setTest(data.data);
        });
    });
  }, []);

  useEffect(() => {
    FetchId().then((id) => {
      fetch(
        `https://api.multiwebbuilder.technolitics.com/api/v1/multi-tenant-web-builder/website/post/get-all-posts/${id}`
      )
        .then((response) => response.json())
        .then((data) => {
          setPost(data.data);
        });
    });
  }, []);

  if (!blog) return <div className="p-10 text-center">Loading...</div>;

  const createSlug = (title) =>
    title
      .toLowerCase()
      .replace(/[^a-z0-9]+/g, "-")
      .replace(/(^-|-$)/g, "");

  return (
    <>
      <Navbar />
      <WhatsappButton />
      <ExtraSection
        mode="breadcrumb"
        breadcrumbLinks={[
          { label: "Home", path: "/" },
          { label: "Blogs", path: "/blogs" },
        ]}
      />
      <div className="pt-[120px] w-full flex flex-col md:flex-row justify-center">
        {/* Left Side */}
        <div className="max-w-[770px] w-[100%]">
          <div className="max-w-4xl mx-auto px-4">
            <img
              src={`https://technolitics-s3-bucket.s3.ap-south-1.amazonaws.com/multitenantwebbuilder-s3-bucket/${blog.banner.image}`}
              alt="Banner"
              className="w-[100%] h-[513px] object-cover mb-6"
            />
            <h1 className="text-[44px] max-w-[770px] text-[#3f3836] font-bold mb-[30px] pr-[50px] leading-tight">
              {blog.title}
            </h1>
            {/* Main Description */}
            <div
              className="text-[16px] text-[#817a78] leading-[34px] tracking-[0.7px] w-full mb-6"
              dangerouslySetInnerHTML={{ __html: blog.description }}
            />
            {/* Multiple Description if present */}
            {blog?.multipleDescriptions?.map((item, index) => (
              <div key={index} className="w-full">
                <div
                  className="text-[16px] text-[#817a78] leading-[34px] space-y-16 mt-[30px] tracking-[0.7px] w-full"
                  dangerouslySetInnerHTML={{ __html: item.description }}
                />
                <div className="grid max-w-[770px] grid-cols-2 gap-[10px] mt-[25px] w-full">
                  {item.multipleImages.map((images, idx) => (
                    <img
                      key={idx}
                      onClick={() => openPopup(idx, item.multipleImages)}
                      src={`https://technolitics-s3-bucket.s3.ap-south-1.amazonaws.com/multitenantwebbuilder-s3-bucket/${images}`}
                      alt=""
                      className={`w-full h-[224.4px] object-cover cursor-pointer ${
                        item.multipleImages.length % 2 !== 0 && idx === item.multipleImages.length - 1
                          ? 'col-span-2'
                          : ''
                      }`}
                    />
                  ))}
                </div>
              </div>
            ))}

            {/* Popup for Image */}
            {popupState !== null && (
              <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50">
                <div className="relative">
                  <button
                    onClick={closePopup}
                    className="absolute top-2 right-2 text-white text-3xl font-bold"
                  >
                    ×
                  </button>
                  <button
                    onClick={prevImage}
                    className=" fixed top-[50%] left-6 text-white text-2xl"
                    
                  >
                    <FaChevronLeft />
                  </button>
                  <img
                    src={`https://technolitics-s3-bucket.s3.ap-south-1.amazonaws.com/multitenantwebbuilder-s3-bucket/${popupState.images[popupState.index]}`}
                    alt="Popup"
                    className="max-w-[90vw] max-h-[90vh] object-contain"
                  />
                  <button
                    onClick={nextImage}
                    className=" fixed right-6 top-[50%] text-white text-2xl"
                  >
                    <FaChevronRight />
                  </button>
                </div>
              </div>
            )}

            <hr className="w-full border border-[#e4e4ee]" />
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
                {test.map((review, index) => {
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
        <div className="max-w-full lg:flex-4/12 md:flex-1/2 sm:flex-7/12 flex-1 lg:max-w-[28.33%] md:max-w-[50%] sm:max-w-7/12 px-[15px] sticky top-[120px] self-start pb-[160px]">
          <div className="pt-[45px] px-[50px] pb-[43px] bg-white border border-[#f7eae8] rounded-none relative before:absolute before:content-[''] before:left-[46px] before:top-[-1px] before:w-0 before:h-0 before:border-l-[8px] before:border-l-transparent before:border-r-[8px] before:border-r-transparent before:border-t-[6px] before:border-t-[#ff4232] shadow-light">
            <h3 className="m-0 text-[#3f3836] text-[20px] font-bold capitalize tracking-[0]">
              More Blogs
            </h3>
            {post.map((item) => (
              <div key={item._id} className="relative mt-[50px]">
                <div className="min-w-[66px] table-cell align-middle">
                  <img
                    style={{ height: "65px", width: "65px" }}
                    src={`https://technolitics-s3-bucket.s3.ap-south-1.amazonaws.com/multitenantwebbuilder-s3-bucket/${item.banner.image}`}
                    alt="karyasiddhiblog_bannerimage"
                  />
                </div>
                <div className="table-cell align-middle pl-[15px]">
                  <h4 className="m-0 text-[16px] leading-[28px] font-normal text-[#838999]">
                    <Link
                      to={`/blog/${createSlug(item.title)}`}
                      state={{ blog: item }}
                      className="transition-all duration-400 ease-in-out leading-[24px] text-[#3f3836] pr-[10px] text-[18px] font-semibold tracking-[0] hover:text-[#ff4232]"
                    >
                      {item.title}
                    </Link>
                  </h4>
                </div>
              </div>
            ))}
          </div>
          <div className="sidebar__single sidebar__tags p-[45px_50px_43px] bg-white border border-[#f7eae8] rounded-none relative mt-[30px] before:absolute before:content-[''] before:left-[46px] before:top-[-1px] before:w-0 before:h-0 before:border-l-[8px] before:border-l-transparent before:border-r-[8px] before:border-r-transparent before:border-t-[6px] before:border-t-[#ff4232] shadow-light">
            <h3 className="sidebar__title m-0 text-[#3f3836] text-[20px] font-bold capitalize mb-[30px] tracking-[0]">
              Tags
            </h3>
            <ul className="sidebar__tags-list m-0 p-0 list-none mt-[-10px]">
              {blog?.seoDetails?.tags?.map((data, index) => (
                <li
                  key={index}
                  className="sidebar__tags-list-item inline-block align-middle leading-[1em] break-all [word-spacing:2px]"
                >
                  <span className="mr-[10px]">
                    <a
                      href="#"
                      className="text-[#838999] transition-all duration-400 ease-in-out hover:text-[#ff4232]"
                    >
                      {data}
                    </a>
                  </span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default BlogDetail;