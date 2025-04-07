import { createContext, useState } from "react";

export const SideBarContext = createContext();

export function SideBarProvider({ children }) {
  const [isPopUp, setIsPopUp] = useState(false);
  const [selectedCard, setSelectedCard] = useState(null);
  const [activeIndex, setActiveIndex] = useState(null);

  function handleOpenPopUp(card) {
    setIsPopUp(true);
    setSelectedCard(card);
  }

  function handleClosePopUp() {
    setIsPopUp(false);
    setSelectedCard(null);
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
      }}
    >
      {children}
    </SideBarContext.Provider>
  );
}
