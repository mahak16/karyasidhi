import React from 'react'


function Card({name, description, image, amount}) {
    
  return (
    <div className='flex '>
    
        
    <div className="flex  bg-white w-[570px] h-[266px]  shadow-lg  my-4 overflow items-cente ">
      {/* Image Section */}
      <div className=" w-50 -mt-5 mb-10  ml-10">
        <img
          src={image}
          alt="Service Image"
          className="w-full h-full object-cover"
        />
      </div>

      {/* Text Section */}
      <div className="  w-50 p-6 ">
        <h2 className="text-2xl font-bold text-gray-800 mb-2">{name}</h2>
        <p className="text-gray-600">{description}</p>
        <p className='text-[#ff4230] '>{amount}</p>
      </div>
    </div>
    
    </div>
  )
}

export default Card