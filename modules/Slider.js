import React,{useRef} from 'react'
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import styles from "./css/slider.module.css"
import SectionHeading from './SectionHeading';
export default function Slider() {
    const slider = useRef();
    return (
        <div className=''>
            <div className='col-12'>
                <SectionHeading classes="text-align-center" badge="What Our Client Says" title="View Our  " highlight="Testimonials"></SectionHeading>
            </div>
            <div className='mt-50'>
                <Swiper
                    ref={slider}
                    spaceBetween={30}
                    slidesPerView={3}
                    breakpoints={{
                        100: {
                        slidesPerView: 1,
                        spaceBetween: 8,
                        },
                        300: {
                        slidesPerView: 1.4,
                        spaceBetween: 8,
                        },
                        500: {
                        slidesPerView: 2,
                        spaceBetween: 12,
                        },
                        768: {
                        slidesPerView: 3.8,
                        spaceBetween: 50,
                        },
                    }}
                >
                    <SwiperSlide>
                        <div className={`d-flex d-flex-column d-justify-space-between ${styles["slide"]}`} style={{backgroundImage:`url("s2.png")`}}>
                            <div className='d-flex d-flex-wrap d-align-center'>
                                <h5 className='f-400 l-22 text-white mr-3'>IKea</h5>
                                <svg width="38" height="1" viewBox="0 0 38 1" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <line y1="0.5" x2="38" y2="0.5" stroke="white"/>
                                </svg>
                            </div>
                            <div>
                                <img src="c1.png" alt="commas" />
                                <h6 className='f-400 l-24 text-white'>Lorem ipsum dolor sit amet, consecte tur adipiscing elit. Ultrices blandit pelle ntesque nibh arcu.</h6>
                            </div>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div className={`d-flex d-flex-column d-justify-space-between ${styles["slide"]}`} style={{backgroundImage:`url("s1.png")`}}>
                            <div className='d-flex d-flex-wrap d-align-center'>
                                <h5 className='f-400 l-22 text-white mr-3'>IKea</h5>
                                <svg width="38" height="1" viewBox="0 0 38 1" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <line y1="0.5" x2="38" y2="0.5" stroke="white"/>
                                </svg>
                            </div>
                            <div>
                                <img src="c1.png" alt="commas" />
                                <h6 className='f-400 l-24 text-white'>Lorem ipsum dolor sit amet, consecte tur adipiscing elit. Ultrices blandit pelle ntesque nibh arcu.</h6>
                            </div>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div className={`d-flex d-flex-column d-justify-space-between ${styles["slide"]}`} style={{backgroundImage:`url("s3.png")`}}>
                            <div className='d-flex d-flex-wrap d-align-center'>
                                <h5 className='f-400 l-22 text-white mr-3'>IKea</h5>
                                <svg width="38" height="1" viewBox="0 0 38 1" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <line y1="0.5" x2="38" y2="0.5" stroke="white"/>
                                </svg>
                            </div>
                            <div>
                                <img src="c1.png" alt="commas" />
                                <h6 className='f-400 l-24 text-white'>Lorem ipsum dolor sit amet, consecte tur adipiscing elit. Ultrices blandit pelle ntesque nibh arcu.</h6>
                            </div>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div className={`d-flex d-flex-column d-justify-space-between ${styles["slide"]}`} style={{backgroundImage:`url("s4.png")`}}>
                            <div className='d-flex d-flex-wrap d-align-center'>
                                <h5 className='f-400 l-22 text-white mr-3'>IKea</h5>
                                <svg width="38" height="1" viewBox="0 0 38 1" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <line y1="0.5" x2="38" y2="0.5" stroke="white"/>
                                </svg>
                            </div>
                            <div>
                                <img src="c1.png" alt="commas" />
                                <h6 className='f-400 l-24 text-white'>Lorem ipsum dolor sit amet, consecte tur adipiscing elit. Ultrices blandit pelle ntesque nibh arcu.</h6>
                            </div>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div className={`d-flex d-flex-column d-justify-space-between ${styles["slide"]}`} style={{backgroundImage:`url("s1.png")`}}>
                            <div className='d-flex d-flex-wrap d-align-center'>
                                <h5 className='f-400 l-22 text-white mr-3'>IKea</h5>
                                <svg width="38" height="1" viewBox="0 0 38 1" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <line y1="0.5" x2="38" y2="0.5" stroke="white"/>
                                </svg>
                            </div>
                            <div>
                                <img src="c1.png" alt="commas" />
                                <h6 className='f-400 l-24 text-white'>Lorem ipsum dolor sit amet, consecte tur adipiscing elit. Ultrices blandit pelle ntesque nibh arcu.</h6>
                            </div>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div className={`d-flex d-flex-column d-justify-space-between ${styles["slide"]}`} style={{backgroundImage:`url("s3.png")`}}>
                            <div className='d-flex d-flex-wrap d-align-center'>
                                <h5 className='f-400 l-22 text-white mr-3'>IKea</h5>
                                <svg width="38" height="1" viewBox="0 0 38 1" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <line y1="0.5" x2="38" y2="0.5" stroke="white"/>
                                </svg>
                            </div>
                            <div>
                                <img src="c1.png" alt="commas" />
                                <h6 className='f-400 l-24 text-white'>Lorem ipsum dolor sit amet, consecte tur adipiscing elit. Ultrices blandit pelle ntesque nibh arcu.</h6>
                            </div>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div className={`d-flex d-flex-column d-justify-space-between ${styles["slide"]}`} style={{backgroundImage:`url("s4.png")`}}>
                            <div className='d-flex d-flex-wrap d-align-center'>
                                <h5 className='f-400 l-22 text-white mr-3'>IKea</h5>
                                <svg width="38" height="1" viewBox="0 0 38 1" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <line y1="0.5" x2="38" y2="0.5" stroke="white"/>
                                </svg>
                            </div>
                            <div>
                                <img src="c1.png" alt="commas" />
                                <h6 className='f-400 l-24 text-white'>Lorem ipsum dolor sit amet, consecte tur adipiscing elit. Ultrices blandit pelle ntesque nibh arcu.</h6>
                            </div>
                        </div>
                    </SwiperSlide>
                </Swiper>
            </div>
        </div>
    )
}
