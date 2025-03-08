import {React} from 'react'
import { useMediaQuery } from "react-responsive";
import Navbar from '../Navbar/Navbar'
import Footer from '../Footer/Footer'
import PreNavbar from '../PreNavbar/PreNavbar'
import FrontText from '../home/frontText'
import FrontImage from '../home/frontImage'
import Cards from '../home/cards'
import Services from '../home/services'
import Reports from '../home/reports'
import Blocks from '../home/blocks'
import Block_second from '../home/block_second'

const home = () => {
  const isMedium = useMediaQuery({ minWidth: 768 });
  return (
    <>
    {/* <div className='hidden md:block'><PreNavbar></PreNavbar></div> */}
    <Navbar></Navbar>
    {/* <FrontText></FrontText> */}
    <FrontImage></FrontImage>
    <Cards></Cards>
    <Services></Services>
    <Reports></Reports>
    {isMedium ? <Block_second /> : <Block_second />}
    {/* <Reports></Reports> */}
    <Footer></Footer>
    </>
  )
}

export default home