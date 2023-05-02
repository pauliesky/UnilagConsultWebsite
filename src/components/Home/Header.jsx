import React from "react";

export const baseURL = "hello";

function Header() {
  return (
    <>
      <div className="bg-[#FBED54] h-[200px] flex justify-center items-center text-center">
        <div>
          <h1 className="leading-[28px] text-[25px] font-[700] font-[Garamond]">
            UNILAG CONSULT
          </h1>
          <p>The University of Lagos Consultancy Services</p>
          <p
            className="text-[#5CA8B5] 
          font-[900]
           text-[16px]"
          >
            RC 1146081
          </p>
        </div>
      </div>
    </>
  );
}

export default Header;
