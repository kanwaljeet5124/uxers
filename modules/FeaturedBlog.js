import React from 'react'

export default function FeaturedBlog() {
  return (
    <div className='featured-blog container d-flex d-flex-wrap'>
        <div className='col-6 d-flex'>
            <img src='/blog-image.png' alt="Blog Image" />
        </div>
        <div className='col-6 bg-white p-3'>
            <span className='blog_badge'>FEATURED</span>
            <h2 className='f-400 l-48 mt-4 mb-3'>Lorem ipsum dolor sit amet.</h2>
            <p className='f-400 op-07'>In this digital generation where information can be easily obtained within seconds, business cards ...</p>
            <div className='col-12 d-flex d-align-center d-justify-center mt-4'>
                <div className='col-7 d-flex d-align-center'>
                    <span className='blog_author'><img src='/blog-image.png' alt="Author Image" /></span>
                    <h4 className='f-400'> Vipin Kumar</h4>
                </div>
                <div className='col-5 d-flex d-flex-wrap d-align-center d-justify-end blog_author_name'>
                    <span className='col-12 d-flex d-justify-end text-align-end op-08'>02 May</span>
                    <h6 className='f-400 d-flex d-align-center op-08'>
                        <svg width="36" height="36" viewBox="0 0 36 36" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <g id="Icon ">
                            <circle id="Oval" opacity="0.15" cx="18" cy="18" r="18" fill="#36B37E"/>
                            <path id="Icon" d="M15.5976 23.7363L10.7051 18.873C10.5684 18.7363 10.5 18.5605 10.5 18.3457C10.5 18.1308 10.5684 17.9551 10.7051 17.8183L11.7891 16.7637C11.9258 16.6074 12.0967 16.5293 12.3018 16.5293C12.5068 16.5293 12.6875 16.6074 12.8437 16.7637L16.125 20.0449L23.1562 13.0137C23.3125 12.8574 23.4931 12.7793 23.6982 12.7793C23.9033 12.7793 24.0742 12.8574 24.2109 13.0137L25.2949 14.0684C25.4316 14.2051 25.5 14.3809 25.5 14.5957C25.5 14.8105 25.4316 14.9863 25.2949 15.123L16.6523 23.7363C16.5156 23.8926 16.3398 23.9707 16.125 23.9707C15.9101 23.9707 15.7344 23.8926 15.5976 23.7363Z" fill="#36B37E"/>
                            </g>
                        </svg>
                        Verified writer
                    </h6>
                </div>
            </div>
        </div>
    </div>
  )
}
