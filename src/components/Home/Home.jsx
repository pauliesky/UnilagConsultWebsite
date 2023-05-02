import React from "react";
// import { Carousel } from "react-responsive-carousel";
import Navbar from "../Navbar";
import Header from "./Header";
import CarouSel from "./Carousel";
import WelcomePage from "./WelcomePage";

function Home() {
  return (
    <>
      <Navbar />
      <Header />
      <CarouSel />
      <WelcomePage />
    </>
  );
}

export default Home;
