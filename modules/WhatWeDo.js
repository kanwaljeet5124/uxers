import styles from './css/whatwedo.module.css'
import SectionHeading from './SectionHeading'
import { useRef,useState } from 'react'
export default function WhatWeDo() {
    const tabRef = useRef(null)
    const allSubTypeRef = useRef(null)
    const webSubTypeRef = useRef(null)
    const [typeTab, setTypeTab] = useState("all")
    const [allSubType, setAllSubType] = useState("web")
    const [webSubType, setWebSubType] = useState("react")
    const typeTabHandler = (e) => {
        tabRef.current.querySelectorAll("h5").forEach((item)=>{
            item.classList.remove(styles.active)
        })
        e.currentTarget.classList.add(styles.active)
        setTypeTab(e.currentTarget.getAttribute("value"))
    }
    const allSubTypeHandler = (e) => {
        allSubTypeRef.current.querySelectorAll("div").forEach((item)=>{
            item.classList.remove(styles.active)
        })
        e.currentTarget.classList.add(styles.active)
        setAllSubType(e.currentTarget.getAttribute("value"))
    }
    const webSubTypeHandler = (e) => {
        webSubTypeRef.current.querySelectorAll("div").forEach((item)=>{
            item.classList.remove(styles.active)
        })
        e.currentTarget.classList.add(styles.active)
        setWebSubType(e.currentTarget.getAttribute("value"))
    }
  return (
    <div className='section'>
        <div className='container d-flex d-flex-wrap d-justify-center'>
            <div className='col-10'>
                <SectionHeading classes="text-align-center" badge="What We Do" title="Talent  and  Teamwork " highlight="Win"></SectionHeading>
                <p className='text-align-center text-grey mb-5'>We source, vet & deploy the top marketing & technology professionals India has to offer. Global companies hire from Uplers to make their hiring faster, easier & cost-effective.</p>
            </div>
            <div ref={tabRef} className={`col-12 d-flex d-flex-wrap d-justify-space-between ${styles["type-tabs"]}`}>
                <h5 value="all" className={`f-500 l-27 text-grey cursor-pointer p-1 rounded-20 ${styles["active"]}`} onClick={typeTabHandler}>All</h5>
                <h5 value="web" className='f-500 l-27 text-grey cursor-pointer p-1 rounded-20' onClick={typeTabHandler}>Web Development</h5>
                <h5 value="digital" className='f-500 l-27 text-grey cursor-pointer p-1 rounded-20' onClick={typeTabHandler}>Digital Marketing</h5>
                <h5 value="analytics" className='f-500 l-27 cursor-pointer text-grey p-1 rounded-20' onClick={typeTabHandler}>Data Analyticis</h5>
                <h5 value="ui" className='f-500 l-27 cursor-pointer text-grey p-1 rounded-20' onClick={typeTabHandler}>UI/UX designers</h5>
                <h5 value="app" className='f-500 l-27 cursor-pointer text-grey p-1 rounded-20' onClick={typeTabHandler}>App Development</h5>
            </div>
            {typeTab == "all" && <div className={`col-12 d-flex d-flex-wrap mt-5 ${styles["service_detail"]}`}>
                <div ref={allSubTypeRef} className={`col-5 d-flex d-flex-column ${styles["left_section"]}`}>
                    <div value="web" className={`d-flex d-align-center d-justify-space-between text-grey ${styles["active"]}`} onClick={allSubTypeHandler}>
                        <span>Web design Services</span> 
                        <svg width="18" height="10" viewBox="0 0 18 10" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M13.3422 1.99904L16.0664 4.72403L-2.29768e-07 4.74353L-1.64195e-07 6.24367L16.0567 6.22416L13.3414 8.9394L14.4013 10L17.3408 7.06049C17.5498 6.85153 17.7156 6.60345 17.8287 6.33042C17.9418 6.05739 18 5.76475 18 5.46922C18 5.17369 17.9418 4.88105 17.8287 4.60802C17.7156 4.33499 17.5498 4.08691 17.3408 3.87795L14.4013 0.938442L13.3422 1.99904Z" fill="white"/>
                        </svg>
                    </div>
                    <div value="app" className='d-flex d-align-center d-justify-space-between text-grey' onClick={allSubTypeHandler}>
                        <span>Mobile app UI/UX services</span> 
                        <svg width="18" height="10" viewBox="0 0 18 10" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M13.3422 1.99904L16.0664 4.72403L-2.29768e-07 4.74353L-1.64195e-07 6.24367L16.0567 6.22416L13.3414 8.9394L14.4013 10L17.3408 7.06049C17.5498 6.85153 17.7156 6.60345 17.8287 6.33042C17.9418 6.05739 18 5.76475 18 5.46922C18 5.17369 17.9418 4.88105 17.8287 4.60802C17.7156 4.33499 17.5498 4.08691 17.3408 3.87795L14.4013 0.938442L13.3422 1.99904Z" fill="white"/>
                        </svg>
                    </div>
                    <div value="ui" className='d-flex d-align-center d-justify-space-between text-grey' onClick={allSubTypeHandler}>
                        <span>UI/UX Consulting</span> 
                        <svg width="18" height="10" viewBox="0 0 18 10" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M13.3422 1.99904L16.0664 4.72403L-2.29768e-07 4.74353L-1.64195e-07 6.24367L16.0567 6.22416L13.3414 8.9394L14.4013 10L17.3408 7.06049C17.5498 6.85153 17.7156 6.60345 17.8287 6.33042C17.9418 6.05739 18 5.76475 18 5.46922C18 5.17369 17.9418 4.88105 17.8287 4.60802C17.7156 4.33499 17.5498 4.08691 17.3408 3.87795L14.4013 0.938442L13.3422 1.99904Z" fill="white"/>
                        </svg>
                    </div>
                    <div value="graphic" className='d-flex d-align-center d-justify-space-between text-grey' onClick={allSubTypeHandler}>
                        <span>Graphic Design</span> 
                        <svg width="18" height="10" viewBox="0 0 18 10" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M13.3422 1.99904L16.0664 4.72403L-2.29768e-07 4.74353L-1.64195e-07 6.24367L16.0567 6.22416L13.3414 8.9394L14.4013 10L17.3408 7.06049C17.5498 6.85153 17.7156 6.60345 17.8287 6.33042C17.9418 6.05739 18 5.76475 18 5.46922C18 5.17369 17.9418 4.88105 17.8287 4.60802C17.7156 4.33499 17.5498 4.08691 17.3408 3.87795L14.4013 0.938442L13.3422 1.99904Z" fill="white"/>
                        </svg>
                    </div>
                    <div value="design" className='d-flex d-align-center d-justify-space-between text-grey' onClick={allSubTypeHandler}>
                        <span>Web design services</span> 
                        <svg width="18" height="10" viewBox="0 0 18 10" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M13.3422 1.99904L16.0664 4.72403L-2.29768e-07 4.74353L-1.64195e-07 6.24367L16.0567 6.22416L13.3414 8.9394L14.4013 10L17.3408 7.06049C17.5498 6.85153 17.7156 6.60345 17.8287 6.33042C17.9418 6.05739 18 5.76475 18 5.46922C18 5.17369 17.9418 4.88105 17.8287 4.60802C17.7156 4.33499 17.5498 4.08691 17.3408 3.87795L14.4013 0.938442L13.3422 1.99904Z" fill="white"/>
                        </svg>
                    </div>
                    <div value="front" className='d-flex d-align-center d-justify-space-between text-grey' onClick={allSubTypeHandler}>
                        <span>Front End Development</span> 
                        <svg width="18" height="10" viewBox="0 0 18 10" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M13.3422 1.99904L16.0664 4.72403L-2.29768e-07 4.74353L-1.64195e-07 6.24367L16.0567 6.22416L13.3414 8.9394L14.4013 10L17.3408 7.06049C17.5498 6.85153 17.7156 6.60345 17.8287 6.33042C17.9418 6.05739 18 5.76475 18 5.46922C18 5.17369 17.9418 4.88105 17.8287 4.60802C17.7156 4.33499 17.5498 4.08691 17.3408 3.87795L14.4013 0.938442L13.3422 1.99904Z" fill="white"/>
                        </svg>
                    </div>
                </div>
                <div className={`col-7 ${styles["right_section"]}`}>
                    {allSubType == "web" && <>
                        <h2 className='f-400 l-55 mb-4'>
                            Web Design Services
                        </h2>
                        <p className='l-27 text-black'>
                            From expertise-based services to becoming a one-stop-solution for all talent needs, Uplers has indeed come a long way. We make it easy for businesses to find the most talented developers, designers and marketers as per their needs faster and more efficiently.
                        </p>
                        <p className='l-27 text-black mt-2'>
                            From expertise-based services to becoming a one-stop-solution for all talent needs, Uplers has indeed come a long way.
                        </p>

                        <a href='#' className='btn btn-primary'>Check Our Introduced Package</a>
                        <h4 className='l-35 f-400 mt-5'>
                            Review’s Specific to this Services
                        </h4>
                        <img className='mt-4 mr-4' src="Service-Review.png" alt="Service Specific Review"/>
                        <img className='mt-4' src="Service-Review.png" alt="Service Specific Review"/>
                    </>}
                    {allSubType == "app" && <>
                        <h2 className='f-400 l-55 mb-4'>
                            App Design Services
                        </h2>
                        <p className='l-27 text-black'>
                            From expertise-based services to becoming a one-stop-solution for all talent needs, Uplers has indeed come a long way. We make it easy for businesses to find the most talented developers, designers and marketers as per their needs faster and more efficiently.
                        </p>
                        <p className='l-27 text-black mt-2'>
                            From expertise-based services to becoming a one-stop-solution for all talent needs, Uplers has indeed come a long way.
                        </p>

                        <a href='#' className='btn btn-primary'>Check Our Introduced Package</a>
                        <h4 className='l-35 f-400 mt-5'>
                            Review’s Specific to this Services
                        </h4>
                        <img className='mt-4 mr-4' src="Service-Review.png" alt="Service Specific Review"/>
                        <img className='mt-4' src="Service-Review.png" alt="Service Specific Review"/>
                    </>}
                    {allSubType == "ui" && <>
                        <h2 className='f-400 l-55 mb-4'>
                            UI/UX Design Services
                        </h2>
                        <p className='l-27 text-black'>
                            From expertise-based services to becoming a one-stop-solution for all talent needs, Uplers has indeed come a long way. We make it easy for businesses to find the most talented developers, designers and marketers as per their needs faster and more efficiently.
                        </p>
                        <p className='l-27 text-black mt-2'>
                            From expertise-based services to becoming a one-stop-solution for all talent needs, Uplers has indeed come a long way.
                        </p>

                        <a href='#' className='btn btn-primary'>Check Our Introduced Package</a>
                        <h4 className='l-35 f-400 mt-5'>
                            Review’s Specific to this Services
                        </h4>
                        <img className='mt-4 mr-4' src="Service-Review.png" alt="Service Specific Review"/>
                        <img className='mt-4' src="Service-Review.png" alt="Service Specific Review"/>
                    </>}
                    {allSubType == "graphic" && <>
                        <h2 className='f-400 l-55 mb-4'>
                            Graphic Design Services
                        </h2>
                        <p className='l-27 text-black'>
                            From expertise-based services to becoming a one-stop-solution for all talent needs, Uplers has indeed come a long way. We make it easy for businesses to find the most talented developers, designers and marketers as per their needs faster and more efficiently.
                        </p>
                        <p className='l-27 text-black mt-2'>
                            From expertise-based services to becoming a one-stop-solution for all talent needs, Uplers has indeed come a long way.
                        </p>

                        <a href='#' className='btn btn-primary'>Check Our Introduced Package</a>
                        <h4 className='l-35 f-400 mt-5'>
                            Review’s Specific to this Services
                        </h4>
                        <img className='mt-4 mr-4' src="Service-Review.png" alt="Service Specific Review"/>
                        <img className='mt-4' src="Service-Review.png" alt="Service Specific Review"/>
                    </>}
                    {allSubType == "design" && <>
                        <h2 className='f-400 l-55 mb-4'>
                            Web Design Services
                        </h2>
                        <p className='l-27 text-black'>
                            From expertise-based services to becoming a one-stop-solution for all talent needs, Uplers has indeed come a long way. We make it easy for businesses to find the most talented developers, designers and marketers as per their needs faster and more efficiently.
                        </p>
                        <p className='l-27 text-black mt-2'>
                            From expertise-based services to becoming a one-stop-solution for all talent needs, Uplers has indeed come a long way.
                        </p>

                        <a href='#' className='btn btn-primary'>Check Our Introduced Package</a>
                        <h4 className='l-35 f-400 mt-5'>
                            Review’s Specific to this Services
                        </h4>
                        <img className='mt-4 mr-4' src="Service-Review.png" alt="Service Specific Review"/>
                        <img className='mt-4' src="Service-Review.png" alt="Service Specific Review"/>
                    </>}
                    {allSubType == "front" && <>
                        <h2 className='f-400 l-55 mb-4'>
                            Frontend Services
                        </h2>
                        <p className='l-27 text-black'>
                            From expertise-based services to becoming a one-stop-solution for all talent needs, Uplers has indeed come a long way. We make it easy for businesses to find the most talented developers, designers and marketers as per their needs faster and more efficiently.
                        </p>
                        <p className='l-27 text-black mt-2'>
                            From expertise-based services to becoming a one-stop-solution for all talent needs, Uplers has indeed come a long way.
                        </p>

                        <a href='#' className='btn btn-primary'>Check Our Introduced Package</a>
                        <h4 className='l-35 f-400 mt-5'>
                            Review’s Specific to this Services
                        </h4>
                        <img className='mt-4 mr-4' src="Service-Review.png" alt="Service Specific Review"/>
                        <img className='mt-4' src="Service-Review.png" alt="Service Specific Review"/>
                    </>}
                </div>
            </div>}
            {typeTab == "web" && <div className={`col-12 d-flex d-flex-wrap mt-5 ${styles["service_detail"]}`}>
                <div ref={webSubTypeRef} className={`col-5 d-flex d-flex-column ${styles["left_section"]}`}>
                    <div value="react" className={`d-flex d-align-center d-justify-space-between text-grey ${styles["active"]}`} onClick={allSubTypeHandler}>
                        <span>React</span> 
                        <svg width="18" height="10" viewBox="0 0 18 10" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M13.3422 1.99904L16.0664 4.72403L-2.29768e-07 4.74353L-1.64195e-07 6.24367L16.0567 6.22416L13.3414 8.9394L14.4013 10L17.3408 7.06049C17.5498 6.85153 17.7156 6.60345 17.8287 6.33042C17.9418 6.05739 18 5.76475 18 5.46922C18 5.17369 17.9418 4.88105 17.8287 4.60802C17.7156 4.33499 17.5498 4.08691 17.3408 3.87795L14.4013 0.938442L13.3422 1.99904Z" fill="white"/>
                        </svg>
                    </div>
                    <div value="next" className='d-flex d-align-center d-justify-space-between text-grey' onClick={allSubTypeHandler}>
                        <span>Next JS</span> 
                        <svg width="18" height="10" viewBox="0 0 18 10" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M13.3422 1.99904L16.0664 4.72403L-2.29768e-07 4.74353L-1.64195e-07 6.24367L16.0567 6.22416L13.3414 8.9394L14.4013 10L17.3408 7.06049C17.5498 6.85153 17.7156 6.60345 17.8287 6.33042C17.9418 6.05739 18 5.76475 18 5.46922C18 5.17369 17.9418 4.88105 17.8287 4.60802C17.7156 4.33499 17.5498 4.08691 17.3408 3.87795L14.4013 0.938442L13.3422 1.99904Z" fill="white"/>
                        </svg>
                    </div>
                    <div value="three" className='d-flex d-align-center d-justify-space-between text-grey' onClick={allSubTypeHandler}>
                        <span>Three JS</span> 
                        <svg width="18" height="10" viewBox="0 0 18 10" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M13.3422 1.99904L16.0664 4.72403L-2.29768e-07 4.74353L-1.64195e-07 6.24367L16.0567 6.22416L13.3414 8.9394L14.4013 10L17.3408 7.06049C17.5498 6.85153 17.7156 6.60345 17.8287 6.33042C17.9418 6.05739 18 5.76475 18 5.46922C18 5.17369 17.9418 4.88105 17.8287 4.60802C17.7156 4.33499 17.5498 4.08691 17.3408 3.87795L14.4013 0.938442L13.3422 1.99904Z" fill="white"/>
                        </svg>
                    </div>
                    <div value="vue" className='d-flex d-align-center d-justify-space-between text-grey' onClick={allSubTypeHandler}>
                        <span>Vue</span> 
                        <svg width="18" height="10" viewBox="0 0 18 10" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M13.3422 1.99904L16.0664 4.72403L-2.29768e-07 4.74353L-1.64195e-07 6.24367L16.0567 6.22416L13.3414 8.9394L14.4013 10L17.3408 7.06049C17.5498 6.85153 17.7156 6.60345 17.8287 6.33042C17.9418 6.05739 18 5.76475 18 5.46922C18 5.17369 17.9418 4.88105 17.8287 4.60802C17.7156 4.33499 17.5498 4.08691 17.3408 3.87795L14.4013 0.938442L13.3422 1.99904Z" fill="white"/>
                        </svg>
                    </div>
                    <div value="html" className='d-flex d-align-center d-justify-space-between text-grey' onClick={allSubTypeHandler}>
                        <span>HTML</span> 
                        <svg width="18" height="10" viewBox="0 0 18 10" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M13.3422 1.99904L16.0664 4.72403L-2.29768e-07 4.74353L-1.64195e-07 6.24367L16.0567 6.22416L13.3414 8.9394L14.4013 10L17.3408 7.06049C17.5498 6.85153 17.7156 6.60345 17.8287 6.33042C17.9418 6.05739 18 5.76475 18 5.46922C18 5.17369 17.9418 4.88105 17.8287 4.60802C17.7156 4.33499 17.5498 4.08691 17.3408 3.87795L14.4013 0.938442L13.3422 1.99904Z" fill="white"/>
                        </svg>
                    </div>
                    
                </div>
                <div className={`col-7 ${styles["right_section"]}`}>
                    {webSubType == "react" && <>
                        <h2 className='f-400 l-55 mb-4'>
                            React Services
                        </h2>
                        <p className='l-27 text-black'>
                            From expertise-based services to becoming a one-stop-solution for all talent needs, Uplers has indeed come a long way. We make it easy for businesses to find the most talented developers, designers and marketers as per their needs faster and more efficiently.
                        </p>
                        <p className='l-27 text-black mt-2'>
                            From expertise-based services to becoming a one-stop-solution for all talent needs, Uplers has indeed come a long way.
                        </p>

                        <a href='#' className='btn btn-primary'>Check Our Introduced Package</a>
                        <h4 className='l-35 f-400 mt-5'>
                            Review’s Specific to this Services
                        </h4>
                        <img className='mt-4 mr-4' src="Service-Review.png" alt="Service Specific Review"/>
                        <img className='mt-4' src="Service-Review.png" alt="Service Specific Review"/>
                    </>}
                    {webSubType == "next" && <>
                        <h2 className='f-400 l-55 mb-4'>
                            Next js Services
                        </h2>
                        <p className='l-27 text-black'>
                            From expertise-based services to becoming a one-stop-solution for all talent needs, Uplers has indeed come a long way. We make it easy for businesses to find the most talented developers, designers and marketers as per their needs faster and more efficiently.
                        </p>
                        <p className='l-27 text-black mt-2'>
                            From expertise-based services to becoming a one-stop-solution for all talent needs, Uplers has indeed come a long way.
                        </p>

                        <a href='#' className='btn btn-primary'>Check Our Introduced Package</a>
                        <h4 className='l-35 f-400 mt-5'>
                            Review’s Specific to this Services
                        </h4>
                        <img className='mt-4 mr-4' src="Service-Review.png" alt="Service Specific Review"/>
                        <img className='mt-4' src="Service-Review.png" alt="Service Specific Review"/>
                    </>}
                    {webSubType == "three" && <>
                        <h2 className='f-400 l-55 mb-4'>
                            Three JS Services
                        </h2>
                        <p className='l-27 text-black'>
                            From expertise-based services to becoming a one-stop-solution for all talent needs, Uplers has indeed come a long way. We make it easy for businesses to find the most talented developers, designers and marketers as per their needs faster and more efficiently.
                        </p>
                        <p className='l-27 text-black mt-2'>
                            From expertise-based services to becoming a one-stop-solution for all talent needs, Uplers has indeed come a long way.
                        </p>

                        <a href='#' className='btn btn-primary'>Check Our Introduced Package</a>
                        <h4 className='l-35 f-400 mt-5'>
                            Review’s Specific to this Services
                        </h4>
                        <img className='mt-4 mr-4' src="Service-Review.png" alt="Service Specific Review"/>
                        <img className='mt-4' src="Service-Review.png" alt="Service Specific Review"/>
                    </>}
                    {webSubType == "html" && <>
                        <h2 className='f-400 l-55 mb-4'>
                            HTML Design Services
                        </h2>
                        <p className='l-27 text-black'>
                            From expertise-based services to becoming a one-stop-solution for all talent needs, Uplers has indeed come a long way. We make it easy for businesses to find the most talented developers, designers and marketers as per their needs faster and more efficiently.
                        </p>
                        <p className='l-27 text-black mt-2'>
                            From expertise-based services to becoming a one-stop-solution for all talent needs, Uplers has indeed come a long way.
                        </p>

                        <a href='#' className='btn btn-primary'>Check Our Introduced Package</a>
                        <h4 className='l-35 f-400 mt-5'>
                            Review’s Specific to this Services
                        </h4>
                        <img className='mt-4 mr-4' src="Service-Review.png" alt="Service Specific Review"/>
                        <img className='mt-4' src="Service-Review.png" alt="Service Specific Review"/>
                    </>}
                    {webSubType == "vue" && <>
                        <h2 className='f-400 l-55 mb-4'>
                            Vue Services
                        </h2>
                        <p className='l-27 text-black'>
                            From expertise-based services to becoming a one-stop-solution for all talent needs, Uplers has indeed come a long way. We make it easy for businesses to find the most talented developers, designers and marketers as per their needs faster and more efficiently.
                        </p>
                        <p className='l-27 text-black mt-2'>
                            From expertise-based services to becoming a one-stop-solution for all talent needs, Uplers has indeed come a long way.
                        </p>

                        <a href='#' className='btn btn-primary'>Check Our Introduced Package</a>
                        <h4 className='l-35 f-400 mt-5'>
                            Review’s Specific to this Services
                        </h4>
                        <img className='mt-4 mr-4' src="Service-Review.png" alt="Service Specific Review"/>
                        <img className='mt-4' src="Service-Review.png" alt="Service Specific Review"/>
                    </>}
                </div>
            </div>}
            {typeTab == "digital" && <div className={`col-12 d-flex d-flex-wrap mt-5 ${styles["service_detail"]}`}>
                <div ref={allSubTypeRef} className={`col-5 d-flex d-flex-column ${styles["left_section"]}`}>
                    <div value="web" className='d-flex d-align-center d-justify-space-between text-grey' onClick={allSubTypeHandler}>
                        <span>Web design Services</span> 
                        <svg width="18" height="10" viewBox="0 0 18 10" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M13.3422 1.99904L16.0664 4.72403L-2.29768e-07 4.74353L-1.64195e-07 6.24367L16.0567 6.22416L13.3414 8.9394L14.4013 10L17.3408 7.06049C17.5498 6.85153 17.7156 6.60345 17.8287 6.33042C17.9418 6.05739 18 5.76475 18 5.46922C18 5.17369 17.9418 4.88105 17.8287 4.60802C17.7156 4.33499 17.5498 4.08691 17.3408 3.87795L14.4013 0.938442L13.3422 1.99904Z" fill="white"/>
                        </svg>
                    </div>
                    <div value="app" className='d-flex d-align-center d-justify-space-between text-grey' onClick={allSubTypeHandler}>
                        <span>Mobile app UI/UX services</span> 
                        <svg width="18" height="10" viewBox="0 0 18 10" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M13.3422 1.99904L16.0664 4.72403L-2.29768e-07 4.74353L-1.64195e-07 6.24367L16.0567 6.22416L13.3414 8.9394L14.4013 10L17.3408 7.06049C17.5498 6.85153 17.7156 6.60345 17.8287 6.33042C17.9418 6.05739 18 5.76475 18 5.46922C18 5.17369 17.9418 4.88105 17.8287 4.60802C17.7156 4.33499 17.5498 4.08691 17.3408 3.87795L14.4013 0.938442L13.3422 1.99904Z" fill="white"/>
                        </svg>
                    </div>
                    <div value="ui" className='d-flex d-align-center d-justify-space-between text-grey' onClick={allSubTypeHandler}>
                        <span>UI/UX Consulting</span> 
                        <svg width="18" height="10" viewBox="0 0 18 10" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M13.3422 1.99904L16.0664 4.72403L-2.29768e-07 4.74353L-1.64195e-07 6.24367L16.0567 6.22416L13.3414 8.9394L14.4013 10L17.3408 7.06049C17.5498 6.85153 17.7156 6.60345 17.8287 6.33042C17.9418 6.05739 18 5.76475 18 5.46922C18 5.17369 17.9418 4.88105 17.8287 4.60802C17.7156 4.33499 17.5498 4.08691 17.3408 3.87795L14.4013 0.938442L13.3422 1.99904Z" fill="white"/>
                        </svg>
                    </div>
                    <div value="graphic" className='d-flex d-align-center d-justify-space-between text-grey' onClick={allSubTypeHandler}>
                        <span>Graphic Design</span> 
                        <svg width="18" height="10" viewBox="0 0 18 10" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M13.3422 1.99904L16.0664 4.72403L-2.29768e-07 4.74353L-1.64195e-07 6.24367L16.0567 6.22416L13.3414 8.9394L14.4013 10L17.3408 7.06049C17.5498 6.85153 17.7156 6.60345 17.8287 6.33042C17.9418 6.05739 18 5.76475 18 5.46922C18 5.17369 17.9418 4.88105 17.8287 4.60802C17.7156 4.33499 17.5498 4.08691 17.3408 3.87795L14.4013 0.938442L13.3422 1.99904Z" fill="white"/>
                        </svg>
                    </div>
                    <div value="design" className='d-flex d-align-center d-justify-space-between text-grey' onClick={allSubTypeHandler}>
                        <span>Web design services</span> 
                        <svg width="18" height="10" viewBox="0 0 18 10" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M13.3422 1.99904L16.0664 4.72403L-2.29768e-07 4.74353L-1.64195e-07 6.24367L16.0567 6.22416L13.3414 8.9394L14.4013 10L17.3408 7.06049C17.5498 6.85153 17.7156 6.60345 17.8287 6.33042C17.9418 6.05739 18 5.76475 18 5.46922C18 5.17369 17.9418 4.88105 17.8287 4.60802C17.7156 4.33499 17.5498 4.08691 17.3408 3.87795L14.4013 0.938442L13.3422 1.99904Z" fill="white"/>
                        </svg>
                    </div>
                    <div value="front" className='d-flex d-align-center d-justify-space-between text-grey' onClick={allSubTypeHandler}>
                        <span>Front End Development</span> 
                        <svg width="18" height="10" viewBox="0 0 18 10" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M13.3422 1.99904L16.0664 4.72403L-2.29768e-07 4.74353L-1.64195e-07 6.24367L16.0567 6.22416L13.3414 8.9394L14.4013 10L17.3408 7.06049C17.5498 6.85153 17.7156 6.60345 17.8287 6.33042C17.9418 6.05739 18 5.76475 18 5.46922C18 5.17369 17.9418 4.88105 17.8287 4.60802C17.7156 4.33499 17.5498 4.08691 17.3408 3.87795L14.4013 0.938442L13.3422 1.99904Z" fill="white"/>
                        </svg>
                    </div>
                </div>
                <div className={`col-7 ${styles["right_section"]}`}>
                    {allSubType == "web" && <>
                        <h2 className='f-400 l-55 mb-4'>
                            Digital Marketing Services
                        </h2>
                        <p className='l-27 text-black'>
                            From expertise-based services to becoming a one-stop-solution for all talent needs, Uplers has indeed come a long way. We make it easy for businesses to find the most talented developers, designers and marketers as per their needs faster and more efficiently.
                        </p>
                        <p className='l-27 text-black mt-2'>
                            From expertise-based services to becoming a one-stop-solution for all talent needs, Uplers has indeed come a long way.
                        </p>

                        <a href='#' className='btn btn-primary'>Check Our Introduced Package</a>
                        <h4 className='l-35 f-400 mt-5'>
                            Review’s Specific to this Services
                        </h4>
                        <img className='mt-4 mr-4' src="Service-Review.png" alt="Service Specific Review"/>
                        <img className='mt-4' src="Service-Review.png" alt="Service Specific Review"/>
                    </>}
                    {allSubType == "app" && <>
                        <h2 className='f-400 l-55 mb-4'>
                            App Design Services
                        </h2>
                        <p className='l-27 text-black'>
                            From expertise-based services to becoming a one-stop-solution for all talent needs, Uplers has indeed come a long way. We make it easy for businesses to find the most talented developers, designers and marketers as per their needs faster and more efficiently.
                        </p>
                        <p className='l-27 text-black mt-2'>
                            From expertise-based services to becoming a one-stop-solution for all talent needs, Uplers has indeed come a long way.
                        </p>

                        <a href='#' className='btn btn-primary'>Check Our Introduced Package</a>
                        <h4 className='l-35 f-400 mt-5'>
                            Review’s Specific to this Services
                        </h4>
                        <img className='mt-4 mr-4' src="Service-Review.png" alt="Service Specific Review"/>
                        <img className='mt-4' src="Service-Review.png" alt="Service Specific Review"/>
                    </>}
                    {allSubType == "ui" && <>
                        <h2 className='f-400 l-55 mb-4'>
                            UI/UX Design Services
                        </h2>
                        <p className='l-27 text-black'>
                            From expertise-based services to becoming a one-stop-solution for all talent needs, Uplers has indeed come a long way. We make it easy for businesses to find the most talented developers, designers and marketers as per their needs faster and more efficiently.
                        </p>
                        <p className='l-27 text-black mt-2'>
                            From expertise-based services to becoming a one-stop-solution for all talent needs, Uplers has indeed come a long way.
                        </p>

                        <a href='#' className='btn btn-primary'>Check Our Introduced Package</a>
                        <h4 className='l-35 f-400 mt-5'>
                            Review’s Specific to this Services
                        </h4>
                        <img className='mt-4 mr-4' src="Service-Review.png" alt="Service Specific Review"/>
                        <img className='mt-4' src="Service-Review.png" alt="Service Specific Review"/>
                    </>}
                    {allSubType == "graphic" && <>
                        <h2 className='f-400 l-55 mb-4'>
                            Graphic Design Services
                        </h2>
                        <p className='l-27 text-black'>
                            From expertise-based services to becoming a one-stop-solution for all talent needs, Uplers has indeed come a long way. We make it easy for businesses to find the most talented developers, designers and marketers as per their needs faster and more efficiently.
                        </p>
                        <p className='l-27 text-black mt-2'>
                            From expertise-based services to becoming a one-stop-solution for all talent needs, Uplers has indeed come a long way.
                        </p>

                        <a href='#' className='btn btn-primary'>Check Our Introduced Package</a>
                        <h4 className='l-35 f-400 mt-5'>
                            Review’s Specific to this Services
                        </h4>
                        <img className='mt-4 mr-4' src="Service-Review.png" alt="Service Specific Review"/>
                        <img className='mt-4' src="Service-Review.png" alt="Service Specific Review"/>
                    </>}
                    {allSubType == "design" && <>
                        <h2 className='f-400 l-55 mb-4'>
                            Web Design Services
                        </h2>
                        <p className='l-27 text-black'>
                            From expertise-based services to becoming a one-stop-solution for all talent needs, Uplers has indeed come a long way. We make it easy for businesses to find the most talented developers, designers and marketers as per their needs faster and more efficiently.
                        </p>
                        <p className='l-27 text-black mt-2'>
                            From expertise-based services to becoming a one-stop-solution for all talent needs, Uplers has indeed come a long way.
                        </p>

                        <a href='#' className='btn btn-primary'>Check Our Introduced Package</a>
                        <h4 className='l-35 f-400 mt-5'>
                            Review’s Specific to this Services
                        </h4>
                        <img className='mt-4 mr-4' src="Service-Review.png" alt="Service Specific Review"/>
                        <img className='mt-4' src="Service-Review.png" alt="Service Specific Review"/>
                    </>}
                    {allSubType == "front" && <>
                        <h2 className='f-400 l-55 mb-4'>
                            Frontend Services
                        </h2>
                        <p className='l-27 text-black'>
                            From expertise-based services to becoming a one-stop-solution for all talent needs, Uplers has indeed come a long way. We make it easy for businesses to find the most talented developers, designers and marketers as per their needs faster and more efficiently.
                        </p>
                        <p className='l-27 text-black mt-2'>
                            From expertise-based services to becoming a one-stop-solution for all talent needs, Uplers has indeed come a long way.
                        </p>

                        <a href='#' className='btn btn-primary'>Check Our Introduced Package</a>
                        <h4 className='l-35 f-400 mt-5'>
                            Review’s Specific to this Services
                        </h4>
                        <img className='mt-4 mr-4' src="Service-Review.png" alt="Service Specific Review"/>
                        <img className='mt-4' src="Service-Review.png" alt="Service Specific Review"/>
                    </>}
                </div>
            </div>}
            {typeTab == "analytics" && <div className={`col-12 d-flex d-flex-wrap mt-5 ${styles["service_detail"]}`}>
                <div ref={allSubTypeRef} className={`col-5 d-flex d-flex-column ${styles["left_section"]}`}>
                    <div value="web" className='d-flex d-align-center d-justify-space-between text-grey' onClick={allSubTypeHandler}>
                        <span>Web design Services</span> 
                        <svg width="18" height="10" viewBox="0 0 18 10" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M13.3422 1.99904L16.0664 4.72403L-2.29768e-07 4.74353L-1.64195e-07 6.24367L16.0567 6.22416L13.3414 8.9394L14.4013 10L17.3408 7.06049C17.5498 6.85153 17.7156 6.60345 17.8287 6.33042C17.9418 6.05739 18 5.76475 18 5.46922C18 5.17369 17.9418 4.88105 17.8287 4.60802C17.7156 4.33499 17.5498 4.08691 17.3408 3.87795L14.4013 0.938442L13.3422 1.99904Z" fill="white"/>
                        </svg>
                    </div>
                    <div value="app" className='d-flex d-align-center d-justify-space-between text-grey' onClick={allSubTypeHandler}>
                        <span>Mobile app UI/UX services</span> 
                        <svg width="18" height="10" viewBox="0 0 18 10" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M13.3422 1.99904L16.0664 4.72403L-2.29768e-07 4.74353L-1.64195e-07 6.24367L16.0567 6.22416L13.3414 8.9394L14.4013 10L17.3408 7.06049C17.5498 6.85153 17.7156 6.60345 17.8287 6.33042C17.9418 6.05739 18 5.76475 18 5.46922C18 5.17369 17.9418 4.88105 17.8287 4.60802C17.7156 4.33499 17.5498 4.08691 17.3408 3.87795L14.4013 0.938442L13.3422 1.99904Z" fill="white"/>
                        </svg>
                    </div>
                    <div value="ui" className='d-flex d-align-center d-justify-space-between text-grey' onClick={allSubTypeHandler}>
                        <span>UI/UX Consulting</span> 
                        <svg width="18" height="10" viewBox="0 0 18 10" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M13.3422 1.99904L16.0664 4.72403L-2.29768e-07 4.74353L-1.64195e-07 6.24367L16.0567 6.22416L13.3414 8.9394L14.4013 10L17.3408 7.06049C17.5498 6.85153 17.7156 6.60345 17.8287 6.33042C17.9418 6.05739 18 5.76475 18 5.46922C18 5.17369 17.9418 4.88105 17.8287 4.60802C17.7156 4.33499 17.5498 4.08691 17.3408 3.87795L14.4013 0.938442L13.3422 1.99904Z" fill="white"/>
                        </svg>
                    </div>
                    <div value="graphic" className='d-flex d-align-center d-justify-space-between text-grey' onClick={allSubTypeHandler}>
                        <span>Graphic Design</span> 
                        <svg width="18" height="10" viewBox="0 0 18 10" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M13.3422 1.99904L16.0664 4.72403L-2.29768e-07 4.74353L-1.64195e-07 6.24367L16.0567 6.22416L13.3414 8.9394L14.4013 10L17.3408 7.06049C17.5498 6.85153 17.7156 6.60345 17.8287 6.33042C17.9418 6.05739 18 5.76475 18 5.46922C18 5.17369 17.9418 4.88105 17.8287 4.60802C17.7156 4.33499 17.5498 4.08691 17.3408 3.87795L14.4013 0.938442L13.3422 1.99904Z" fill="white"/>
                        </svg>
                    </div>
                    <div value="design" className='d-flex d-align-center d-justify-space-between text-grey' onClick={allSubTypeHandler}>
                        <span>Web design services</span> 
                        <svg width="18" height="10" viewBox="0 0 18 10" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M13.3422 1.99904L16.0664 4.72403L-2.29768e-07 4.74353L-1.64195e-07 6.24367L16.0567 6.22416L13.3414 8.9394L14.4013 10L17.3408 7.06049C17.5498 6.85153 17.7156 6.60345 17.8287 6.33042C17.9418 6.05739 18 5.76475 18 5.46922C18 5.17369 17.9418 4.88105 17.8287 4.60802C17.7156 4.33499 17.5498 4.08691 17.3408 3.87795L14.4013 0.938442L13.3422 1.99904Z" fill="white"/>
                        </svg>
                    </div>
                    <div value="front" className='d-flex d-align-center d-justify-space-between text-grey' onClick={allSubTypeHandler}>
                        <span>Front End Development</span> 
                        <svg width="18" height="10" viewBox="0 0 18 10" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M13.3422 1.99904L16.0664 4.72403L-2.29768e-07 4.74353L-1.64195e-07 6.24367L16.0567 6.22416L13.3414 8.9394L14.4013 10L17.3408 7.06049C17.5498 6.85153 17.7156 6.60345 17.8287 6.33042C17.9418 6.05739 18 5.76475 18 5.46922C18 5.17369 17.9418 4.88105 17.8287 4.60802C17.7156 4.33499 17.5498 4.08691 17.3408 3.87795L14.4013 0.938442L13.3422 1.99904Z" fill="white"/>
                        </svg>
                    </div>
                </div>
                <div className={`col-7 ${styles["right_section"]}`}>
                    {allSubType == "web" && <>
                        <h2 className='f-400 l-55 mb-4'>
                            Data Analytics Services
                        </h2>
                        <p className='l-27 text-black'>
                            From expertise-based services to becoming a one-stop-solution for all talent needs, Uplers has indeed come a long way. We make it easy for businesses to find the most talented developers, designers and marketers as per their needs faster and more efficiently.
                        </p>
                        <p className='l-27 text-black mt-2'>
                            From expertise-based services to becoming a one-stop-solution for all talent needs, Uplers has indeed come a long way.
                        </p>

                        <a href='#' className='btn btn-primary'>Check Our Introduced Package</a>
                        <h4 className='l-35 f-400 mt-5'>
                            Review’s Specific to this Services
                        </h4>
                        <img className='mt-4 mr-4' src="Service-Review.png" alt="Service Specific Review"/>
                        <img className='mt-4' src="Service-Review.png" alt="Service Specific Review"/>
                    </>}
                    {allSubType == "app" && <>
                        <h2 className='f-400 l-55 mb-4'>
                            App Design Services
                        </h2>
                        <p className='l-27 text-black'>
                            From expertise-based services to becoming a one-stop-solution for all talent needs, Uplers has indeed come a long way. We make it easy for businesses to find the most talented developers, designers and marketers as per their needs faster and more efficiently.
                        </p>
                        <p className='l-27 text-black mt-2'>
                            From expertise-based services to becoming a one-stop-solution for all talent needs, Uplers has indeed come a long way.
                        </p>

                        <a href='#' className='btn btn-primary'>Check Our Introduced Package</a>
                        <h4 className='l-35 f-400 mt-5'>
                            Review’s Specific to this Services
                        </h4>
                        <img className='mt-4 mr-4' src="Service-Review.png" alt="Service Specific Review"/>
                        <img className='mt-4' src="Service-Review.png" alt="Service Specific Review"/>
                    </>}
                    {allSubType == "ui" && <>
                        <h2 className='f-400 l-55 mb-4'>
                            UI/UX Design Services
                        </h2>
                        <p className='l-27 text-black'>
                            From expertise-based services to becoming a one-stop-solution for all talent needs, Uplers has indeed come a long way. We make it easy for businesses to find the most talented developers, designers and marketers as per their needs faster and more efficiently.
                        </p>
                        <p className='l-27 text-black mt-2'>
                            From expertise-based services to becoming a one-stop-solution for all talent needs, Uplers has indeed come a long way.
                        </p>

                        <a href='#' className='btn btn-primary'>Check Our Introduced Package</a>
                        <h4 className='l-35 f-400 mt-5'>
                            Review’s Specific to this Services
                        </h4>
                        <img className='mt-4 mr-4' src="Service-Review.png" alt="Service Specific Review"/>
                        <img className='mt-4' src="Service-Review.png" alt="Service Specific Review"/>
                    </>}
                    {allSubType == "graphic" && <>
                        <h2 className='f-400 l-55 mb-4'>
                            Graphic Design Services
                        </h2>
                        <p className='l-27 text-black'>
                            From expertise-based services to becoming a one-stop-solution for all talent needs, Uplers has indeed come a long way. We make it easy for businesses to find the most talented developers, designers and marketers as per their needs faster and more efficiently.
                        </p>
                        <p className='l-27 text-black mt-2'>
                            From expertise-based services to becoming a one-stop-solution for all talent needs, Uplers has indeed come a long way.
                        </p>

                        <a href='#' className='btn btn-primary'>Check Our Introduced Package</a>
                        <h4 className='l-35 f-400 mt-5'>
                            Review’s Specific to this Services
                        </h4>
                        <img className='mt-4 mr-4' src="Service-Review.png" alt="Service Specific Review"/>
                        <img className='mt-4' src="Service-Review.png" alt="Service Specific Review"/>
                    </>}
                    {allSubType == "design" && <>
                        <h2 className='f-400 l-55 mb-4'>
                            Web Design Services
                        </h2>
                        <p className='l-27 text-black'>
                            From expertise-based services to becoming a one-stop-solution for all talent needs, Uplers has indeed come a long way. We make it easy for businesses to find the most talented developers, designers and marketers as per their needs faster and more efficiently.
                        </p>
                        <p className='l-27 text-black mt-2'>
                            From expertise-based services to becoming a one-stop-solution for all talent needs, Uplers has indeed come a long way.
                        </p>

                        <a href='#' className='btn btn-primary'>Check Our Introduced Package</a>
                        <h4 className='l-35 f-400 mt-5'>
                            Review’s Specific to this Services
                        </h4>
                        <img className='mt-4 mr-4' src="Service-Review.png" alt="Service Specific Review"/>
                        <img className='mt-4' src="Service-Review.png" alt="Service Specific Review"/>
                    </>}
                    {allSubType == "front" && <>
                        <h2 className='f-400 l-55 mb-4'>
                            Frontend Services
                        </h2>
                        <p className='l-27 text-black'>
                            From expertise-based services to becoming a one-stop-solution for all talent needs, Uplers has indeed come a long way. We make it easy for businesses to find the most talented developers, designers and marketers as per their needs faster and more efficiently.
                        </p>
                        <p className='l-27 text-black mt-2'>
                            From expertise-based services to becoming a one-stop-solution for all talent needs, Uplers has indeed come a long way.
                        </p>

                        <a href='#' className='btn btn-primary'>Check Our Introduced Package</a>
                        <h4 className='l-35 f-400 mt-5'>
                            Review’s Specific to this Services
                        </h4>
                        <img className='mt-4 mr-4' src="Service-Review.png" alt="Service Specific Review"/>
                        <img className='mt-4' src="Service-Review.png" alt="Service Specific Review"/>
                    </>}
                </div>
            </div>}
            {typeTab == "ui" && <div className={`col-12 d-flex d-flex-wrap mt-5 ${styles["service_detail"]}`}>
                <div ref={allSubTypeRef} className={`col-5 d-flex d-flex-column ${styles["left_section"]}`}>
                    <div value="web" className='d-flex d-align-center d-justify-space-between text-grey' onClick={allSubTypeHandler}>
                        <span>Web design Services</span> 
                        <svg width="18" height="10" viewBox="0 0 18 10" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M13.3422 1.99904L16.0664 4.72403L-2.29768e-07 4.74353L-1.64195e-07 6.24367L16.0567 6.22416L13.3414 8.9394L14.4013 10L17.3408 7.06049C17.5498 6.85153 17.7156 6.60345 17.8287 6.33042C17.9418 6.05739 18 5.76475 18 5.46922C18 5.17369 17.9418 4.88105 17.8287 4.60802C17.7156 4.33499 17.5498 4.08691 17.3408 3.87795L14.4013 0.938442L13.3422 1.99904Z" fill="white"/>
                        </svg>
                    </div>
                    <div value="app" className='d-flex d-align-center d-justify-space-between text-grey' onClick={allSubTypeHandler}>
                        <span>Mobile app UI/UX services</span> 
                        <svg width="18" height="10" viewBox="0 0 18 10" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M13.3422 1.99904L16.0664 4.72403L-2.29768e-07 4.74353L-1.64195e-07 6.24367L16.0567 6.22416L13.3414 8.9394L14.4013 10L17.3408 7.06049C17.5498 6.85153 17.7156 6.60345 17.8287 6.33042C17.9418 6.05739 18 5.76475 18 5.46922C18 5.17369 17.9418 4.88105 17.8287 4.60802C17.7156 4.33499 17.5498 4.08691 17.3408 3.87795L14.4013 0.938442L13.3422 1.99904Z" fill="white"/>
                        </svg>
                    </div>
                    <div value="ui" className='d-flex d-align-center d-justify-space-between text-grey' onClick={allSubTypeHandler}>
                        <span>UI/UX Consulting</span> 
                        <svg width="18" height="10" viewBox="0 0 18 10" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M13.3422 1.99904L16.0664 4.72403L-2.29768e-07 4.74353L-1.64195e-07 6.24367L16.0567 6.22416L13.3414 8.9394L14.4013 10L17.3408 7.06049C17.5498 6.85153 17.7156 6.60345 17.8287 6.33042C17.9418 6.05739 18 5.76475 18 5.46922C18 5.17369 17.9418 4.88105 17.8287 4.60802C17.7156 4.33499 17.5498 4.08691 17.3408 3.87795L14.4013 0.938442L13.3422 1.99904Z" fill="white"/>
                        </svg>
                    </div>
                    <div value="graphic" className='d-flex d-align-center d-justify-space-between text-grey' onClick={allSubTypeHandler}>
                        <span>Graphic Design</span> 
                        <svg width="18" height="10" viewBox="0 0 18 10" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M13.3422 1.99904L16.0664 4.72403L-2.29768e-07 4.74353L-1.64195e-07 6.24367L16.0567 6.22416L13.3414 8.9394L14.4013 10L17.3408 7.06049C17.5498 6.85153 17.7156 6.60345 17.8287 6.33042C17.9418 6.05739 18 5.76475 18 5.46922C18 5.17369 17.9418 4.88105 17.8287 4.60802C17.7156 4.33499 17.5498 4.08691 17.3408 3.87795L14.4013 0.938442L13.3422 1.99904Z" fill="white"/>
                        </svg>
                    </div>
                    <div value="design" className='d-flex d-align-center d-justify-space-between text-grey' onClick={allSubTypeHandler}>
                        <span>Web design services</span> 
                        <svg width="18" height="10" viewBox="0 0 18 10" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M13.3422 1.99904L16.0664 4.72403L-2.29768e-07 4.74353L-1.64195e-07 6.24367L16.0567 6.22416L13.3414 8.9394L14.4013 10L17.3408 7.06049C17.5498 6.85153 17.7156 6.60345 17.8287 6.33042C17.9418 6.05739 18 5.76475 18 5.46922C18 5.17369 17.9418 4.88105 17.8287 4.60802C17.7156 4.33499 17.5498 4.08691 17.3408 3.87795L14.4013 0.938442L13.3422 1.99904Z" fill="white"/>
                        </svg>
                    </div>
                    <div value="front" className='d-flex d-align-center d-justify-space-between text-grey' onClick={allSubTypeHandler}>
                        <span>Front End Development</span> 
                        <svg width="18" height="10" viewBox="0 0 18 10" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M13.3422 1.99904L16.0664 4.72403L-2.29768e-07 4.74353L-1.64195e-07 6.24367L16.0567 6.22416L13.3414 8.9394L14.4013 10L17.3408 7.06049C17.5498 6.85153 17.7156 6.60345 17.8287 6.33042C17.9418 6.05739 18 5.76475 18 5.46922C18 5.17369 17.9418 4.88105 17.8287 4.60802C17.7156 4.33499 17.5498 4.08691 17.3408 3.87795L14.4013 0.938442L13.3422 1.99904Z" fill="white"/>
                        </svg>
                    </div>
                </div>
                <div className={`col-7 ${styles["right_section"]}`}>
                    {allSubType == "web" && <>
                        <h2 className='f-400 l-55 mb-4'>
                            UI/UX Design Services
                        </h2>
                        <p className='l-27 text-black'>
                            From expertise-based services to becoming a one-stop-solution for all talent needs, Uplers has indeed come a long way. We make it easy for businesses to find the most talented developers, designers and marketers as per their needs faster and more efficiently.
                        </p>
                        <p className='l-27 text-black mt-2'>
                            From expertise-based services to becoming a one-stop-solution for all talent needs, Uplers has indeed come a long way.
                        </p>

                        <a href='#' className='btn btn-primary'>Check Our Introduced Package</a>
                        <h4 className='l-35 f-400 mt-5'>
                            Review’s Specific to this Services
                        </h4>
                        <img className='mt-4 mr-4' src="Service-Review.png" alt="Service Specific Review"/>
                        <img className='mt-4' src="Service-Review.png" alt="Service Specific Review"/>
                    </>}
                    {allSubType == "app" && <>
                        <h2 className='f-400 l-55 mb-4'>
                            App Design Services
                        </h2>
                        <p className='l-27 text-black'>
                            From expertise-based services to becoming a one-stop-solution for all talent needs, Uplers has indeed come a long way. We make it easy for businesses to find the most talented developers, designers and marketers as per their needs faster and more efficiently.
                        </p>
                        <p className='l-27 text-black mt-2'>
                            From expertise-based services to becoming a one-stop-solution for all talent needs, Uplers has indeed come a long way.
                        </p>

                        <a href='#' className='btn btn-primary'>Check Our Introduced Package</a>
                        <h4 className='l-35 f-400 mt-5'>
                            Review’s Specific to this Services
                        </h4>
                        <img className='mt-4 mr-4' src="Service-Review.png" alt="Service Specific Review"/>
                        <img className='mt-4' src="Service-Review.png" alt="Service Specific Review"/>
                    </>}
                    {allSubType == "ui" && <>
                        <h2 className='f-400 l-55 mb-4'>
                            UI/UX Design Services
                        </h2>
                        <p className='l-27 text-black'>
                            From expertise-based services to becoming a one-stop-solution for all talent needs, Uplers has indeed come a long way. We make it easy for businesses to find the most talented developers, designers and marketers as per their needs faster and more efficiently.
                        </p>
                        <p className='l-27 text-black mt-2'>
                            From expertise-based services to becoming a one-stop-solution for all talent needs, Uplers has indeed come a long way.
                        </p>

                        <a href='#' className='btn btn-primary'>Check Our Introduced Package</a>
                        <h4 className='l-35 f-400 mt-5'>
                            Review’s Specific to this Services
                        </h4>
                        <img className='mt-4 mr-4' src="Service-Review.png" alt="Service Specific Review"/>
                        <img className='mt-4' src="Service-Review.png" alt="Service Specific Review"/>
                    </>}
                    {allSubType == "graphic" && <>
                        <h2 className='f-400 l-55 mb-4'>
                            Graphic Design Services
                        </h2>
                        <p className='l-27 text-black'>
                            From expertise-based services to becoming a one-stop-solution for all talent needs, Uplers has indeed come a long way. We make it easy for businesses to find the most talented developers, designers and marketers as per their needs faster and more efficiently.
                        </p>
                        <p className='l-27 text-black mt-2'>
                            From expertise-based services to becoming a one-stop-solution for all talent needs, Uplers has indeed come a long way.
                        </p>

                        <a href='#' className='btn btn-primary'>Check Our Introduced Package</a>
                        <h4 className='l-35 f-400 mt-5'>
                            Review’s Specific to this Services
                        </h4>
                        <img className='mt-4 mr-4' src="Service-Review.png" alt="Service Specific Review"/>
                        <img className='mt-4' src="Service-Review.png" alt="Service Specific Review"/>
                    </>}
                    {allSubType == "design" && <>
                        <h2 className='f-400 l-55 mb-4'>
                            Web Design Services
                        </h2>
                        <p className='l-27 text-black'>
                            From expertise-based services to becoming a one-stop-solution for all talent needs, Uplers has indeed come a long way. We make it easy for businesses to find the most talented developers, designers and marketers as per their needs faster and more efficiently.
                        </p>
                        <p className='l-27 text-black mt-2'>
                            From expertise-based services to becoming a one-stop-solution for all talent needs, Uplers has indeed come a long way.
                        </p>

                        <a href='#' className='btn btn-primary'>Check Our Introduced Package</a>
                        <h4 className='l-35 f-400 mt-5'>
                            Review’s Specific to this Services
                        </h4>
                        <img className='mt-4 mr-4' src="Service-Review.png" alt="Service Specific Review"/>
                        <img className='mt-4' src="Service-Review.png" alt="Service Specific Review"/>
                    </>}
                    {allSubType == "front" && <>
                        <h2 className='f-400 l-55 mb-4'>
                            Frontend Services
                        </h2>
                        <p className='l-27 text-black'>
                            From expertise-based services to becoming a one-stop-solution for all talent needs, Uplers has indeed come a long way. We make it easy for businesses to find the most talented developers, designers and marketers as per their needs faster and more efficiently.
                        </p>
                        <p className='l-27 text-black mt-2'>
                            From expertise-based services to becoming a one-stop-solution for all talent needs, Uplers has indeed come a long way.
                        </p>

                        <a href='#' className='btn btn-primary'>Check Our Introduced Package</a>
                        <h4 className='l-35 f-400 mt-5'>
                            Review’s Specific to this Services
                        </h4>
                        <img className='mt-4 mr-4' src="Service-Review.png" alt="Service Specific Review"/>
                        <img className='mt-4' src="Service-Review.png" alt="Service Specific Review"/>
                    </>}
                </div>
            </div>}
            {typeTab == "app" && <div className={`col-12 d-flex d-flex-wrap mt-5 ${styles["service_detail"]}`}>
                <div ref={allSubTypeRef} className={`col-5 d-flex d-flex-column ${styles["left_section"]}`}>
                    <div value="web" className='d-flex d-align-center d-justify-space-between text-grey' onClick={allSubTypeHandler}>
                        <span>Web design Services</span> 
                        <svg width="18" height="10" viewBox="0 0 18 10" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M13.3422 1.99904L16.0664 4.72403L-2.29768e-07 4.74353L-1.64195e-07 6.24367L16.0567 6.22416L13.3414 8.9394L14.4013 10L17.3408 7.06049C17.5498 6.85153 17.7156 6.60345 17.8287 6.33042C17.9418 6.05739 18 5.76475 18 5.46922C18 5.17369 17.9418 4.88105 17.8287 4.60802C17.7156 4.33499 17.5498 4.08691 17.3408 3.87795L14.4013 0.938442L13.3422 1.99904Z" fill="white"/>
                        </svg>
                    </div>
                    <div value="app" className='d-flex d-align-center d-justify-space-between text-grey' onClick={allSubTypeHandler}>
                        <span>Mobile app UI/UX services</span> 
                        <svg width="18" height="10" viewBox="0 0 18 10" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M13.3422 1.99904L16.0664 4.72403L-2.29768e-07 4.74353L-1.64195e-07 6.24367L16.0567 6.22416L13.3414 8.9394L14.4013 10L17.3408 7.06049C17.5498 6.85153 17.7156 6.60345 17.8287 6.33042C17.9418 6.05739 18 5.76475 18 5.46922C18 5.17369 17.9418 4.88105 17.8287 4.60802C17.7156 4.33499 17.5498 4.08691 17.3408 3.87795L14.4013 0.938442L13.3422 1.99904Z" fill="white"/>
                        </svg>
                    </div>
                    <div value="ui" className='d-flex d-align-center d-justify-space-between text-grey' onClick={allSubTypeHandler}>
                        <span>UI/UX Consulting</span> 
                        <svg width="18" height="10" viewBox="0 0 18 10" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M13.3422 1.99904L16.0664 4.72403L-2.29768e-07 4.74353L-1.64195e-07 6.24367L16.0567 6.22416L13.3414 8.9394L14.4013 10L17.3408 7.06049C17.5498 6.85153 17.7156 6.60345 17.8287 6.33042C17.9418 6.05739 18 5.76475 18 5.46922C18 5.17369 17.9418 4.88105 17.8287 4.60802C17.7156 4.33499 17.5498 4.08691 17.3408 3.87795L14.4013 0.938442L13.3422 1.99904Z" fill="white"/>
                        </svg>
                    </div>
                    <div value="graphic" className='d-flex d-align-center d-justify-space-between text-grey' onClick={allSubTypeHandler}>
                        <span>Graphic Design</span> 
                        <svg width="18" height="10" viewBox="0 0 18 10" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M13.3422 1.99904L16.0664 4.72403L-2.29768e-07 4.74353L-1.64195e-07 6.24367L16.0567 6.22416L13.3414 8.9394L14.4013 10L17.3408 7.06049C17.5498 6.85153 17.7156 6.60345 17.8287 6.33042C17.9418 6.05739 18 5.76475 18 5.46922C18 5.17369 17.9418 4.88105 17.8287 4.60802C17.7156 4.33499 17.5498 4.08691 17.3408 3.87795L14.4013 0.938442L13.3422 1.99904Z" fill="white"/>
                        </svg>
                    </div>
                    <div value="design" className='d-flex d-align-center d-justify-space-between text-grey' onClick={allSubTypeHandler}>
                        <span>Web design services</span> 
                        <svg width="18" height="10" viewBox="0 0 18 10" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M13.3422 1.99904L16.0664 4.72403L-2.29768e-07 4.74353L-1.64195e-07 6.24367L16.0567 6.22416L13.3414 8.9394L14.4013 10L17.3408 7.06049C17.5498 6.85153 17.7156 6.60345 17.8287 6.33042C17.9418 6.05739 18 5.76475 18 5.46922C18 5.17369 17.9418 4.88105 17.8287 4.60802C17.7156 4.33499 17.5498 4.08691 17.3408 3.87795L14.4013 0.938442L13.3422 1.99904Z" fill="white"/>
                        </svg>
                    </div>
                    <div value="front" className='d-flex d-align-center d-justify-space-between text-grey' onClick={allSubTypeHandler}>
                        <span>Front End Development</span> 
                        <svg width="18" height="10" viewBox="0 0 18 10" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M13.3422 1.99904L16.0664 4.72403L-2.29768e-07 4.74353L-1.64195e-07 6.24367L16.0567 6.22416L13.3414 8.9394L14.4013 10L17.3408 7.06049C17.5498 6.85153 17.7156 6.60345 17.8287 6.33042C17.9418 6.05739 18 5.76475 18 5.46922C18 5.17369 17.9418 4.88105 17.8287 4.60802C17.7156 4.33499 17.5498 4.08691 17.3408 3.87795L14.4013 0.938442L13.3422 1.99904Z" fill="white"/>
                        </svg>
                    </div>
                </div>
                <div className={`col-7 ${styles["right_section"]}`}>
                    {allSubType == "web" && <>
                        <h2 className='f-400 l-55 mb-4'>
                            App Development Services
                        </h2>
                        <p className='l-27 text-black'>
                            From expertise-based services to becoming a one-stop-solution for all talent needs, Uplers has indeed come a long way. We make it easy for businesses to find the most talented developers, designers and marketers as per their needs faster and more efficiently.
                        </p>
                        <p className='l-27 text-black mt-2'>
                            From expertise-based services to becoming a one-stop-solution for all talent needs, Uplers has indeed come a long way.
                        </p>

                        <a href='#' className='btn btn-primary'>Check Our Introduced Package</a>
                        <h4 className='l-35 f-400 mt-5'>
                            Review’s Specific to this Services
                        </h4>
                        <img className='mt-4 mr-4' src="Service-Review.png" alt="Service Specific Review"/>
                        <img className='mt-4' src="Service-Review.png" alt="Service Specific Review"/>
                    </>}
                    {allSubType == "app" && <>
                        <h2 className='f-400 l-55 mb-4'>
                            App Design Services
                        </h2>
                        <p className='l-27 text-black'>
                            From expertise-based services to becoming a one-stop-solution for all talent needs, Uplers has indeed come a long way. We make it easy for businesses to find the most talented developers, designers and marketers as per their needs faster and more efficiently.
                        </p>
                        <p className='l-27 text-black mt-2'>
                            From expertise-based services to becoming a one-stop-solution for all talent needs, Uplers has indeed come a long way.
                        </p>

                        <a href='#' className='btn btn-primary'>Check Our Introduced Package</a>
                        <h4 className='l-35 f-400 mt-5'>
                            Review’s Specific to this Services
                        </h4>
                        <img className='mt-4 mr-4' src="Service-Review.png" alt="Service Specific Review"/>
                        <img className='mt-4' src="Service-Review.png" alt="Service Specific Review"/>
                    </>}
                    {allSubType == "ui" && <>
                        <h2 className='f-400 l-55 mb-4'>
                            UI/UX Design Services
                        </h2>
                        <p className='l-27 text-black'>
                            From expertise-based services to becoming a one-stop-solution for all talent needs, Uplers has indeed come a long way. We make it easy for businesses to find the most talented developers, designers and marketers as per their needs faster and more efficiently.
                        </p>
                        <p className='l-27 text-black mt-2'>
                            From expertise-based services to becoming a one-stop-solution for all talent needs, Uplers has indeed come a long way.
                        </p>

                        <a href='#' className='btn btn-primary'>Check Our Introduced Package</a>
                        <h4 className='l-35 f-400 mt-5'>
                            Review’s Specific to this Services
                        </h4>
                        <img className='mt-4 mr-4' src="Service-Review.png" alt="Service Specific Review"/>
                        <img className='mt-4' src="Service-Review.png" alt="Service Specific Review"/>
                    </>}
                    {allSubType == "graphic" && <>
                        <h2 className='f-400 l-55 mb-4'>
                            Graphic Design Services
                        </h2>
                        <p className='l-27 text-black'>
                            From expertise-based services to becoming a one-stop-solution for all talent needs, Uplers has indeed come a long way. We make it easy for businesses to find the most talented developers, designers and marketers as per their needs faster and more efficiently.
                        </p>
                        <p className='l-27 text-black mt-2'>
                            From expertise-based services to becoming a one-stop-solution for all talent needs, Uplers has indeed come a long way.
                        </p>

                        <a href='#' className='btn btn-primary'>Check Our Introduced Package</a>
                        <h4 className='l-35 f-400 mt-5'>
                            Review’s Specific to this Services
                        </h4>
                        <img className='mt-4 mr-4' src="Service-Review.png" alt="Service Specific Review"/>
                        <img className='mt-4' src="Service-Review.png" alt="Service Specific Review"/>
                    </>}
                    {allSubType == "design" && <>
                        <h2 className='f-400 l-55 mb-4'>
                            Web Design Services
                        </h2>
                        <p className='l-27 text-black'>
                            From expertise-based services to becoming a one-stop-solution for all talent needs, Uplers has indeed come a long way. We make it easy for businesses to find the most talented developers, designers and marketers as per their needs faster and more efficiently.
                        </p>
                        <p className='l-27 text-black mt-2'>
                            From expertise-based services to becoming a one-stop-solution for all talent needs, Uplers has indeed come a long way.
                        </p>

                        <a href='#' className='btn btn-primary'>Check Our Introduced Package</a>
                        <h4 className='l-35 f-400 mt-5'>
                            Review’s Specific to this Services
                        </h4>
                        <img className='mt-4 mr-4' src="Service-Review.png" alt="Service Specific Review"/>
                        <img className='mt-4' src="Service-Review.png" alt="Service Specific Review"/>
                    </>}
                    {allSubType == "front" && <>
                        <h2 className='f-400 l-55 mb-4'>
                            Frontend Services
                        </h2>
                        <p className='l-27 text-black'>
                            From expertise-based services to becoming a one-stop-solution for all talent needs, Uplers has indeed come a long way. We make it easy for businesses to find the most talented developers, designers and marketers as per their needs faster and more efficiently.
                        </p>
                        <p className='l-27 text-black mt-2'>
                            From expertise-based services to becoming a one-stop-solution for all talent needs, Uplers has indeed come a long way.
                        </p>

                        <a href='#' className='btn btn-primary'>Check Our Introduced Package</a>
                        <h4 className='l-35 f-400 mt-5'>
                            Review’s Specific to this Services
                        </h4>
                        <img className='mt-4 mr-4' src="Service-Review.png" alt="Service Specific Review"/>
                        <img className='mt-4' src="Service-Review.png" alt="Service Specific Review"/>
                    </>}
                </div>
            </div>}
        </div>
    </div>
  )
}
