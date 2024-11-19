import React from 'react'
import Commonbanner from '../component/common_components/commonbanner/Commonbanner'
import Service from '../component/common_components/Service.js/Service'
import Playout from '../component/Home/Playout'
import Blog from '../component/common_components/Blog/Blog'
function Servicepage(props) {
  return (
    <div className='Servicepage'>
      <Commonbanner headeing="Services"  />
      <Playout />
      <Service />
      <Blog />
    </div>
  )
}

export default Servicepage
