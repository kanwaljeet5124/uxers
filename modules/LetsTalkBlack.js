import React from 'react'
import styles from './css/letstalk.module.css'
export default function LetsTalkBlack({type}) {
  if(type==0){
    return (
      <div className='bg-black mt-90'>
          <div className={`container p-relative d-flex d-flex-wrap d-align-center d-justify-space-between ${styles["wrapper"]}`}>
              <div className='z-index-2 d-flex d-flex-wrap d-flex-column'>
                  <span className='font-50 f-700 l-66 text-white'>You Have Problems?,</span>
                  <span className='font-50 f-700 l-66 text-gradient'>we have Solutions.</span>
              </div>
              <button className='col-2'>Let's Talk</button>
              <div className={styles["wave-element"]}>
                  <img src="waveElement.png"/>
              </div>
          </div>
      </div>
    )
  }
  if(type==1){
    return (
    <div className='bg-black mt-90'>
      <div className={`container p-relative d-flex d-flex-wrap d-align-center d-justify-space-between ${styles["wrapper"]}`}>
          <div className='z-index-2 col-7 d-flex d-flex-wrap d-flex-column'>
            <h3 className='f-700 text-white'>Let <span className='text-gradient'>Uxerslab</span>  be Your Partner in Success - build Scalable and <span className='text-gradient'> Smart Web Solutions.</span></h3>
          </div>
          <button className='col-3'>Check our Pricing Page</button>
          <div className={styles["wave-element"]}>
              <img src="waveElement.png"/>
          </div>
      </div>
    </div>)
  }
}
