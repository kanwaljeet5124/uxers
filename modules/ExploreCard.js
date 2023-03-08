import React from 'react'

export default function ExploreCard() {
  return (
    <div className='explore_card'>
        <span className='explore_card_badge d-flex d-align-center d-justify-center'>Web</span>
        <img src="explore-blog.png" alt="explore image" />
        <div className='explore_blog_content'>
            <div className="article_author d-flex d-justify-start d-flex-wrap">
                <div className="col-7 d-flex d-align-center">
                    <img src="/article_avatar.png" alt="Author Profile" />
                    <span className="f-400 text-white">Richard Jones</span>
                </div>
            </div>
            <div className='explore_blog_title d-flex d-flex-column d-justify-space-between'> 
                <h6 className='f-400 text-primary'>UI UX Job Description: Key To Finding The Ideal Designer</h6>
                <span className='f-400'>October 18 2022 | 5 min Read</span>
            </div>
        </div>
    </div>
  )
}
