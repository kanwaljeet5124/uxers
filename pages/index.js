import Banner from '../modules/Banner'
import WhatWeDo from '../modules/WhatWeDo'
import WhoWeAre from '../modules/WhoWeAre'
import Footer from '../modules/Footer'
import LetsTalk from '../modules/LetsTalk'
export default function index() {
  return (
    <>
      <Banner></Banner>
      <WhoWeAre></WhoWeAre>
      <WhatWeDo></WhatWeDo>
      <LetsTalk/>
      <Footer/>
    </>
  )
}

