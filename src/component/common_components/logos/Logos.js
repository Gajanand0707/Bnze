import React from 'react'
import './Logos.css'
import Brand_logo1 from '../../../assets/Logos/brand-logo-1.png'
import Brand_logo2 from '../../../assets/Logos/brand-logo-2.png'
import Brand_logo3 from '../../../assets/Logos/brand-logo-3.png'
import Brand_logo4 from '../../../assets/Logos/brand-logo-4.png'
import Brand_logo5 from '../../../assets/Logos/brand-logo-5.png'
import Brand_logo6 from '../../../assets/Logos/brand-logo-6.png'
import Brand_logo7 from '../../../assets/Logos/brand-logo-7.png'
import Slider from 'react-slick';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

function Logos() {
  const settings = {
    dots: true,                  // Show navigation dots
    infinite: true,              // Loop back to start
    speed: 500,                  // Transition speed
    slidesToShow: 8,             // Number of slides to show at once
    slidesToScroll: 1,           // Number of slides to scroll at once
    autoplay: true,              // Autoplay enabled
    autoplaySpeed: 2000,         // Autoplay speed in milliseconds

    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow:6,
          slidesToScroll: 1,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
        },
      },
    ],
  };
  return (
    <div className='Logos text-center'>
      <h4>❤️ Trusted By Companies All Over The World </h4>
      <div className='brand_logo pt-5 '>
        <Slider {...settings}>
          <div className='logo_box '> <img src={Brand_logo1} alt='brand_logo' /> </div>
          <div className='logo_box'> <img src={Brand_logo2} alt='brand_logo' /> </div>
          <div className='logo_box'> <img src={Brand_logo3} alt='brand_logo' /> </div>
          <div className='logo_box'> <img src={Brand_logo4} alt='brand_logo' /> </div>
          <div className='logo_box'> <img src={Brand_logo5} alt='brand_logo' /> </div>
          <div className='logo_box'> <img src={Brand_logo6} alt='brand_logo' /> </div>
          <div className='logo_box'> <img src={Brand_logo7} alt='brand_logo' /> </div>





        </Slider>


      </div>
    </div>
  )
}

export default Logos
