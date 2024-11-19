import React from 'react'
import Commonbanner from '../component/common_components/commonbanner/Commonbanner'
import Service from '../component/common_components/Service.js/Service'

function Servicepage(props) {
  return (
    <div className='Servicepage'>
      <Commonbanner headeing="Services"  />
      {/* <Service /> */}
    </div>
  )
}

export default Servicepage
