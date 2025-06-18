import React, { useState,useEffect } from "react";
import { useSearchParams } from "react-router-dom";
import Button from "./Button";
import { IoMdClose } from "react-icons/io";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";

const GallerySection = ({ allImages }) => {
  const [searchParams] = useSearchParams();
  const selectedTitle = searchParams.get("title") || "All";
  const [popupIndex, setPopupIndex] = useState(null);

  const displayedImages =
    selectedTitle === "All"
      ? allImages
      : allImages.filter((img) => img.title === selectedTitle);

  const openPopup = (index) => setPopupIndex(index);
  const closePopup = () => setPopupIndex(null);

  const showPrev = () =>
    setPopupIndex((prev) => (prev === 0 ? displayedImages.length - 1 : prev - 1));
  const showNext = () =>
    setPopupIndex((prev) => (prev === displayedImages.length - 1 ? 0 : prev + 1));

 const handleKeyDown = (event) => {
  if (popupIndex === null) return; // Avoid errors when popup is not open

  if (event.key === 'ArrowRight') {
    setPopupIndex((prev) => (prev === displayedImages.length - 1 ? 0 : prev + 1)); // ✅ Go forward
  } else if (event.key === 'ArrowLeft') {
    setPopupIndex((prev) => (prev === 0 ? displayedImages.length - 1 : prev - 1)); // ✅ Go back
  } else if (event.key === 'Escape') {
    closePopup(); // Optional: Close popup with Esc
  }
};
useEffect(() => {
  if (popupIndex !== null) {
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }
}, [popupIndex]); // ✅ Only re-run effect when popup opens/closes


  return (
    <div className="pt-[90px] pb-[120px] bg-white">
      <div className="max-w-[1200px] mx-auto px-4">
        <div className="columns-1 sm:columns-2 md:columns-3 gap-4 space-y-4">
          {displayedImages.map((img, index) => (
            <div
              key={index}
              className="break-inside-avoid mb-5 group relative overflow-hidden"
            >
              <img src={img.url} alt={img.title} className="w-full h-auto block" />
              <div className="absolute inset-0 bg-black/30 scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-center z-10"></div>
              <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-500 z-20">
                <Button
                  onClick={() => openPopup(index)}
                  className="font-[400px] text-[28px]"
                  curtainColor="white"
                  item="+"
                  buttonClass="max-w-[116px] max-h-[116px] min-h-[90px] px-10 pointer border-l-2 border-white hover:text-red-500  text-white"
                />
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Popup Modal */}
      {popupIndex !== null && (
        <div className="fixed inset-0 bg-black/70 backdrop-md bg-opacity-80 z-[9999] flex items-center justify-center px-[6px]">
          
  <div className="relative flex items-center justify-center ">
      {/* Close Button ABOVE the image */}

      <button
        className="absolute -top-10 right-0 text-white text-3xl"
        onClick={closePopup}
      >
        <IoMdClose />
      </button>
        
      <img
            src={displayedImages[popupIndex].url}
            alt="Popup"
            className="max-w-[90vw] min-w-[490px] max-h-[640px] h-[540px] min-h-[300px]  object-contain "
            tabIndex={0}
            onKeyDown={handleKeyDown}
          />
          
          <button
            className=" fixed left-6 text-white text-2xl"
            onClick={showPrev}
          >
            <FaChevronLeft />
          </button>
          
          <button
            className=" fixed right-6  text-white text-2xl"
            onClick={showNext}
            
          >
            <FaChevronRight />
          </button>
          <p className="text-white text-center mt-2 absolute -bottom-6 right-6">
    {popupIndex + 1} of {displayedImages.length}
  </p>
        </div>
        </div>
      )}
    </div>
  );
};

export default GallerySection;
