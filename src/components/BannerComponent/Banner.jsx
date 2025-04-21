import "./Banner.css";
import React, { Component } from "react";
import Slider from "react-slick";
import { bannerImages } from "../../services/api/data";
import { CarouselDots } from "../ui/CarouselDots/CarouselDots";
export function Banner() {
  const settings = {
    dots: true,
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    pauseOnHover: true,
  };
  return (
    <>
      <div
        className="banner-wrapper lg:max-w-173 xl:max-w-full 2xl:w-full   relative w-full xl:w-175   transition-transform  duration-500  lg:h-[510px] "
        tabIndex={0}
      >
        {/* <div className="banner-overlay bg-[#0000003e] rounded-2xl absolute top-0 h-[558px] w-full"></div> */}
        <Slider {...settings}>
          {bannerImages.map((img, index) => (
            <div
              className="banner-slide w-full bg-[#F5F6F5] dark:bg-gray-900 rounded-2xl h-full md:h-[500px] md:max-h-[500px] max-h-[400px]  lg:max-h-[550px] "
              key={index}
              tabIndex={0}
            >
              <img
                src={img}
                alt="banner"
                className="w-full rounded-2xl h-[400px] md:h-[500px] md:max-h-[500px] lg:h-[510px] object-cover "
              />
            </div>
          ))}
        </Slider>
      </div>
    </>
  );
}
