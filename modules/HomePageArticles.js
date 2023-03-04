import React,{useRef, useState} from 'react'
import styles from "./css/slider.module.css"
export default function HomePageArticles() {
    const tabRef = useRef();
    const [tab,setTab] = useState("news")
    const tabHandler = (e) => {
        tabRef.current.querySelectorAll("h5").forEach(item=>{
            item.classList.remove(styles.active)
        })
        e.currentTarget.classList.add(styles.active)
        setTab(e.currentTarget.getAttribute("value"))
    }
  return (
    <div className='d-flex mt-90'>
        <div className='col-6 bg-light d-flex d-justify-center mt-50 ptb-50'>
            <div className='col-10'>
                <h6 className='text-primary l-27 m-0 mb-2 f-500 '>Blogs</h6>
                <h2 className={`f-500 l-55 mb-3`}>
                    Our Latest Company<br/>
                    <span className='f-700  text-gradient'>
                       News And Articles
                    </span>
                </h2>
                <h6 className='text-primary l-27 m-0 mt-5 f-500 '>Insights</h6>
                <div className='col-11 p-relative mt-2 '>
                    <img src="a1.png" alt="article" className='col-12'/>
                    <div className={`col-9 ${styles["article-heading"]}`}>
                        <h4 className='f-400 l-35'>AI for All</h4>
                    </div>
                </div>
                <h6 className='text-primary l-27 mt-90 f-500 '>Insights</h6>
                <div className='col-11 p-relative mt-2'>
                    <img src="a1.png" alt="article" className='col-12'/>
                    <div className={`col-9 ${styles["article-heading"]}`}>
                        <h4 className='f-400 l-35'>AI for All</h4>
                    </div>
                </div>
            </div>
        </div>
        <div className='col-6 d-flex mt-90 ptb-50 p-relative'>
            <div className='col-9 offset-1 mt-50'>
                <div ref={tabRef} className={`col-12 d-flex d-flex-wrap d-justify-space-between ${styles["articles-tab"]}`}>
                    <h5 value="news" className={`f-700 l-27 text-grey cursor-pointer ${styles["active"]}`} onClick={tabHandler}>News</h5>
                    <h5 value="insights" className='f-700 l-27 text-grey cursor-pointer' onClick={tabHandler}>Insights</h5>
                    <h5 value="updates" className='f-700 l-27 text-grey cursor-pointer' onClick={tabHandler}>Updates</h5>
                    <h5 value="events" className='f-700 l-27 text-grey cursor-pointer' onClick={tabHandler}>Events</h5>
                    <h5 value="articles" className='f-700 l-27 text-grey cursor-pointer' onClick={tabHandler}>Articles</h5>
                </div>
                {tab == "insights" && <>
                    <h5 className='f-400 l-27 text-primary mt-4'>Insights</h5>
                    <h5 className='f-400 l-27 text-secondary mt-2'>Slalom named Google Cloud Services Partner of the Year for North America</h5>
                    <h5 className='f-400 l-27 text-primary mt-4'>Insights</h5>
                    <h5 className='f-400 l-27 text-secondary mt-2'>Slalom named Google Cloud Services Partner of the Year for North America</h5>
                    <h5 className='f-400 l-27 text-primary mt-4'>Insights</h5>
                    <h5 className='f-400 l-27 text-secondary mt-2'>Slalom named Google Cloud Services Partner of the Year for North America</h5>
                    <h5 className='f-400 l-27 text-primary mt-4'>Insights</h5>
                    <h5 className='f-400 l-27 text-secondary mt-2'>Slalom named Google Cloud Services Partner of the Year for North America</h5>
                </>}
                {tab == "updates" && <>
                    <h5 className='f-400 l-27 text-primary mt-4'>Updates</h5>
                    <h5 className='f-400 l-27 text-secondary mt-2'>Slalom named Google Cloud Services Partner of the Year for North America</h5>
                    <h5 className='f-400 l-27 text-primary mt-4'>Updates</h5>
                    <h5 className='f-400 l-27 text-secondary mt-2'>Slalom named Google Cloud Services Partner of the Year for North America</h5>
                    <h5 className='f-400 l-27 text-primary mt-4'>Updates</h5>
                    <h5 className='f-400 l-27 text-secondary mt-2'>Slalom named Google Cloud Services Partner of the Year for North America</h5>
               
                </>}
                {tab == "news" && <>
                    <h5 className='f-400 l-27 text-primary mt-4'>News</h5>
                    <h5 className='f-400 l-27 text-secondary mt-2'>Slalom named Google Cloud Services Partner of the Year for North America</h5>
                    <h5 className='f-400 l-27 text-primary mt-4'>News</h5>
                    <h5 className='f-400 l-27 text-secondary mt-2'>Slalom named Google Cloud Services Partner of the Year for North America</h5>
                    <h5 className='f-400 l-27 text-primary mt-4'>News</h5>
                    <h5 className='f-400 l-27 text-secondary mt-2'>Slalom named Google Cloud Services Partner of the Year for North America</h5>
                    <h5 className='f-400 l-27 text-primary mt-4'>News</h5>
                    <h5 className='f-400 l-27 text-secondary mt-2'>Slalom named Google Cloud Services Partner of the Year for North America</h5>
                    <h5 className='f-400 l-27 text-primary mt-4'>News</h5>
                    <h5 className='f-400 l-27 text-secondary mt-2'>Slalom named Google Cloud Services Partner of the Year for North America</h5>
               
                </>}
                {tab == "articles" && <>
                    <h5 className='f-400 l-27 text-primary mt-4'>Insights</h5>
                    <h5 className='f-400 l-27 text-secondary mt-2'>Slalom named Google Cloud Services Partner of the Year for North America</h5>
                    <h5 className='f-400 l-27 text-primary mt-4'>Insights</h5>
                    <h5 className='f-400 l-27 text-secondary mt-2'>Slalom named Google Cloud Services Partner of the Year for North America</h5>
                    <h5 className='f-400 l-27 text-primary mt-4'>Insights</h5>
                    <h5 className='f-400 l-27 text-secondary mt-2'>Slalom named Google Cloud Services Partner of the Year for North America</h5>
                    <h5 className='f-400 l-27 text-primary mt-4'>Insights</h5>
                    <h5 className='f-400 l-27 text-secondary mt-2'>Slalom named Google Cloud Services Partner of the Year for North America</h5>
                    <h5 className='f-400 l-27 text-primary mt-4'>Insights</h5>
                    <h5 className='f-400 l-27 text-secondary mt-2'>Slalom named Google Cloud Services Partner of the Year for North America</h5>
                </>}
                {tab == "events" && <>
                    <h5 className='f-400 l-27 text-primary mt-4'>Events</h5>
                    <h5 className='f-400 l-27 text-secondary mt-2'>Slalom named Google Cloud Services Partner of the Year for North America</h5>
                    <h5 className='f-400 l-27 text-primary mt-4'>Events</h5>
                    <h5 className='f-400 l-27 text-secondary mt-2'>Slalom named Google Cloud Services Partner of the Year for North America</h5>
                    <h5 className='f-400 l-27 text-primary mt-4'>Events</h5>
                    <h5 className='f-400 l-27 text-secondary mt-2'>Slalom named Google Cloud Services Partner of the Year for North America</h5>
                    <h5 className='f-400 l-27 text-primary mt-4'>Events</h5>
                    <h5 className='f-400 l-27 text-secondary mt-2'>Slalom named Google Cloud Services Partner of the Year for North America</h5>
                    <h5 className='f-400 l-27 text-primary mt-4'>Events</h5>
                    <h5 className='f-400 l-27 text-secondary mt-2'>Slalom named Google Cloud Services Partner of the Year for North America</h5>
                </>}
            </div>
            <div className={styles["blog-text"]}>
                <img src="blog.png" alt="blog"/>
            </div>
        </div>
    </div>
  )
}
