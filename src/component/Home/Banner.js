import React from 'react'
import Dashboard from '../../assets/Home/dashboard.jpg'
import vector from '../../assets/Home/Vector.png'
function Banner() {
    return (
        <div className='Banner-main'>
            <div className='Banner'>
                <h1 className='text-white text-center mx-auto'>Powerful and easy to use
                    app creation platform</h1>
                <p className='text-white text-center mx-auto'>Web apps are different from traditional desktop applications in that they do not need to be installed on a user's device and can be accessed.</p>

                <div className='buttons d-md-flex gap-4'>
                    <button className='button bg-blue'>Get Started Now</button>
                    <button className='button bg-transparent border-button'>Discover More</button>
                </div>
                <div className='vector'>
                    <img src={vector} alt=' vector' />
                </div>
            </div>
            <div className='Dashboard mx-auto'>
                <div className='image_brop_shodow'>
                    <img src={Dashboard} alt='Dashboard' />
                </div>

            </div>
        </div>
    )
}

export default Banner
