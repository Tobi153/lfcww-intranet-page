import "./Links.css";
import ArrowUpIcon from "../../../assets/arrow-up.svg";
import { ChevronArrow } from "../ChevronArrow";
// import { useState } from "react";
// import { useSideBar } from "../../../hooks/useSidebar";
import { Link } from "react-router-dom";
export function Links({ link, toggleDropDown, isDropDown }) {
  // const [isTutorial, setIsTutorial] = useSideBar();
  // const { isTutorialActive, setIsTutorialActive } = useSideBar();
  function handleClick() {
    if (link.num === 1) {
      return toggleDropDown();
    }
    return;
  }

  return (
    <li
      className={`nav-link nav-link-${link.num} ${!isDropDown ? "drop-down" : ""} mb-3 `}
      role="button"
      aria-expanded={isDropDown}
      onClick={handleClick}
    >
      <Link
        to={link.name === "Watch Tutorials" ? "/tutorials" : "/"}
        className="flex items-center justify-between"
      >
        <div className="link">
          <div className="nav-logo-container">
            <img src={link.logo} alt={link.name} className="nav-logo" />
          </div>
          <p className="sidebar-title">{link.name}</p>
        </div>
        {link.arrow && (
          <div className={`chevron-down-arr ${!isDropDown ? "drop-down" : ""}`}>
            <ChevronArrow />
          </div>
        )}
      </Link>
    </li>
  );
}
