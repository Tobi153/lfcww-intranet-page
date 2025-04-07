import "./RightSideBar.css";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import { CarouselDots } from "../ui/CarouselDots/CarouselDots";
import { details, birthdays, months } from "../../services/api/data";
import { Card } from "../ui/CardComponent/Card";
// import { useEffect, useState } from "react";
import { useSideBar } from "../../hoooks/useSidebar";
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
    <div className="right-sidebar max-w-[500px]  w-full mx-auto rounded-2xl flex flex-col items-center gap-3 h-200 py-10 bg-[#880909]">
      <div className="article-title">Recent Posts/News</div>
      <div className="posts mr-[-11px] mb-2.5">
        <Slider {...settings}>
          {details.map((post, index) => (
            <Card key={index} post={post} onReadMore={handleReadMore} />
          ))}
        </Slider>
      </div>
      <div className="article-title">Birthdays for the Month of {month}</div>
      <div className="birthdays">
        <Slider {...settings}>
          {birthdays.map((post, index) => (
            <Card key={index} post={post} onReadMore={handleReadMore} />
          ))}
        </Slider>
      </div>
    </div>
  );
}
