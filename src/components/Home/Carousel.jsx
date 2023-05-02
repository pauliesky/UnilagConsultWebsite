import React from "react";
import { Carousel } from "react-responsive-carousel";
import sliderBg from "../../assets/slider-bg.jpg";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import awardImage from "../../assets/award.png";
import "./Carousel.css";
function CarouSel() {
  return (
    <>
      <Carousel
        className="relative"
        infiniteLoop={true}
        // autoPlay
        showThumbs={false}
        interval={3000}
      >
        <div className="relative">
          <img src={sliderBg} alt="slider-bg"></img>
          <div className="flex flex-row justify-center gap-2">
            <p className="absolute  top-3 z-10">Hi</p>
            <img
              className=" absolute top-8 left-0 h-[10rem] w-[5rem] z-10"
              src={awardImage}
              alt="award"
            ></img>
          </div>
        </div>
        <div className="">
          <img src={sliderBg} alt="slider-bg"></img>
          <p>Hello</p>
        </div>
        <div className="">
          <img src={sliderBg} alt="slider-bg"></img>
          <p>How are you</p>
        </div>
      </Carousel>
    </>
  );
}

export default CarouSel;
