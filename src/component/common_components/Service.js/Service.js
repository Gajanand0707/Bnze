import React from 'react'
import './Service.css'
import Service_img1 from '../../../assets/Home/service-1.jpg'
import { IoWalletOutline } from "react-icons/io5";
import Serviceani from '../../../assets/Home/Service_ani.png'
function
    Service() {
    return (
        <div className='Service text-white'>
            <img src={Serviceani} alt='a' className='Serviceani' />
            <div className='container_main'>
                <div className='headings_text  text-center'>
                    <p className='sub_heading'>Our Service</p>
                    <h2>We bring everything that’s
                        required to build apps </h2>
                    <p>Suspendisse ultrices, velit ut sollicitudin vulputate, magna neque blandit
                        nisl, non auctor elit libero nec augue fusce dui orci.</p>
                </div>
                <div className='Service_boxs row'>
                    <div className='col-md-3'>
                        <div className='Service_box Service_image_1'>
                            <img src={Service_img1} alt='Service_imag' />
                            <div className='d-flex  pt-4 align-items-center gap-3'>
                                <div className='icon_box'>
                                    <IoWalletOutline />
                                </div>

                                <h5>Seamless & Wallet User Experience</h5>
                            </div>
                        </div>
                    </div>
                    <div className='col-md-3'>
                        <div className='Service_box Service_image_2'>
                            <img src={Service_img1} alt='Service_imag' />
                            <div className='d-flex  pt-4 align-items-center gap-3'>
                                <div className='icon_box'>
                                    <IoWalletOutline />
                                </div>

                                <h5>Seamless & Wallet User Experience</h5>
                            </div>
                        </div>
                    </div>
                    <div className='col-md-3'>
                        <div className='Service_box Service_image_3'>
                            <img src={Service_img1} alt='Service_imag' />
                            <div className='d-flex  pt-4 align-items-center gap-3'>
                                <div className='icon_box'>
                                    <IoWalletOutline />
                                </div>

                                <h5>Seamless & Wallet User Experience</h5>
                            </div>
                        </div>
                    </div>
                    <div className='col-md-3'>
                        <div className='Service_box Service_image_4'>
                            <img src={Service_img1} alt='Service_imag' />
                            <div className='d-flex pt-4 align-items-center gap-3 '>
                                <div className='icon_box'>
                                    <IoWalletOutline />
                                </div>

                                <h5>Seamless & Wallet User Experience</h5>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Service
