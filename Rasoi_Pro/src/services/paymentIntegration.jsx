import React from 'react'
import PreNavbar from '../PreNavbar/PreNavbar'
import Navbar from '../Navbar/Navbar'
import Footer from '../Footer/Footer'
import Front from './components/front'
import AffordablePrice from './components/affordablePrice'
import Features from './paymentIntegration/features'
import Report from './inventory/report'
import Report2 from './inventory/report2'
import { useMediaQuery } from "react-responsive";

const paymentIntegration = () => {
  const isMobile = useMediaQuery({ maxWidth: 1400 });
  const url="https://ik.imagekit.io/jncw2kb8u/payment-gateway-integration-1.webp?updatedAt=1741412616479"
  const text1= "Seamless Payment Integration for Your Business."
  const text2= "Accept payments effortlessly with our secure and flexible payment integration. Streamline transactions, reduce errors, and offer multiple payment options for a seamless checkout experience."
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

export default paymentIntegration