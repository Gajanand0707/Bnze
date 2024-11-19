import React from 'react'
import './Footer.css'
import Logo from '../assets/logo-white.png'
import Socialicons from '../component/common_components/socialicons/Socialicons'
function Footer() {
    return (
        <div className='Footer'>
            <div className='container_main'>
                <div className='cta_footer text-white flex_column'>
                    <h2 className='flex-1'>Protect Your Devices with
                        Our App Discretion Solutions</h2>
                    <div className='cta_button flex_column flex-1 gap-3 justify-content-end'><button className='button bg-white text-dark' >Download iOS</button>
                        <button className='button border-button bg-transparent '>Download Android</button></div>
                </div>

            </div>
            <footer>
                <div className='container_main'>
                    <div className="row text-white">
                        <div className='col-md-3'>
                            <img src={Logo} alt='Logo' className='mb-3' />
                            <p>Nullam erat diam, varius sit amet pulvinar eu, sollicitudin at orci.</p>
                            <Socialicons />
                        </div>
                        <div className='col-md-3 foter_link_list'>
                            <h5> Company</h5>
                            <ul>
                                <li>Home</li>
                                <li>About</li>
                                <li>Integrations</li>
                                <li>Features</li>
                            </ul>
                        </div>
                        <div className='col-md-3 foter_link_list'>
                            <h5> Company</h5>
                            <ul>
                                <li>Home</li>
                                <li>About</li>
                                <li>Integrations</li>
                                <li>Features</li>
                            </ul>
                        </div>
                        <div className='col-md-3'>
                            <h5> Newsletter </h5>
                            <ul>
                                <li>Subscribe our newsletter to get more free design course and resource.</li>
                                <form >
                                    <div className='subscribe-box'>
                                    <input type='email' placeholder='Enter your email *' />
                                    <input type='submit' />
                                    </div>
                                </form>
                            </ul>
                        </div>
                    </div>
                </div>
            </footer>
        </div>
    )
}

export default Footer
