import winnersLogo from "../../assets/cropped-logo.webp";
import iconSupport from "../../assets/support.svg";
import iconFaq from "../../assets/faq.svg";

import "./header.css";
import { useSideBar } from "../../hoooks/useSidebar";
export function Header() {
  const { setIsPopUp } = useSideBar();
  return (
    <header className="header col-span-3 flex items-center justify-between bg-white rounded-xl shadow-2xl shadow-black/10">
      <img src={winnersLogo} alt="Winners logo" className="winners-logo" />
      <nav className="nav-links">
        <img
          src={iconSupport}
          alt="support icon"
          className="header-icon support-icon cursor-pointer"
        />
        <img
          src={iconFaq}
          alt="support icon"
          className="header-icon faq-icon cursor-pointer"
          onClick={() => setIsPopUp(true)}
        />
      </nav>
    </header>
  );
}
