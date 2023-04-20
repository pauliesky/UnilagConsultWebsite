import React from "react";
import { Carousel } from "react-responsive-carousel";
import sliderBg from "../../assets/slider-bg.jpg";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import awardImage from "../../assets/award.png";

function CarouSel() {
  return (
    <>
      <Carousel
        className="relative"
        infiniteLoop={true}
        autoPlay
        showThumbs={false}
        interval={3000}
      >
        <div className="relative">
          <img src={sliderBg} alt="slider-bg"></img>
          <div className="absolute">
            <img
              className="h-[20rem] w-[1rem] z-10"
              src={awardImage}
              alt="award"
            ></img>{" "}
          </div>
        </div>
        <div className="relative">
          <img src={sliderBg} alt="slider-bg"></img>
        </div>
        <div className="relative">
          <img src={sliderBg} alt="slider-bg"></img>
        </div>
      </Carousel>
    </>
  );
}

export default CarouSel;
