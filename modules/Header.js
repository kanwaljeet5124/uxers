import LetsTalkModal from "./LetsTalkModal"
import { useState } from "react"
import styles from './css/header.module.css'
export default function Header() {
  const [talkModal,setTalkModal] = useState(false)
  const talkModalHandler = () => {
      setTalkModal(prev => !prev)
  }
  return (
    <div className={`${styles["header"]} d-flex d-flex-wrap d-align-center d-justify-space-between`}>
      <div className={`container d-flex d-flex-wrap d-align-center d-justify-space-between`}>
          <img src="logo-head.png" alt='uxerslab'/>
          <div className='d-flex d-flex-wrap d-align-center z-index-2'>
              <h5 className='f-500 l-21 text-primary pl-2 pr-2'>what we do</h5>
              <h5 className='f-500 l-21 text-primary pl-2 pr-2'>who we are</h5>
              <h5 className='f-500 l-21 text-primary pl-2 pr-2'>our work</h5>
              <h5 className='btn-primary-outline f-500 l-21 text-primary ml-2 mr-2 cursor-pointer' onClick={talkModalHandler}>Let's talk</h5>
              <img src="search.svg" alt="search" className='ml-2'/>
          </div>
          {talkModal && <LetsTalkModal handler={talkModalHandler} />}
      </div>
    </div>
  )
}
