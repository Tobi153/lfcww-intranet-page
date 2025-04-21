import "./Overlay.css";
import { useSideBar } from "../../../hooks/SideBarContext";
// import { useState } from "react";
// import {}
export function Overlay({ children }) {
  const { handleClosePopUp, isPopUp, selectedCard: card } = useSideBar();

  return (
    <>
      <div
        className={`modal ring-5 bg-[#f5f6f5] dark:bg-gray-900  max-h-9/10 ring-[#e8e8e890]  ${isPopUp ? "pop-up scale-100 opacity-100 translate-[-50%]" : "scale-0 opacity-0 translate-[-50%]"} transition-all lg:h-[600px] lg:max-h-[600px]   duration-300 w-4/5 max-w-[850px]  grid ${card ? "lg:grid-cols-2 items-center" : ""} grid-cols-1  gap-5 p-5`}
      >
        <div
          className="close-btn text-gray-900 dark:text-gray-50 hover:text-[#ba1313] transition-all"
          role="button"
          aria-label="Close modal"
          onClick={handleClosePopUp}
        >
          <p>&times;</p>
        </div>
        {children}
      </div>
      <div
        className={`overlay w-full h-full ${isPopUp ? "opacity-100 backdrop-blur-md visible" : "opacity-0 backdrop-blur-none invisible"} w-full h-full transition-all duration-300 cursor-pointer`}
      ></div>
    </>
  );
}
