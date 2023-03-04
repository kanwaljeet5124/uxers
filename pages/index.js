import Banner from '../modules/Banner'
import WhatWeDo from '../modules/WhatWeDo'
import WhoWeAre from '../modules/WhoWeAre'
import Footer from '../modules/Footer'
import LetsTalkBlack from '../modules/LetsTalkBlack'
import Teams from '../modules/Teams'
import HomePageArticles from '../modules/HomePageArticles'
import Slider from '../modules/Slider'
export default function index() {
  return (
    <div className='p-relative'>
      <Banner></Banner>
      <Teams/>
      <WhoWeAre></WhoWeAre>
      <WhatWeDo></WhatWeDo>
      <Slider/>
      <HomePageArticles/>
      <LetsTalkBlack/>
      <Footer/>
    </div>
  )
}

