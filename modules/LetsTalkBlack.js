import React from 'react'
import styles from './css/letstalk.module.css'
export default function LetsTalkBlack() {
  return (
    <div className='bg-black mt-90'>
        <div className={`container p-relative d-flex d-flex-wrap d-align-center d-justify-space-between ${styles["wrapper"]}`}>
            <div className='z-index-2 d-flex d-flex-wrap d-flex-column'>
                <span className='font-50 f-700 l-66 text-white'>You Have Problems?,</span>
                <span className='font-50 f-700 l-66 text-gradient'>we have Solutions.</span>
            </div>
            <button>Let's Talk</button>
            <div className={styles["wave-element"]}>
                <img src="waveElement.png"/>
            </div>
        </div>
    </div>
  )
}
