import React from 'react'
import ServiceBanner from '../modules/ServiceBanner'
import Teams from '../modules/Teams'
import Inquire from '../modules/Inquire'
import ServicesProvided from '../modules/ServicesProvided'
import Slider from '../modules/Slider'
export default function services() {
  return (
    <>
      <ServiceBanner/>
      <Teams/>
      <Inquire/>
      <ServicesProvided/>
      <Slider/>
    </>
  )
}
