import React from 'react'

export default function SectionHeading(props) {
  return (
    <div className={props["classes"]}>
        <h6 className='text-primary l-27 m-0 mb-2 f-500 '>{props.badge}</h6>
        <h2 className={`f-500 l-55 mb-3`}>
            {props.title}
            <span className='f-700  text-gradient'>
                {props.highlight}
            </span>
        </h2>
    </div>
  )
}
