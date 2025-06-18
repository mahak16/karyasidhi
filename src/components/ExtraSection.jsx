// import React, { useEffect, useState } from 'react';
// import { Link, useLocation } from 'react-router-dom';
// import defaultBg from '../assets/pageTitleBg.jpg';
// import { FetchId } from '../utilites/FetchId';

// function ExtraSection({
//   type = "gallery",
//   background = defaultBg,
//   mode = "filter", // NEW PROP
//   breadcrumbLinks = [], // For breadcrumb mode
// }) {
//   const location = useLocation();
//   const [titleOptions, setTitleOptions] = useState([{ label: "All", path: "" }]);

//   const currentParams = new URLSearchParams(location.search);
//   const rawTitle = currentParams.get("title");
//   const activeTitle = rawTitle ? decodeURIComponent(rawTitle) : "All";

//   const buildLink = (item) => {
//     if (item.path) return item.path;
//     const params = new URLSearchParams(location.search);
//     if (item.label === "All") {
//       params.delete("title");
//     } else {
//       params.set("title", item.label);
//     }
//     return `${location.pathname}?${params.toString()}`;
//   };

//   const displayTitle =
//     mode === "breadcrumb"
//       ? breadcrumbLinks[breadcrumbLinks.length - 1]?.label || "Page"
//       : activeTitle === "All"
//       ? type === "blogs" ? "Blogs" : "Gallery"
//       : activeTitle;

//   useEffect(() => {
//     const fetchTitles = async () => {
//       if (mode === "breadcrumb") return; // Skip fetching for breadcrumbs
//       const id = await FetchId();
//       let apiUrl = "";

//       if (type === "gallery") {
//         apiUrl = `https://api.multiwebbuilder.technolitics.com/api/v1/multi-tenant-web-builder/website/gallery/get-all-galleries/${id}`;
//       } else if (type === "blogs") {
//         apiUrl = `https://api.multiwebbuilder.technolitics.com/api/v1/multi-tenant-web-builder/website/blog/get-all-blogs/${id}`;
//       }

//       const res = await fetch(apiUrl);
//       const data = await res.json();
//       const items = data?.data || [];

//       const uniqueTitles = Array.from(new Set(items.map((item) => item.title)));
//       const options = [{ label: "All", path: "" }, ...uniqueTitles.map((t) => ({ label: t, path: "" }))];

//       setTitleOptions(options);
//     };

//     fetchTitles();
//   }, [type, mode]);

//   return (
//     <section
//       className="w-full bg-cover bg-center bg-no-repeat"
//       style={{ backgroundImage: `url(${background})` }}
//     >
//       <div className="w-full px-4 mx-auto max-w-screen-xl">
//         <div className="flex flex-wrap -mx-4">
//           <div className="w-full px-4">
//             <div className="h-[350px] flex items-center relative">
//               <h1 className="text-[60px] text-white font-bold tracking-[-1.5px] m-0">
//                 {displayTitle}
//               </h1>

//               {/* 👇 Conditional Rendering */}
//               {mode === "filter" ? (
//                 <nav className="absolute right-0 bottom-0" aria-label="filters">
//                   <ul className="p-0 m-0 flex rounded-none">
//                     {titleOptions.map((item) => {
//                       const isActive = item.label.trim() === activeTitle.trim();
//                       return (
//                         <li key={item.label}>
//                           <Link
//                             to={buildLink(item)}
//                             className={`leading-[60px] px-[30px] py-[22px] text-[14px] font-semibold text-[#3f3836]
//                               bg-[#fbf0ee]
//                               ${isActive ? "bg-white text-black" : "hover:bg-white"}
//                             `}
//                           >
//                             {item.label}
//                           </Link>
//                         </li>
//                       );
//                     })}
//                   </ul>
//                 </nav>
//               ) : (
//                 <nav className="absolute right-0 bottom-0" aria-label="breadcrumb">
//                   <ul className="p-0 m-0 flex rounded-none">
//                     {breadcrumbLinks.map((item, index) => (
//                       <li key={index}>
//                         <Link
//                           to={item.path}
//                           className={`leading-[60px] px-[30px] py-[22px] text-[14px] font-semibold text-[#3f3836]
//                             bg-[#fbf0ee] hover:bg-white`}
//                         >
//                           {item.label}
//                         </Link>
//                       </li>
//                     ))}
//                   </ul>
//                 </nav>
//               )}
//             </div>
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// }

// export default ExtraSection;
import React from "react";
import { Link, useParams } from "react-router-dom";
import defaultBg from "../assets/pageTitleBg.jpg";

function ExtraSection({
  type = "gallery",
  background = defaultBg,
  mode = "filter",
  titles = [], // passed from GalleryPage
  selectedTitle = "All", // also passed
  breadcrumbLinks = [],
}) {
  const { title: paramTitle } = useParams();
  const displayTitle =
    mode === "breadcrumb"
      ? breadcrumbLinks[breadcrumbLinks.length - 1]?.label || "Page"
      : selectedTitle === "All"
      ? type === "blogs"
        ? "Blogs"
        : "Gallery"
      : selectedTitle;

  const buildLink = (item) => {
    const encoded = encodeURIComponent(item);
    return item === "All" ? "/gallery" : `/gallery/${encoded}`;
  };

  return (
    <section
      className="w-full bg-cover bg-center bg-no-repeat"
      style={{ backgroundImage: `url(${background})` }}
    >
      <div className="w-full px-4 mx-auto max-w-screen-xl">
        <div className="flex flex-wrap -mx-4">
          <div className="w-full px-4">
            <div className="h-[350px] flex items-center relative">
              <h1 className="text-[60px] text-white font-bold tracking-[-1.5px] m-0">
                {displayTitle}
              </h1>

              {/* Filter Tabs */}
              {mode === "filter" ? (
                <nav className="absolute right-0 bottom-0" aria-label="filters">
                  <ul className="p-0 m-0 flex rounded-none">
                    {["All", ...titles].map((label) => {
                      const isActive = label.trim() === selectedTitle.trim();
                      return (
                        <li key={label}>
                          <Link
                            to={buildLink(label)}
                            className={`lg:leading-[60px] sm:leading-[60px] leading-[30px] 
               lg:px-[30px] sm:px-[30px] px-[15px] 
               lg:py-[22px] sm:py-[22px] py-[10px] 
               lg:text-[14px] sm:text-[14px] text-[12px] 
               font-semibold text-[#3f3836] 
               bg-[#fbf0ee] 
               ${isActive ? "bg-white text-black" : "hover:bg-white"}`}
                          >
                            {label}
                          </Link>
                        </li>
                      );
                    })}
                  </ul>
                </nav>
              ) : (
                // Breadcrumb rendering
                <nav
                  className="absolute right-0 bottom-0"
                  aria-label="breadcrumb"
                >
                  <ul className="p-0 m-0 flex rounded-none">
                    {breadcrumbLinks.map((item, index) => {
                      const isLast = index === breadcrumbLinks.length - 1;
                      return (
                        <li key={index}>
                          <Link
                            to={item.path}
                            className={`leading-[60px] px-[30px] py-[22px] text-[14px] font-semibold text-[#3f3836] 
              ${isLast ? "bg-white " : "bg-[#fbf0ee]  text-[#817a78]"}`}
                          >
                            {item.label}
                          </Link>
                        </li>
                      );
                    })}
                  </ul>
                </nav>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default ExtraSection;
