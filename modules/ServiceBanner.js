import React from 'react'
import Header from './Header'
import styles from './css/banner.module.css'
export default function ServiceBanner() {
  return (
    <div className='bg-sky d-flex d-flex-wrap d-justify-center mb-5'>
        <Header/>
        <div className='container d-flex d-flex-wrap d-align-start pt-5'>
            <div className='col-7 mt-90 d-flex d-flex-wrap pt-5'>
                <h6 className='text-primary l-27 m-0 mb-2 f-500 '>What We Do</h6>
                <h2 className={`col-12 f-400 l-55`}>
                    Qualified Web Development <span className='f-700  text-gradient'>Services </span>Company
                </h2>
                <h5 className='f-400 l-27 text-grey mt-4 col-11'>Our team of experienced developers specializes in developing custom themes and plugins tailored to your needs. We take pride in our ability to deliver quality results on time and ensure that your website is everything you hoped for.</h5>
                <button className='btn bg-dark col-7 d-align-center text-white mt-4 pb-4 d-flex d-flex-wrap d-justify-space-between'>
                    Check Our Introduced Package
                    <svg width="5" height="11" viewBox="0 0 5 11" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M0.96835 10.9463L-1.56415e-06 9.79808L3.62978 5.4999L-1.84309e-07 1.20171L0.971097 0.053467L4.59813 4.35166C4.85545 4.65622 5 5.06924 5 5.4999C5 5.93055 4.85545 6.34357 4.59813 6.64814L0.96835 10.9463Z" fill="white"/>
                    </svg>
                </button>
                <div className='col-11  d-flex d-flex-wrap d-justify-space-between mt-5'>
                    <div className='col-6 '>
                        <img src="clutch.png" alt="rating"/>
                        <h5 className='f-400 l-27 text-grey mt-2'>We are rated <span className='text-black f-700'>4.5</span> out of 5 on average across 321 reviews</h5>
                    </div>
                    <div className='col-6 pl-3'>
                        <img src="trust.png" alt="rating"/>
                        <h5 className='f-400 l-27 text-grey mt-2'>We are rated <span className='text-black f-700'>4.5</span> out of 5 on average across 321 reviews</h5>
                    </div>
                </div>
            </div>
            <div className='col-5 pt-5 mt-50 '>
                <div className='col-12 bg-white pb-5 d-flex d-flex-wrap d-justify-center'>
                    <div className={`col-10 ${styles["service-form"]}`}>
                        <h3 className={` f-400 l-36  pt-5`}>
                            Want to kickstart your<br/> <span className='f-700 text-gradient'>Web development </span>project?
                        </h3>
                        <input type="text" placeholder='Name' />
                        <input type="email" placeholder='Email' />
                        <input type="number" placeholder='Phone' />
                        <h5 className='f-600 l-27 text-black mt-4'>How soon do you want to start the project?<span className="text-gradient">*</span></h5>
                        <select>
                            <option>Within 8 Weeks</option>
                            <option>Within 10 Weeks</option>
                            <option>Within 12 Weeks</option>

                        </select>
                        <input type="text" placeholder='Share your Requirement' />
                        <button className='btn bg-black text-white mt-4'>Submit</button>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}
