import React from 'react'
import Navbar from '../Navbar/Navbar'
import Footer from '../Footer/Footer'
import PreNavbar from '../PreNavbar/PreNavbar'
import Front from '../pricing/front'
import Feedback from '../pricing/feedback'
import FAQ from '../pricing/FAQ'

const pricing = () => {
  return (
    <>
    <div className='hidden md:block'><PreNavbar></PreNavbar></div>
    <Navbar></Navbar>
    <Front></Front>
    <Feedback></Feedback>
    <FAQ></FAQ>
    <Footer></Footer>
    </>
  )
}

export default pricing