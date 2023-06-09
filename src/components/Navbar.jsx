import React from "react";
import UCLogo from "../assets/UCLogo.png";
import shareIcon from "../assets/share-alt-solid-24.png";
import searchIcon from "../assets/search-alt-2-regular-24.png";
import phoneIcon from "../assets/mobile-regular-24.png";

function Navbar() {
  return (
    <>
      <div className="h-[70px] w-full pt-1 px-16 gap-36 flex">
        <img alt="uc-logo" src={UCLogo}></img>
        <div
          className="flex gap-8 justify-center text-center items-center hover:cursor-pointer 
        font-[Arimo] text-[13px]
        "
        >
          <div>Home</div>
          <div>About Us</div>
          <div>Services</div>
          <div>Projects Experience</div>
          <div>Clients</div>
          <div>Training Programmes</div>
          <div>Consultants</div>
          <div>Contact</div>
          <div className="flex gap-2  ml-[10rem]">
            <img
              className="w-[13px] h-[13px] "
              alt="share"
              src={shareIcon}
            ></img>
            <img
              className="w-[13px] h-[13px] "
              alt="search"
              src={searchIcon}
            ></img>
            <img
              className="w-[13px] h-[13px] "
              alt="phone"
              src={phoneIcon}
            ></img>
          </div>
        </div>
      </div>
    </>
  );
}

export default Navbar;
