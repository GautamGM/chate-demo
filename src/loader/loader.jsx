/* eslint-disable no-unused-vars */
import React from "react";
import "./loader.css"
const Loader = () => {
  return (
    // eslint-disable-next-line react/no-unknown-property
   <>
   <div className="border w-[100%] h-screen flex justify-center items-center flex-col">
     <div className="circles ">
    <div></div>
    <div></div>
    <div></div>
    <span></span>
  </div>
    <p className="text-[#2f005a]">Loading....</p>
   </div>
   </>
  );
};

export default Loader;
