import React from "react";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import BTC from "../assets/Bitcoin.png";
import { Autoplay } from "swiper/modules";

const Crousel = () => {
  const settings = {
    dots: true,
    infinite: true,
    autoplay: true,
    autoplaySpeed: 3000,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
    cssEase: "linear",
  };
  return (
    <div className="slider-container ">
      <Slider {...settings}>
        <div>
          <img className="h-[50px]" src={BTC} />
        </div>
        <div>
          <img className="h-[50px]" src={BTC} />
        </div>
        <div>
          <img className="h-[50px]" src={BTC} />
        </div>
        <div>
          <img className="h-[50px]" src={BTC} />
        </div>
        <div>
          <img className="h-[50px]" src={BTC} />
        </div>
        <div>
          <img className="h-[50px]" src={BTC} />
        </div>
      </Slider>
    </div>
  );
};

export default Crousel;
