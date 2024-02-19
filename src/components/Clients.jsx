import React from 'react'
import img1 from "../images/partner1.png"
import img2 from "../images/partner2.png"
import img3 from "../images/partner3.png"
import img4 from "../images/partner4.png"
import img5 from "../images/partner5.png"

const Clients = () => {
  return (
    <div className='w-10/12 max-sm:w-full v m-auto mb-36'>
    <div className='grid grid-cols-5 max-sm:grid-cols-2 max-sm:px-2 gap-10'>
       <img className='w-40 opacity-65' src={img1} alt="" />
       <img className='w-40 opacity-65' src={img2} alt="" />
       <img className='w-40 opacity-65' src={img3} alt="" />
       <img className='w-40 opacity-65' src={img4} alt="" />
       <img className='w-40 opacity-65' src={img5} alt="" />
    </div>
</div>
  )
}

export default Clients