import React from 'react'
import './Commonbanner.css'
function Commonbanner(props) {
    return (
        <div className='Commonbanner text-white text-center'>
            <h2 className='mb-4'>{props.headeing}</h2>
            <p className='sub_heading d-flex gap-3 justify-content-center'> <span className='text-white'>Home </span><span> |  </span> <span>{props.headeing} </span></p>
        </div>
    )
}

export default Commonbanner
