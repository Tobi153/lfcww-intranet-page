import "./Links.css";
import ArrowUpIcon from "../../../assets/arrow-up.svg";
export function Links({ link, toggleDropDown, isDropDown }) {
  return (
    <li
      className={`nav-link bg-[#fefefe] hover:bg-[#e5e2e2]  nav-link-${link.num} ${!isDropDown ? "drop-down" : ""}`}
      role="button"
      aria-expanded={isDropDown}
      onClick={link.num === 1 ? toggleDropDown : null}
    >
      <div className="link">
        <img src={link.logo} alt={link.name} className="nav-logo" />
        <p className="sidebar-title">{link.name}</p>
      </div>
      {link.arrow && (
        <img
          src={!isDropDown ? link.arrow : ArrowUpIcon}
          alt="Expand menu"
          className={`chevron-down-arr ${!isDropDown ? "drop-down" : ""}`}
        />
      )}
    </li>
  );
}
