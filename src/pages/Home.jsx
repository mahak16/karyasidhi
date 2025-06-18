import React from 'react'
import PostId from '../utilites/PostId'
import Navbar from '../components/Navbar.jsx'
import Container from '../components/Container.jsx'
import Workspace from '../components/Workspace.jsx'
import HeroSection from '../components/HeroSection.jsx'
import Faqs from '../components/Faqs.jsx'
import Services from '../components/Services.jsx'
import Footer from '../components/Footer.jsx'
import Experience from '../components/Experience.jsx'
import Productivity from '../components/Productivity.jsx'
import WorkIn from '../components/WorkIn.jsx'
import Testimonial from '../components/Testimonial.jsx'
import Reviews from '../components/Reviews.jsx'
import Blogs from '../components/Blogs.jsx'
import Company from '../components/Company.jsx'
import Popup from '../components/Popup.jsx'

import WhatsAppButton from '../components/WhatsAppButton.jsx'
function Home() {
  return (
     <div className="w-full h-full overflow-x-hidden">
      <Popup/>
      <Navbar />
      
        <PostId />
        <HeroSection />
        <Container/>
        <Workspace/>
        <Faqs />
        <Services/>
        <Experience/>
        <Productivity/>
        <WorkIn/>
        <Testimonial/>
        <Reviews/>
        <Blogs/>
        <Company/>
        <Footer/>
        <WhatsAppButton/>
    </div>
  )
}

export default Home