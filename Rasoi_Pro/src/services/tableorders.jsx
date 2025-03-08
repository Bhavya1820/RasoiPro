import React from "react";
import PreNavbar from "../PreNavbar/PreNavbar";
import Navbar from "../Navbar/Navbar";
import Footer from "../Footer/Footer";
import Front from "./components/front";
import Report from "./inventory/report";
import { useMediaQuery } from "react-responsive";
import Report2 from "./inventory/report2";
import AffordablePrice from "./components/affordablePrice";
import Features from "./tableorders/features";

const tableorders = () => {
  const isMobile = useMediaQuery({ maxWidth: 1400 });
  const url =
    "https://ik.imagekit.io/jncw2kb8u/jason-leung-poI7DelFiVA-unsplash.jpg?updatedAt=1741434153930";
  const text1 = "Effortless Table Ordering for Your Restaurant.";
  const text2 =
    "Manage and track table orders effortlessly. Ensure quick service, reduce errors, and enhance customer satisfaction with our seamless table order system.";
  return (
    <>
      <PreNavbar></PreNavbar>
      <Navbar></Navbar>
      <Front Url={url} Text1={text1} Text2={text2}></Front>
      <Features></Features>
      {isMobile ? <Report2></Report2> : <Report></Report>}
      <AffordablePrice></AffordablePrice>
      <Footer></Footer>
    </>
  );
};

export default tableorders;
