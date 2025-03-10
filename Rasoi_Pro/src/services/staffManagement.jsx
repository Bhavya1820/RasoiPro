import React from 'react'
import Navbar from '../Navbar/Navbar'
import Footer from '../Footer/Footer'
import Front from './components/front'
import Report from './inventory/report'
import { useMediaQuery } from "react-responsive";
import Report2 from './inventory/report2'
import AffordablePrice from './components/affordablePrice'
import Features from './staffmanagement/features'

const staffManagement = () => {
  const isMobile = useMediaQuery({ maxWidth: 1400 });
    const url="https://ik.imagekit.io/jncw2kb8u/shutterstock_1176110662.jpg?updatedAt=1741357719698"
    const text1= "Seamless Staff Management for Your Business."
    const text2= "Streamline your restaurant’s staff management effortlessly. Schedule shifts, track attendance, and enhance team productivity with our intuitive staff management system."
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

export default staffManagement