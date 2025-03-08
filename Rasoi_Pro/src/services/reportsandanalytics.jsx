import React from 'react'
import PreNavbar from '../PreNavbar/PreNavbar'
import Navbar from '../Navbar/Navbar'
import Footer from '../Footer/Footer'
import Front from './components/front'
import Report from './inventory/report'
import { useMediaQuery } from "react-responsive";
import Report2 from './inventory/report2'
import AffordablePrice from './components/affordablePrice'

const reportsandanalytics = () => {
  const isMobile = useMediaQuery({ maxWidth: 1400 });
    const url="https://ik.imagekit.io/jncw2kb8u/Screenshot%202025-03-08%20120346.png?updatedAt=1741415773868"
    const text1= "Insightful Reports & Analytics for Smarter Decisions"
    const text2= "Gain valuable insights with real-time reports and analytics. Track sales, monitor trends, and make data-driven decisions to boost efficiency and profits."
  return (
    <>
    <PreNavbar></PreNavbar>
    <Navbar></Navbar>
    <Front Url={url} Text1={text1} Text2={text2}></Front>
    {isMobile ? <Report2></Report2>: <Report></Report>}
    <AffordablePrice></AffordablePrice>
    <Footer></Footer>
    </>
  )
}

export default reportsandanalytics