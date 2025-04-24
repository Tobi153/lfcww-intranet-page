import { createContext, useState, useContext } from "react";
import { useLocation } from "react-router-dom";
import { useRef } from "react";
import { watchTutorials } from "../services/api/data";

export const SideBarContext = createContext();

export function SideBarProvider({ children }) {
  const [isPopUp, setIsPopUp] = useState(false);
  const [selectedCard, setSelectedCard] = useState(null);
  const [activeIndex, setActiveIndex] = useState(null);
  const [isTutorial, setIsTutorial] = useState(false);
  const [isToggle, setIsToggle] = useState(false);
  const [search, setSearch] = useState("");

  const pageRefContainer = useRef(null);

  const filteredTutorials = watchTutorials.map((tutorial) => {
    const searchTerm = search.toLocaleLowerCase();
    return (
      tutorial.title.toLowerCase().includes(searchTerm) ||
      tutorial.description.toLowerCase().includes(searchTerm)
    );
  });

  const [isDarkMode, setIsDarkMode] = useState(() => {
    const savedMode = localStorage.getItem("darkMode");
    if (savedMode !== null) {
      return savedMode === "true";
    }
    // Fallback to system preference if no saved mode
    return window.matchMedia("(prefers-color-scheme: dark)").matches;
  });

  const location = useLocation();

  const isTutorialActive = location.pathname.includes("/tutorials");
  function toggleDarkMode() {
    setIsDarkMode((prev) => !prev);
  }

  function handleOpenPopUp(card) {
    setIsPopUp(true);
    setSelectedCard(card);
  }

  function handleClosePopUp() {
    setIsPopUp(false);

    setTimeout(() => {
      setSelectedCard(null);
    }, 300);
  }

  function handleMenuToggle() {
    setIsToggle((x) => !x);
  }

  return (
    <SideBarContext.Provider
      value={{
        isPopUp,
        setIsPopUp,
        handleClosePopUp,
        selectedCard,
        onOpenPopUp: handleOpenPopUp,
        activeIndex,
        setActiveIndex,
        setIsTutorial,
        isTutorial,
        isToggle,
        setIsToggle,
        handleMenuToggle,
        isDarkMode,
        toggleDarkMode,
        isTutorialActive,
        pageRefContainer,
        filteredTutorials,
        search,
        setSearch,
      }}
    >
      {children}
    </SideBarContext.Provider>
  );
}

export function useSideBar() {
  return useContext(SideBarContext);
}
