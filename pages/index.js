import Banner from '../modules/Banner'
import WhatWeDo from '../modules/WhatWeDo'
import WhoWeAre from '../modules/WhoWeAre'
import Footer from '../modules/Footer'
import LetsTalkBlack from '../modules/LetsTalkBlack'
export default function index() {
  return (
    <div className='p-relative'>
      <Banner></Banner>
      <WhoWeAre></WhoWeAre>
      <WhatWeDo></WhatWeDo>
      <LetsTalkBlack/>
      <Footer/>
    </div>
  )
}

