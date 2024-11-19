import React from 'react'
import Img_Creative_design from '../../assets/Home/Creative_design.png'
function Creativedesign() {
    return (
        <div className='Creative_design'>
            <div className='container_main'>
                <div className='row align-items-center'>
                    <div className='col-md-6'>
                        <img src={Img_Creative_design} alt='img_Creative_design' />
                    </div>
                    <div className=' col-md-6'>
                        <div className='text_Creative_design'>
                            <p className='sub_heading'>Creative Design</p>
                            <h2>Borderless transfers
                                just in a click.</h2>
                            <p>A web app title is the name or title of a web application that is displayed in the web browser's title bar, tab, or bookmark list. The title can also be used to help users find the app when searching for it on their device.</p>
                            <button className='button bg-dark'>Know More</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Creativedesign
