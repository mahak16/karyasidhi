import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { FetchId } from "../utilites/FetchId";
import { HiArrowRight } from "react-icons/hi2";

const Blogs = () => {
  const [blog, setBlog] = useState([]);

  useEffect(() => {
    FetchId().then((id) => {
      fetch(
        `https://api.multiwebbuilder.technolitics.com/api/v1/multi-tenant-web-builder/website/post/get-all-posts/${id}`
      )
        .then((response) => response.json())
        .then((data) => {
          setBlog(data.data);
        });
    });
  }, []);

  const createSlug = (title) =>
    title
      .toLowerCase()
      .replace(/[^a-z0-9]+/g, "-")
      .replace(/(^-|-$)/g, "");

  return (
    <div className="lg:px-6 px-4 py-12 max-w-screen-xl mx-auto">
      <h2 className="text-5xl font-bold mb-10 my-10 text-center">Blogs</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3 gap-8">
        {blog.map((item) => (
          <Link
            key={item._id}
            to={`/blog/${createSlug(item.title)}`}
            state={{ blog: item }}
            className="bg-white border-b border-[#f7eae8] overflow-hidden group transition-all duration-500 w-full hover:shadow-sm shadow-gray-100"
          >
            <div>
              <div className="overflow-hidden">
                <div className="transform transition-transform duration-500 group-hover:rotate-3 group-hover:scale-105 origin-center">
                  <img
                    src={`https://technolitics-s3-bucket.s3.ap-south-1.amazonaws.com/multitenantwebbuilder-s3-bucket/${item.banner?.image}`}
                    alt={item.title}
                    className="w-full h-80 object-cover"
                  />
                </div>
              </div>
              <div className="p-4 flex-1 flex flex-col justify-between border border-t-0 border-b-0 border-[#f7eae8]">
                <h3 className="text-2xl font-bold text-[#333] mb-2 mt-2 sm:px-8 px-2 group-hover:text-[#ff4231]">
                  {item.title}
                </h3>
                <button className="inline-flex items-center text-red-500  group sm:px-8 px-2 pb-5 mt-5">
                  <HiArrowRight className="group-hover:translate-x-1 transition-transform duration-200" />
                </button>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Blogs;
