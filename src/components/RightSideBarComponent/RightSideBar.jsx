import "./RightSideBar.css";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import { CarouselDots } from "../ui/CarouselDots/CarouselDots";
import { details, birthdays, months } from "../../services/api/data";
import { Card } from "../ui/CardComponent/Card";
// import { useEffect, useState } from "react";
import { useSideBar } from "../../hooks/SideBarContext";
import Slider from "react-slick";
const date = new Date();
const month = months.at(date.getMonth());

// const birthdaysLength = birthdays.filter((items) => items.note).length;
// const detailsLength = birthdays.filter((items) => items.note).length;

export function RightSideBar() {
  const { handleReadMore } = useSideBar();

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    pauseOnHover: true,
  };

  return (
    <div
      className="right-sidebar max-w-[500px] xl:mt-0 mt-15  lg:mt-0  w-full mx-auto rounded-2xl flex flex-col  items-center gap-3 h-200 lg:h-full ring-[#ffffff]  py-8  dark:bg-gray-900 bg-[#f5f6f5] lg:shadow-xl lg:shadow-black/5 ring-3 dark:ring-gray-800 md:px-5"
      aria-live="polite"
    >
      <div className="article-title mb-0.5 text-[1.15rem] text-gray-950 dark:text-gray-50">
        Recent Posts/News
      </div>
      <div className="posts lg:w-9/10  md:mr-[-11px] mr-[-14px] mb-2.5 w-[84%] ">
        <Slider {...settings}>
          {details.map((post, index) => (
            <Card key={index} post={post} onReadMore={handleReadMore} />
          ))}
        </Slider>
      </div>
      <div className="article-title text-[1.15rem] mb-0.5 text-gray-950 dark:text-gray-50">
        Birthdays for the Month of {month}
      </div>
      <div className="birthdays lg:w-9/10 md:mr-[-11px] mr-[-14px]  w-[84%] ">
        <Slider {...settings}>
          {birthdays.map((post, index) => (
            <Card key={index} post={post} onReadMore={handleReadMore} />
          ))}
        </Slider>
      </div>
    </div>
  );
}
