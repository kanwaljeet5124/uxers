import styles from './css/whatwedo.module.css'
import { useRef,useState } from 'react'
export default function ServicesProvided() {
    const tabRef = useRef(null)
    const [tab, setTab] = useState("ecommerce")
    const tabHandler = (e) => {
        tabRef.current.querySelectorAll("div").forEach((item)=>{
            item.classList.remove(styles.active)
        })
        e.currentTarget.classList.add(styles.active)
        setTab(e.currentTarget.getAttribute("value"))
    }
  return (
    <div className='section'>
        <div className='container d-flex d-flex-wrap d-justify-center'>
            <div className='col-10'> 
                <h6 className='text-primary l-27 m-0 mb-2 f-500 text-center'>Service</h6>
                <h2 className={`f-500 l-55 mb-3 text-center`}>Our <span className='f-700  text-gradient'> Web Development </span>Services Include </h2>
                <p className='text-align-center text-grey mb-5'>We source, vet & deploy the top marketing & technology professionals India has to offer. Global companies hire from Uplers to make their hiring faster, easier & cost-effective.</p>
            </div>
            <div className={`col-12 d-flex d-flex-wrap mt-5 ${styles["service_detail"]}`}>
                <div ref={tabRef} className={`col-5 d-flex d-flex-column ${styles["left_section"]}`}>
                    <div value="ecommerce" className={`d-flex d-align-center d-justify-space-between text-grey ${styles["active"]}`} onClick={tabHandler}>
                        <span>Ecommerce Web Development Services</span> 
                        <svg width="18" height="10" viewBox="0 0 18 10" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M13.3422 1.99904L16.0664 4.72403L-2.29768e-07 4.74353L-1.64195e-07 6.24367L16.0567 6.22416L13.3414 8.9394L14.4013 10L17.3408 7.06049C17.5498 6.85153 17.7156 6.60345 17.8287 6.33042C17.9418 6.05739 18 5.76475 18 5.46922C18 5.17369 17.9418 4.88105 17.8287 4.60802C17.7156 4.33499 17.5498 4.08691 17.3408 3.87795L14.4013 0.938442L13.3422 1.99904Z" fill="white"/>
                        </svg>
                    </div>
                    <div value="landing" className='d-flex d-align-center d-justify-space-between text-grey' onClick={tabHandler}>
                        <span>Landing Pages Development Services</span> 
                        <svg width="18" height="10" viewBox="0 0 18 10" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M13.3422 1.99904L16.0664 4.72403L-2.29768e-07 4.74353L-1.64195e-07 6.24367L16.0567 6.22416L13.3414 8.9394L14.4013 10L17.3408 7.06049C17.5498 6.85153 17.7156 6.60345 17.8287 6.33042C17.9418 6.05739 18 5.76475 18 5.46922C18 5.17369 17.9418 4.88105 17.8287 4.60802C17.7156 4.33499 17.5498 4.08691 17.3408 3.87795L14.4013 0.938442L13.3422 1.99904Z" fill="white"/>
                        </svg>
                    </div>
                    <div value="backend" className='d-flex d-align-center d-justify-space-between text-grey' onClick={tabHandler}>
                        <span>Backend Web Development Services</span> 
                        <svg width="18" height="10" viewBox="0 0 18 10" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M13.3422 1.99904L16.0664 4.72403L-2.29768e-07 4.74353L-1.64195e-07 6.24367L16.0567 6.22416L13.3414 8.9394L14.4013 10L17.3408 7.06049C17.5498 6.85153 17.7156 6.60345 17.8287 6.33042C17.9418 6.05739 18 5.76475 18 5.46922C18 5.17369 17.9418 4.88105 17.8287 4.60802C17.7156 4.33499 17.5498 4.08691 17.3408 3.87795L14.4013 0.938442L13.3422 1.99904Z" fill="white"/>
                        </svg>
                    </div>
                    <div value="email" className='d-flex d-align-center d-justify-space-between text-grey' onClick={tabHandler}>
                        <span>Email Templates</span> 
                        <svg width="18" height="10" viewBox="0 0 18 10" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M13.3422 1.99904L16.0664 4.72403L-2.29768e-07 4.74353L-1.64195e-07 6.24367L16.0567 6.22416L13.3414 8.9394L14.4013 10L17.3408 7.06049C17.5498 6.85153 17.7156 6.60345 17.8287 6.33042C17.9418 6.05739 18 5.76475 18 5.46922C18 5.17369 17.9418 4.88105 17.8287 4.60802C17.7156 4.33499 17.5498 4.08691 17.3408 3.87795L14.4013 0.938442L13.3422 1.99904Z" fill="white"/>
                        </svg>
                    </div>
                    <div value="micro" className='d-flex d-align-center d-justify-space-between text-grey' onClick={tabHandler}>
                        <span>Micro Web Services</span> 
                        <svg width="18" height="10" viewBox="0 0 18 10" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M13.3422 1.99904L16.0664 4.72403L-2.29768e-07 4.74353L-1.64195e-07 6.24367L16.0567 6.22416L13.3414 8.9394L14.4013 10L17.3408 7.06049C17.5498 6.85153 17.7156 6.60345 17.8287 6.33042C17.9418 6.05739 18 5.76475 18 5.46922C18 5.17369 17.9418 4.88105 17.8287 4.60802C17.7156 4.33499 17.5498 4.08691 17.3408 3.87795L14.4013 0.938442L13.3422 1.99904Z" fill="white"/>
                        </svg>
                    </div>
                </div>                
                <div className={`col-7 ${styles["right_section"]}`}>
                    {tab == "ecommerce" && <>
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
                    {tab == "landing" && <>
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
                    {tab == "email" && <>
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
                    {tab == "micro" && <>
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
                    {tab == "backend" && <>
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
            </div>
        </div>
    </div>
  )
}
