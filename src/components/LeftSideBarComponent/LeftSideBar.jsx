import "./leftSideBar.css";
import winnersLogo from "../../assets/cropped-logo.webp";

import { useState } from "react";
import { Links } from "../ui/LinksComponent/Links";
import { links } from "../../services/api/data";
import PauseButton from "../../assets/Pause-button.svg";
import PlayButton from "../../assets/Play-button.svg";
import { HamburgerIcon } from "../ui/HamburgerIcon";
import { Link } from "react-router-dom";
// import { PlayButton } from "../ui/PlayButton";
export function LeftSideBar() {
  const [isDropDown, setIsDropDown] = useState(false);
  const [isPlaying, setIsPlaying] = useState(false);

  function toggleDropDown() {
    setIsDropDown((drop) => !drop);
  }

  function handlePlayButton() {
    setIsPlaying((playing) => !playing);
  }
  return (
    <aside className="left-sidebar  lg:mb-0  h-full lg:max-w-[700px] max-w-[500px] w-full mx-auto flex flex-col gap-3 rounded-2xl   mt-10  lg:mt-0  ring-[#ffffff]   lg:shadow-lg lg:shadow-black/10 ring-3 dark:ring-gray-800">
      <div className="hidden sidebar-logo-container ml-10 mt-5  lg:flex gap-2 items-center mb-3">
        <Link to="/" className="sidebar-logo hidden lg:block " tabIndex="0">
          <img
            src={winnersLogo}
            alt="Winners logo"
            className="winners-logo w-[40px]"
          />
        </Link>
        <p className="logo-text text-[0.75rem]/3 uppercase font-bold text-gray-950 dark:text-gray-50">
          Living Faith <br /> Church World Wide
        </p>
      </div>
      {/* <div className="left-sidebar-icon hidden">
        <HamburgerIcon />
      </div> */}
      <ul
        className={`sidebar-links hidden lg:block lg:flex-1 sm:none w-full relative ${isDropDown ? "drop-down" : ""} flex flex-col gap-6 items-center mb-15 lg:mb-2.5`}
      >
        {links.map((link, index) => (
          <Links
            link={link}
            key={index}
            isDropDown={isDropDown}
            toggleDropDown={toggleDropDown}
          />
        ))}
      </ul>
      {/* {isTutorialActive ? null : (
        <>
          
        </>
      )} */}
      <button onClick={handlePlayButton} className="mt-10 lg:mt-0 self-center">
        <img
          src={isPlaying ? PauseButton : PlayButton}
          alt="play-button"
          aria-label={isPlaying ? "Play" : "Pause"}
          title="Listen to DOMI radio"
          className="button-play mb-2.5 lg:mb-0 lg:mt-5 size-[80px]"
        />
      </button>

      <p className="domi-text lg:mb-5  text-gray-950 dark:text-gray-50 text-[0.9rem] text-center">
        <span className="bolden text-[1.2rem]">LISTEN TO DOMI RADIO</span>{" "}
        Music, Messages, Testimonies <br /> and lots more...
      </p>
    </aside>
  );
}
