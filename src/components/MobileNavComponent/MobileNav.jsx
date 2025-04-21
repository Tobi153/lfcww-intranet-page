import { useSideBar } from "../../hooks/useSidebar";
import { links } from "../../services/api/data";

export function MobileNav() {
  const { isToggle } = useSideBar();
  return (
    <nav
      className={`lg:hidden text-black select-none fixed z-10 top-0 right-0   transform-x-[10000px] h-[100vh] translate-x-[-130] transition-all opacity-0 invisible  duration-500 ${isToggle ? "opacity-100 visible  w-full" : ""} mobile-nav w-0 h-100vw fixed bg-[#f5f6f5] dark:bg-gray-900 p-10 pt-[150px]`}
    >
      <ul className="links-container flex flex-col gap-8 ">
        {links.map((link, index) => (
          <li
            className="mobile-link flex items-center gap-3 transition-all translate-x-0 rounded-4xl duration-300 bg-transparent hover:bg-gray-200/75 dark:hover:bg-gray-50/80 hover:text-[#880909] focus-within:bg-gray-100 focus-within:text-[#880909] hover:scale-105 px-5 py-3 cursor-pointer text-gray-900 dark:text-gray-100"
            tabIndex={0}
            key={index}
          >
            <img
              src={link.logo}
              alt={`${link.name}  logo`}
              className="w-[20px] h-[20px]"
              // width={24}
              // height={24}
            />
            <p>{link.name}</p>
          </li>
        ))}
      </ul>
    </nav>
  );
}
