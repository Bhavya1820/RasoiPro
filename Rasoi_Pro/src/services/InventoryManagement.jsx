import React from 'react'
import PreNavbar from '../PreNavbar/PreNavbar'
import Navbar from '../Navbar/Navbar'
import Footer from '../Footer/Footer'
import Front from './components/front'
import Features from './inventory/features'

const InventoryManagement = () => {
  const url="https://ik.imagekit.io/jncw2kb8u/medium-shot-woman-with-tablet.jpg?updatedAt=1741074086408"
  const text1= "Effortless Inventory Control for Your Business"
  const text2= "Stay ahead with our intuitive Inventory Management System, designed to help businesses efficiently track stock levels, manage supplies, and optimize operations in real time."
  return (
    <>
    <PreNavbar></PreNavbar>
    <Navbar></Navbar>
    <Front Url={url} Text1={text1} Text2={text2}></Front>
    <Features></Features>
    <Footer></Footer>
    </>
  )
}

export default InventoryManagement