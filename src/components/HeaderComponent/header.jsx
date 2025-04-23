import winnersLogo from "../../assets/cropped-logo.webp";
import iconSupport from "../../assets/support.svg";
import iconFaq from "../../assets/faq.svg";
import { HamburgerIcon } from "../ui/HamburgerIcon";
import { MenuCloseIcon } from "../ui/MenuCloseIcon";
import { LightModeIcon } from "../ui/LightModeIcon";
import { DarkModeIcon } from "../ui/DarkModeIcon";
import { Link } from "react-router-dom";

import "./header.css";
import { useSideBar } from "../../hooks/SideBarContext";
export function Header() {
  const { setIsPopUp, isToggle, handleMenuToggle, isDarkMode, toggleDarkMode } =
    useSideBar();
  return (
    <header className="header py-4 px-6 lg:py-5 lg:px-7 justify-between select-none w-full col-span-3 flex items-center  lg:justify-end  rounded-2xl lg:rounded-xl shadow-2xl shadow-black/10 lg:shadow-none lg:shadow-transparent ring-2 ring-[#fff] dark:ring-gray-800 lg:ring-0 ">
      <Link to="/" className="logo-link lg:hidden " tabIndex="0">
        <img
          src={winnersLogo}
          alt="Winners logo"
          className="winners-logo w-10 "
        />
      </Link>
      <nav className="nav-links flex items-center gap-2 lg:gap-5 mr-[-5px] lg:mr-0">
        <button
          className="cursor-pointer flex items-center justify-center icon-button w-[24px] h-[24px] lg:w-auto lg:h-auto border-0  outline-0 bg-none lg:p-4 dark:bg-gray-900
  bg-[#f5f6f5] lg:ring-2  lg:shadow-md lg:shadow-black/10 lg:rounded-4xl"
          aria-label="Support"
          title="Support"
        >
          <img
            src={iconSupport}
            alt="Support button"
            className="header-icon support-icon cursor-pointer "
          />
        </button>
        <button
          className="icon-button cursor-pointer flex items-center justify-center w-[24px] h-[24px] lg:w-auto lg:h-auto lg:p-4 dark:bg-gray-900  bg-[#f5f6f5] lg:ring-2  lg:shadow-md lg:shadow-black/10 lg:rounded-4xl border-0 outline-0 bg-none p-0"
          title="Frequently Asked Questions"
          onClick={() => setIsPopUp(true)}
        >
          <img
            src={iconFaq}
            alt="Frequently Asked Questions button"
            className="header-icon faq-icon cursor-pointer"
            aria-label="Frequently Asked Questions"
          />
        </button>
        <button
          className={`lg:hidden w-[24px] h-[24px] border-0 outline-0 ${isToggle ? "fixed" : "absolute"}   bg-none p-0 menu-icon-container  ${isToggle ? "menu-open" : ""}`}
          aria-label={`${isToggle ? "Close menu" : "Open menu"}`}
          aria-expanded={isToggle}
          aria-controls="sidebar-menu"
        >
          <MenuCloseIcon onClick={handleMenuToggle} />
          <HamburgerIcon onClick={handleMenuToggle} />
        </button>

        <button
          className={`cursor-pointer  mr-10 lg:mr-0 theme-icon-container lg:p-[25px] w-[24px] h-[24px] lg:w-auto lg:h-auto border-0  outline-0 bg-none bg-[#f5f6f5] lg:ring-2 dark:bg-gray-900
 lg:shadow-md  lg:shadow-black/10 lg:rounded-4xl ${isDarkMode ? "dark" : ""}`}
          aria-label={
            isDarkMode ? "Switch to Light Mode" : "Switch to Dark Mode"
          }
          title={isDarkMode ? "Switch to Light Mode" : "Switch to Dark Mode"}
          onClick={toggleDarkMode}
        >
          <LightModeIcon />
          <DarkModeIcon />
        </button>
      </nav>
    </header>
  );
}
