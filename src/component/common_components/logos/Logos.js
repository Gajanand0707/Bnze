import React from 'react'
import './Logos.css'
import Brand_logo1 from '../../../assets/Logos/brand-logo-1.png'
import Brand_logo2 from '../../../assets/Logos/brand-logo-2.png'
import Brand_logo3 from '../../../assets/Logos/brand-logo-3.png'
import Brand_logo4 from '../../../assets/Logos/brand-logo-4.png'
import Brand_logo5 from '../../../assets/Logos/brand-logo-5.png'
import Brand_logo6 from '../../../assets/Logos/brand-logo-6.png'
import Brand_logo7 from '../../../assets/Logos/brand-logo-7.png'
function Logos() {
  return (
    <div className='Logos text-center'>
      <h4>❤️ Trusted By Companies All Over The World </h4>
      <div className='brand_logo pt-5 d-flex '>
     <img  src={Brand_logo1} alt='brand_logo' />
     <img  src={Brand_logo2} alt='brand_logo' />
     <img  src={Brand_logo3} alt='brand_logo' />
     <img  src={Brand_logo4} alt='brand_logo' />
     <img  src={Brand_logo5} alt='brand_logo' />
     <img  src={Brand_logo6} alt='brand_logo' />
     <img  src={Brand_logo7} alt='brand_logo' />
      </div>
    </div>
  )
}

export default Logos
