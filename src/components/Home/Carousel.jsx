import React from "react";
import { Carousel } from "react-responsive-carousel";
import sliderBg from "../../assets/slider-bg.jpg";

function CarouSel() {
  return (
    <>
      <Carousel>
        <div className="">
          <img src={sliderBg} alt="slider-bg"></img>
        </div>
        <div>2</div>
        <div>3</div>
      </Carousel>
    </>
  );
}

export default CarouSel;
