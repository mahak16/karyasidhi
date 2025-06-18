import React from "react";
import Navbar from "../components/Navbar";
import Blogs from "../components/Blogs";
import Footer from "../components/Footer";
import ExtraSection from "../components/ExtraSection";

function BlogPage() {
  return (
    <div className="w-full overflow-hidden">
      <Navbar />
      
      <ExtraSection 
  mode="breadcrumb" 
  breadcrumbLinks={[
    { label: "Home", path: "/" },
    { label: "Blogs", path: "/blogs" }
  ]}
/>
      
      <Blogs />
      <Footer />
    </div>
  );
}

export default BlogPage;
