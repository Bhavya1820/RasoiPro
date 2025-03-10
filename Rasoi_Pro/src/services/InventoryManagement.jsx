import React from 'react'
import Navbar from '../Navbar/Navbar'
import Footer from '../Footer/Footer'
import Front from './components/front'
import Features from './inventory/features'
import Report from './inventory/report'
import { useMediaQuery } from "react-responsive";
import Report2 from './inventory/report2'
import AffordablePrice from './components/affordablePrice'

const InventoryManagement = () => {
  const isMobile = useMediaQuery({ maxWidth: 1400 });
  const url="https://ik.imagekit.io/jncw2kb8u/medium-shot-woman-with-tablet.jpg?updatedAt=1741074086408"
  const text1= "Effortless Inventory Control for Your Business"
  const text2= "Track, manage, and optimize your restaurant's stock seamlessly. Reduce waste, avoid stockouts, and ensure smooth kitchen operations with our advanced inventory management system."
  return (
    <>
    <Navbar></Navbar>
    <Front Url={url} Text1={text1} Text2={text2}></Front>
    <Features></Features>
    {isMobile ? <Report2></Report2>: <Report></Report>}
    <AffordablePrice></AffordablePrice>
    <Footer></Footer>
    </>
  )
}

export default InventoryManagement