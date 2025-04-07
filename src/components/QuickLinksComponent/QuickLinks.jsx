import { QuickLink } from "../QuickLinkComponent/QuickLink";
import "./QuickLinks.css";
import { links } from "../../services/api/data";

import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

export function QuickLinks() {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
    initialSlide: 0,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 320,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <div className="quick-links-container w-full   max-w-[1200px] mx-auto flex flex-col justify-center">
      <div className="quick-links-title">
        <p className="text-gray-950 text-2xl font-semibold text-center mb-5">
          QuickLinks
        </p>
      </div>
      <Slider {...settings}>
        {links.map((quickLink, i) => (
          <QuickLink key={quickLink.name} quickLink={quickLink} index={i} />
        ))}
      </Slider>
    </div>
  );
}
