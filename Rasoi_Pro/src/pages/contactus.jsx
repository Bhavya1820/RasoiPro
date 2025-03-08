import React from 'react'
import PreNavbar from '../PreNavbar/PreNavbar'
import Navbar from '../Navbar/Navbar'
import Footer from '../Footer/Footer'
import Contactusfront from '../ContactUs/contactusfront'
import Details from '../ContactUs/details'
import ContactForm from '../ContactUs/contactForm'


const contactus = () => {
  return (
    <>
    {/* <PreNavbar></PreNavbar> */}
    <Navbar></Navbar>
    <Contactusfront></Contactusfront>
    <Details></Details>
    <ContactForm></ContactForm>
    <Footer></Footer>
    </>
  )
}

export default contactus