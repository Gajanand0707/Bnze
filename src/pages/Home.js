import React from 'react'
import '../styles/Home.css'
import Banner from '../component/Home/Banner'
import Logos from '../component/common_components/logos/Logos'
import Creativedesign from '../component/Home/Creative_design'
import Service from '../component/common_components/Service.js/Service'
import Playout from '../component/Home/Playout'
import Review from '../component/Home/Review'
import Blog from '../component/common_components/Blog/Blog'
import Footer from '../footer/Footer'
function Home() {
  return (
    <div className='Home'>
      <Banner />
      <Logos />
      <Creativedesign />
      <Service />
      <Playout />
      <Review />
      <Blog />
 
    </div>
  )
}

export default Home
