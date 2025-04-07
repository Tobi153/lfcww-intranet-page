import "./leftSideBar.css";
import { useState } from "react";
import { Links } from "../ui/LinksComponent/Links";
import { links } from "../../services/api/data";
import PauseButton from "../../assets/Pause-button.svg";
import PlayButton from "../../assets/Play-button.svg";
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
    <aside className="left-sidebar max-w-[500px] w-full mx-auto flex flex-col gap-5 rounded-2xl items-center mt-5 lg:mt-0 lg:h-200 bg-[#880909]">
      <nav
        className={`sidebar-links lg:flex-1 sm:none w-full relative ${isDropDown ? "drop-down" : ""} flex flex-col gap-2.5 items-center mb-15 lg:mb-2.5`}
      >
        {links.map((link, index) => (
          <Links
            link={link}
            key={index}
            isDropDown={isDropDown}
            toggleDropDown={toggleDropDown}
          />
        ))}
      </nav>
      <img
        src={isPlaying ? PauseButton : PlayButton}
        alt="play-button"
        role="button"
        className="button-play mt-5 size-[80px]"
        onClick={handlePlayButton}
      />
      <p className="domi-text text-white text-[16px] text-center">
        <span className="bolden text-[20px]">LISTEN TO DOMI RADIO</span> Music,
        Messages, Testimonies <br /> and lots more...
      </p>
    </aside>
  );
}
