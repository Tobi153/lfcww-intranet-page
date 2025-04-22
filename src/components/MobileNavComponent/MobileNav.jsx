import { useSideBar } from "../../hooks/SideBarContext";
import { links } from "../../services/api/data";
import "./MobileNav.css";
export function MobileNav() {
  const { isToggle } = useSideBar();
  return (
    <nav
      className={`mobile-nav lg:hidden text-black select-none fixed z-10 top-0 right-0   transform-x-[10000px] h-full translate-x-[-130] transition-all opacity-0 invisible  duration-500 ${isToggle ? "opacity-100 visible  w-full" : ""}  w-0 min-h-[100vh] fixed  p-10 pt-27 overflow-y-hidden`}
    >
      <ul className="links-container flex flex-col gap-4">
        {links.map((link, index) => (
          <li
            className="mobile-link text-[1.05rem] flex items-center gap-3 transition-all translate-x-0 rounded-4xl duration-300 bg-transparent hover:bg-gray-200 dark:hover:bg-gray-50/80 hover:text-[#880909] focus-within:bg-gray-200 focus-within:text-[#880909] hover:scale-105 px-5 py-3 cursor-pointer "
            tabIndex={0}
            key={index}
          >
            <img
              src={link.logo}
              alt={`${link.name}  logo`}
              className="w-[20px] h-[20px]"
            />
            <p className="text-md">{link.name}</p>
          </li>
        ))}
      </ul>
    </nav>
  );
}
