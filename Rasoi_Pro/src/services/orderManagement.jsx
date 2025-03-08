import React from 'react'
import PreNavbar from '../PreNavbar/PreNavbar'
import Navbar from '../Navbar/Navbar'
import Footer from '../Footer/Footer'
import AffordablePrice from './components/affordablePrice'
import Front from './components/front'
import Features from './orderManagement/features'
import Report from './inventory/report' 
import Report2 from './inventory/report2'

import { useMediaQuery } from "react-responsive";
const orderManagement = () => {
   const isMobile = useMediaQuery({ maxWidth: 1400 });
  const url="https://ik.imagekit.io/jncw2kb8u/shop-assistant-placing-order-from-notepad-into-pos-point-of-sale-terminal-at-register-in-restaurant-2.jpg?updatedAt=1741352715704"
  const text1= "Seamless Order Management for Your Business"
  const text2= "Streamline your restaurant’s order process effortlessly. Track, manage, and fulfill orders with precision to enhance customer satisfaction and boost efficiency."
  return (
    <>
    <PreNavbar></PreNavbar>
    <Navbar></Navbar>
    <Front Url={url} Text1={text1} Text2={text2}></Front>
    <Features></Features>
    {isMobile ? <Report2></Report2>: <Report></Report>}
    <AffordablePrice></AffordablePrice>
    <Footer></Footer>
    </>
  )
}

export default orderManagement