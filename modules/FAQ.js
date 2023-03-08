import React from 'react'
import SectionHeading from './SectionHeading'
import FaqItem from './FaqItem'
export default function FAQ() {
  return (
    <div className='container'>
        <SectionHeading classes="text-align-center mt-90 mb-3" title="Frequently Asked   " highlight="Questions"></SectionHeading>
        <p className='f-400 text-grey l-27 mt-5 col-12 text-center mb-5'>Lorem ipsum dolor sit amet, consectetur adipiscing elit,</p>
        <FaqItem title="1. What services does UxersLab Offer?" content="What is Lorem Ipsum? Simply put, loremipsum is dummy text that occupies the space where the real content should be. If you are designing an online business such as a blog and you do not have content already, you use a lorem ipsum generator to create placeholder or dummy text to show you how the business will look once you add the real content." />
        <FaqItem title="2. Why should i choose a Design studio like UxersLab over full-service agency?" content="What is Lorem Ipsum? Simply put, loremipsum is dummy text that occupies the space where the real content should be. If you are designing an online business such as a blog and you do not have content already, you use a lorem ipsum generator to create placeholder or dummy text to show you how the business will look once you add the real content." />
        <FaqItem title="3. How does UxersLab create website content without knowing our Business plan?" content="What is Lorem Ipsum? Simply put, loremipsum is dummy text that occupies the space where the real content should be. If you are designing an online business such as a blog and you do not have content already, you use a lorem ipsum generator to create placeholder or dummy text to show you how the business will look once you add the real content." />
        <FaqItem title="4. What will be delivered? And When?" content="What is Lorem Ipsum? Simply put, loremipsum is dummy text that occupies the space where the real content should be. If you are designing an online business such as a blog and you do not have content already, you use a lorem ipsum generator to create placeholder or dummy text to show you how the business will look once you add the real content." />
        <FaqItem title="5.What often will results be reported?" content="What is Lorem Ipsum? Simply put, loremipsum is dummy text that occupies the space where the real content should be. If you are designing an online business such as a blog and you do not have content already, you use a lorem ipsum generator to create placeholder or dummy text to show you how the business will look once you add the real content." />

    </div>
  )
}
