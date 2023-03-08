import React from 'react'
import ServiceBanner from '../modules/ServiceBanner'
import Teams from '../modules/Teams'
import Inquire from '../modules/Inquire'
import ServicesProvided from '../modules/ServicesProvided'
import Slider from '../modules/Slider'
import LetsTalkBlack from '../modules/LetsTalkBlack'
import Footer from '../modules/Footer'
import FAQ from '../modules/FAQ'
export default function services() {
  return (
    <>
      <ServiceBanner/>
      <Teams/>
      <Inquire/>
      <ServicesProvided/>
      <Slider/>
      <LetsTalkBlack type={1}/>
      <FAQ/>
      <Footer/>
    </>
  )
}
