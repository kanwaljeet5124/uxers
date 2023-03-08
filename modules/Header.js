import LetsTalkModal from "./LetsTalkModal"
import { useState } from "react"
import styles from './css/header.module.css'
import Link from "next/link"
export default function Header() {
  const [talkModal,setTalkModal] = useState(false)
  const talkModalHandler = () => {
      setTalkModal(prev => !prev)
  }
  return (
    <div className={`${styles["header"]} d-flex d-flex-wrap d-align-center d-justify-space-between`}>
      <div className={`container d-flex d-flex-wrap d-align-center d-justify-space-between`}>
          <Link href="/"><img src="logo-head.png" alt='uxerslab' className="cursor-pointer"/></Link>
          <div className='d-flex d-flex-wrap d-align-center z-index-2'>
              <Link href="services"><h5 className='f-500 l-21 text-primary pl-5 pr-5 cursor-pointer'>Services</h5></Link>
              <h5 className='f-500 l-21 text-primary pl-5 pr-5'>About</h5>
              <h5 className='f-500 l-21 text-primary pl-5 pr-5'>Resources</h5>
              <h5 className='f-500 l-21 text-primary pl-5 pr-5'>Pricing</h5>
              <h5 className='btn-primary-outline f-500 l-21 text-primary ml-2 mr-5 cursor-pointer' onClick={talkModalHandler}>Let's talk</h5>
              <img src="search.svg" alt="search" className='ml-2'/>
          </div>
          {talkModal && <LetsTalkModal handler={talkModalHandler} />}
      </div>
    </div>
  )
}
