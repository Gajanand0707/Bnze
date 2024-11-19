import React from 'react'
import Commonbanner from '../component/common_components/commonbanner/Commonbanner'
import Blog from '../component/common_components/Blog/Blog'
import Form from '../component/Form/Form'

function Contact() {
  return (
    <div className='Contact'>
      <Commonbanner headeing="Contact us"  />
      <Form />
      <Blog />
    </div>
  )
}

export default Contact
