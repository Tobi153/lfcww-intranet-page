import "./Overlay.css";
import { useSideBar } from "../../../hooks/SideBarContext";
import { useEffect } from "react";
// import { useState } from "react";
// import {}
export function Overlay({ children }) {
  const { handleClosePopUp, isPopUp, selectedCard: card } = useSideBar();

  useEffect(() => {
    if (isPopUp) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
  });

  return (
    <div className="relative modal-container overflow-hidden">
      <div
        className={`close-btn text-[2rem] lg:text-[2.5rem] fixed top-5 right-5 hover:text-[#ba1313] transition-all ${isPopUp ? "visible opacity-100" : "invisible opacity-0"} `}
        role="button"
        aria-label="Close modal"
        onClick={handleClosePopUp}
      >
        <p>&times;</p>
      </div>
      <div
        className={`modal overflow-y-hidden ring-5 max-h-8/10 ring-[#e8e8e890] ${isPopUp ? "pop-up scale-100 opacity-100 translate-[-50%]" : "scale-0 opacity-0 translate-[-50%]"} transition-all lg:h-[600px] lg:max-h-[600px]   duration-300 w-4/5 max-w-[850px]  grid ${card ? "lg:grid-cols-2 items-center" : ""} grid-cols-1 gap-1 lg:gap-5 p-5`}
      >
        {children}
      </div>
      <div
        className={`overlay w-full h-full ${isPopUp ? "opacity-100 backdrop-blur-md visible" : "opacity-0 backdrop-blur-none invisible"} w-full h-full transition-all duration-300 cursor-pointer overflow-hidden fixed`}
      ></div>
    </div>
  );
}
