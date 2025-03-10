import React from "react";
import Navbar from "../Navbar/Navbar";
import Footer from "../Footer/Footer";
import Front from "./components/front";
import Features from "./waiterapp/features";
import Report from "./inventory/report";
import { useMediaQuery } from "react-responsive";
import Report2 from "./inventory/report2";
import AffordablePrice from "./components/affordablePrice";

const waiterapp = () => {
  const isMobile = useMediaQuery({ maxWidth: 1400 });
  const url =
    "https://ik.imagekit.io/jncw2kb8u/brooke-cagle-_rraO9NirHE-unsplash.jpg?updatedAt=1741416538846";
  const text1 = "Swift and Simple Order Handling for Waiters.";
  const text2 =
    "Streamline order taking and enhance service efficiency with our smart waiter app. Process orders faster, reduce errors, and deliver a seamless dining experience.";
  return (
    <>
      <Navbar></Navbar>
      <Front Url={url} Text1={text1} Text2={text2}></Front>
      <Features></Features>
      {isMobile ? <Report2></Report2> : <Report></Report>}
      <AffordablePrice></AffordablePrice>
      <Footer></Footer>
    </>
  );
};

export default waiterapp;
