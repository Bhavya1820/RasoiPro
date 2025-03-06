import React from 'react'
import Footer from '../Footer/Footer'
import Navbar from '../Navbar/Navbar'
import PreNavbar from '../PreNavbar/PreNavbar'
import Front from '../AboutUs/aboutusfront'
import Story from '../AboutUs/Story'
import Info from '../AboutUs/info'
import Cards from '../AboutUs/cards'

const aboutus = () => {
  return (
    <>
    <PreNavbar></PreNavbar>
    <Navbar></Navbar>
    <Front></Front>
    <Story></Story>
    <Info></Info>
    <Cards></Cards>
    <Footer></Footer>
    </>
  )
}

export default aboutus