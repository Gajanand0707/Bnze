import React from 'react'
import Playout_img from '../../assets/Home/Playout.png'

function Playout() {
    return (
        <div className='Playout'>
            <div className='Creative_design'>
                <div className='container_main'>
                    <div className='row align-items-center'>
                     
                        <div className=' col-md-6'>
                            <div className='text_Creative_design'>
                                <p className='sub_heading'>Powerful routing & playout</p>
                                <h2>Reach Your Audience
                                Shortest Time</h2>
                                <p>A web app title is the name or title of a web application that is displayed in the web browser's title bar, tab, or bookmark list. The title can also be used to help users find the app when searching for it on their device.</p>
                                
                            <ul className='playout_list'>
                                <li>Revenue by Channel & Devices</li>
                                <div className='line'></div>
                                <li>Visualise Complex Timelines</li>
                                <div className='line'></div>
                                <li>Calendar & Task Management</li>
                            </ul>
                            </div>
                        </div>
                        <div className='col-md-6'>
                            <img src={Playout_img} alt='img_Creative_design' />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Playout
