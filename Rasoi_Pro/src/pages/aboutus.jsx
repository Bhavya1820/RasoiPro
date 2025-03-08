import React from 'react'
import Footer from '../Footer/Footer'
import Navbar from '../Navbar/Navbar'
import PreNavbar from '../PreNavbar/PreNavbar'
import Front from '../AboutUs/aboutusfront'
import Cards from '../AboutUs/cards'
import Info2 from '../AboutUs/info2'
import Our from '../AboutUs/our'

const aboutus = () => {
  return (
    <>
    {/* <PreNavbar></PreNavbar> */}
    <Navbar></Navbar>
    <Front></Front>
    <Info2></Info2>
    <Our></Our>
    <Cards></Cards>
    <Footer></Footer>
    </>
  )
}

export default aboutus