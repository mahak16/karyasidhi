import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { FetchId } from "../utilites/FetchId";
import ExtraSection from "../components/ExtraSection";
import GallerySection from "../components/GallerySection";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

const GalleryPage = () => {
  const { title } = useParams();
  const decodedTitle = decodeURIComponent(title || "All");

  const [allImages, setAllImages] = useState([]);
  const [titles, setTitles] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const id = await FetchId();
      const res = await fetch(
        `https://api.multiwebbuilder.technolitics.com/api/v1/multi-tenant-web-builder/website/gallery/get-all-galleries/${id}`
      );
      const data = await res.json();

      const images = data.data.flatMap((item) =>
        item.mediaDetails.images.map((imgUrl) => ({
          url: `https://technolitics-s3-bucket.s3.ap-south-1.amazonaws.com/multitenantwebbuilder-s3-bucket/${imgUrl}`,
          title: item.title,
        }))
      );

      const uniqueTitles = Array.from(new Set(data.data.map((item) => item.title)));

      const filteredImages =
        decodedTitle === "All"
          ? images
          : images.filter((img) => img.title === decodedTitle);

      setAllImages(filteredImages);
      setTitles(uniqueTitles);
    };

    fetchData();
  }, [decodedTitle]);

  return (
    <>
      <Navbar />
      <ExtraSection
        type="gallery"
        mode="filter"
        titles={titles}
        selectedTitle={decodedTitle}
      />
      <GallerySection allImages={allImages} />
      <Footer />
    </>
  );
};

export default GalleryPage;
