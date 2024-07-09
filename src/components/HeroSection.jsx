import React from "react";
import Crousel from "../crausel/Crousel";

const HeroSection = () => (
  <div className="h-[60vh]" id="Hero-img">
    <div className="h-[25vh] flex flex-col items-center justify-center">
      <h1 className="text-white text-6xl font-bold">Crypto Hunter</h1>
      <h4 className="text-gray-200 pt-2">
        Get All The Info Regarding Your Favorite Crypto Currency
      </h4>
    </div>
    <div className="mx-auto w-[80%] z-10 left-0 right-0">
      {/* <Crousel /> */}
    </div>
  </div>
);

export default HeroSection;
