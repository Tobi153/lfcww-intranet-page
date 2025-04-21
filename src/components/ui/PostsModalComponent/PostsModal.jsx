// import { useState } from "react";
import { Overlay } from "../OverlayComponent/Overlay";
import { useSideBar } from "../../../hooks/useSidebar";
import "./PostsModal.css";

export function PostsModal() {
  const { selectedCard: card, setActiveIndex } = useSideBar();
  return (
    <>
      <div
        className="modal-img w-full   h-[200px] lg:h-full mb-2.5 lg:mb-0 "
        style={{ backgroundImage: `url(${card.img})` }}
      ></div>
      <div
        className={`modal-contents  lg:mr-12 ${!card?.name ? "" : "mt-2 h-[550px]"}  `}
      >
        {!card?.name ? (
          <>
            <div className="modal-top w-full flex items-center justify-between mr-2.5">
              <p className="modal-date text-[12px] font-bold">{card.date}</p>
              <p className="modal-name text-[12px]">{card?.name}</p>
            </div>
            <p className="modal-note text-[16px] text-gray-900 dark:text-gray-100">
              {card.notes}
            </p>
          </>
        ) : (
          <>
            <div className="flex justify-between text-gray-950 dark:text-gray-50 text-lg">
              <p className="mb-5">
                Comments ({Object.keys(card.notes).length})
              </p>
            </div>
            <form className="flex flex-col items-end gap-2 mb-2.5">
              <textarea
                placeholder="Write your comments here..."
                className="transition-all duration-300 ring-1 p-2.5 pt-1 h-20 resize-none ring-gray-200 rounded-lg border-gray-300 bg-gray-50 placeholder:text-gray-800 text-[14px] w-full text-gray-950 focus-visible:ring-3 focus-visible:ring-gray-200"
              ></textarea>
              <button
                type="button"
                className="cursor-pointer text-white bg-[#ba1313] hover:bg-[#aa1313]   focus:bg-[#aa1313] font-medium rounded-lg text-sm px-3.5 py-1.5 focus:outline-none "
              >
                Send
              </button>
            </form>
            <div className="comment-box flex flex-col gap-y-3.5 max-h-[370px] overflow-y-scroll dark:[&::-webkit-scrollbar-track]:bg-gray-900 [&::-webkit-scrollbar-track]:bg-[#f5f6f5] [&::-webkit-scrollbar-thumb]:bg-black">
              {Object.values(card.notes).map((note, index) => (
                <div
                  key={index}
                  className={`cursor-pointer  comment text-[14px] text-gray-700 dark:text-gray-300  transition-all duration-500`}
                  onClick={() => setActiveIndex(index)}
                >
                  <p className="font-bold text-gray-950 dark:text-gray-50">
                    {card.name}
                  </p>
                  {note}
                </div>
              ))}
            </div>
          </>
        )}
      </div>
    </>
  );
}
