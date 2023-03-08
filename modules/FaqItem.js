import React,{useRef} from 'react'
import styles from './css/faq.module.css'
export default function FaqItem(props) {
    const ref = useRef();
    const handler = () => {
        ref.current.classList.toggle(styles.active)
    }
  return (
    <div ref={ref} className={styles["faq-item"]}>
        <div className='d-flex cursor-pointer d-flex-wrap d-justify-space-between d-align-center' onClick={handler}>
            <p className='f-400 l-22'>{props.title}</p>
            <svg width="16" height="10" viewBox="0 0 16 10" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path fillRule="evenodd" clipRule="evenodd" d="M13.7375 0.737549L8 6.46255L2.2625 0.737549L0.5 2.50005L8 10L15.5 2.50005L13.7375 0.737549Z" fill="#3A86FF"/>
            </svg>
        </div>
        <p className='f-400 text-grey mt-4'>{props.content}</p>
    </div>
  )
}
