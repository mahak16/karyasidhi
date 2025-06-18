import React from 'react'
import Navbar from '../components/Navbar'
import ExtraSection from '../components/ExtraSection'
import BookUrSeat from '../components/BookUrSeat'
import Company from '../components/Company'
import Footer from '../components/Footer'
function Bookseat() {
    
  return (
    <div>
        <Navbar/>
        <ExtraSection
            mode="breadcrumb" 
  breadcrumbLinks={[
    { label: "Home", path: "/" },
    { label: "Book A Seat", path: "/Bookseat" }
  ]}
        />
         <div className="flex flex-col lg:flex-row xl:max-w-[1200px] lg:max-w-[960px] md:max-w-[720px] mx-auto px-4 pt-[112px] pb-[120px] gap-4">
           <div className="w-full lg:w-2/3">
        <BookUrSeat/></div>
        <div className="w-full lg:w-1/3 px-4">
        
            <div className="pt-[43px] pb-[42px] lg:px-[50px] px-[20px] mt-[8px] bg-[#ff4332]">
              <span className='text-[18px] font-bold text-white '>Need quick help?</span>
              <p className='text-[15px] leading-[32px] text-[#ffe2df] pt-[32px] pb-[18px] font-semibold m-0 tracking-[-0.3px]'>If you need assistance filling out the form, speak with a team member at our corporate office. We're here to help!</p>
              <h3 className='text-white text-[22px] font-bold tracking-[-1.5px]'><a className='' href="tel:91+9669231006">+91 9669231006</a></h3>
            </div>
          </div>
        
        </div>
        <Company/>
        <Footer/>
    </div>
  )
}

export default Bookseat