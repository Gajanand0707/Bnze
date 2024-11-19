import React from 'react';
import Slider from 'react-slick';
import './Slider.css';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import client_img from '../../../assets/Home/client-thumbs-2.png'
import Socialicons from '../socialicons/Socialicons';


function Sliderclient() {
    const settings = {
        dots: true,                  // Show navigation dots
        infinite: true,              // Loop back to start
        speed: 500,                  // Transition speed
        slidesToShow: 1,             // Number of slides to show at once
        slidesToScroll: 1,           // Number of slides to scroll at once
        autoplay: true,              // Autoplay enabled
        autoplaySpeed: 2000,         // Autoplay speed in milliseconds

        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    infinite: true,
                    dots: true,
                },
            },
            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                },
            },
        ],
    };

    return (
        <div className="slider-container text-white">
            <Slider {...settings}>
                <div>
                    <div className='slider_box'>
                        <p className='author_bio'>“Working with Nazmul has been an absolute pleasure. Their team of skilled professionals is not only knowledgeable in their field but also dedicated to  providing top-notch service and support. They took the time to understand our unique needs and exceeded our expectations. I can recommend Nazmul highly enough for any business seeking innovation.”</p>

                        <div className="author-info">
                            <div className="author-profile ">
                                <div className="author-thumb">
                                    <img src={client_img} alt="thumbs" />
                                </div>
                                <div className="author-title">
                                    <h4 className='mb-0'>Miles Tone</h4>
                                    <p className='mb-0'>App Development</p>
                                </div>
                            </div>
                            <Socialicons />
                        </div>
                    </div>
                </div>
                <div>
                    <div className='slider_box'>
                        <p className='author_bio'>“Working with Nazmul has been an absolute pleasure. Their team of skilled professionals is not only knowledgeable in their field but also dedicated to  providing top-notch service and support. They took the time to understand our unique needs and exceeded our expectations. I can recommend Nazmul highly enough for any business seeking innovation.”</p>

                        <div className="author-info">
                            <div className="author-profile ">
                                <div className="author-thumb">
                                    <img src={client_img} alt="thumbs" />
                                </div>
                                <div className="author-title">
                                    <h4 className='mb-0'>Miles Tone</h4>
                                    <p className='mb-0'>App Development</p>
                                </div>
                            </div>
                            <Socialicons />
                        </div>
                    </div>
                </div>
                <div>
                    <div className='slider_box'>
                        <p className='author_bio'>“Working with Nazmul has been an absolute pleasure. Their team of skilled professionals is not only knowledgeable in their field but also dedicated to  providing top-notch service and support. They took the time to understand our unique needs and exceeded our expectations. I can recommend Nazmul highly enough for any business seeking innovation.”</p>

                        <div className="author-info">
                            <div className="author-profile ">
                                <div className="author-thumb">
                                    <img src={client_img} alt="thumbs" />
                                </div>
                                <div className="author-title">
                                    <h4 className='mb-0'>Miles Tone</h4>
                                    <p className='mb-0'>App Development</p>
                                </div>
                            </div>
                            <Socialicons />
                        </div>
                    </div>
                </div>
                <div>
                    <div className='slider_box'>
                        <p className='author_bio'>“Working with Nazmul has been an absolute pleasure. Their team of skilled professionals is not only knowledgeable in their field but also dedicated to  providing top-notch service and support. They took the time to understand our unique needs and exceeded our expectations. I can recommend Nazmul highly enough for any business seeking innovation.”</p>

                        <div className="author-info">
                            <div className="author-profile ">
                                <div className="author-thumb">
                                    <img src={client_img} alt="thumbs" />
                                </div>
                                <div className="author-title">
                                    <h4 className='mb-0'>Miles Tone</h4>
                                    <p className='mb-0'>App Development</p>
                                </div>
                            </div>
                            <Socialicons />
                        </div>
                    </div>
                </div>
                {/* Add more slides as needed */}
            </Slider>
        </div>
    );
}

export default Sliderclient;
