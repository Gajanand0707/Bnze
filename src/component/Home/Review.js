import React from 'react'
import Sliderclient from '../common_components/slider/slider'
import Thumbs_large from '../../assets/Home/thumbs-large.jpg' 
function Review() {
  return (
    <div className='Review'>
       <div className='Creative_design'>
                <div className='container_main'>
                    <div className='row align-items-center'>
                     
                        <div className=' col-md-6'>
                           <img src={Thumbs_large} alt='thumbs-large' className='rounded' />
                        </div>
                        <div className='col-md-6'>
                            <div className='slider_Review'>
                           <Sliderclient />
                           </div>
                        </div>
                    </div>
                </div>
            </div>
    </div>
  )
}

export default Review
