// import { useState } from "react";
import { Overlay } from "../OverlayComponent/Overlay";
import { useSideBar } from "../../../hoooks/useSidebar";
import "./PostsModal.css";

export function PostsModal() {
  const {
    selectedCard: card,
    isPopUp,
    activeIndex,
    setActiveIndex,
  } = useSideBar();
  return (
    <Overlay>
      {isPopUp && card ? (
        <>
          <div
            className="modal-img w-full h-full mb-2.5 lg:mb-0"
            style={{ backgroundImage: `url(${card.img})` }}
          >
            {/* <img src={card.img} alt="Selected image" /> */}
          </div>
          <div className={`modal-contents mr-12 ${!card?.name ? "" : "mt-2"}`}>
            {!card?.name ? (
              <>
                <div className="modal-top w-full flex items-center justify-between mr-2.5">
                  <p className="modal-date text-[12px]">{card.date}</p>
                  <p className="modal-name text-[12px]">{card?.name}</p>
                </div>
                <p className="modal-note text-[14px]">{card.notes}</p>
              </>
            ) : (
              <>
                <div className="flex justify-between text-gray-950 text-lg">
                  <p className="mb-5">
                    Comments ({Object.keys(card.notes).length})
                  </p>
                </div>
                <form className="relative mb-2.5">
                  <textarea
                    placeholder="Write your comments here..."
                    className=" ring-1 p-2.5 pt-1 h-20 resize-none ring-gray-200 rounded-lg border-gray-300 bg-gray-50 placeholder:text-gray-800 text-[14px] w-full text-gray-950"
                  ></textarea>
                  <button
                    type="button"
                    className="absolute cursor-pointer right-[-2px] bottom-[6px] text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800"
                  >
                    Send
                  </button>
                </form>
                <div className="comment-box overflow-y-auto flex flex-col gap-y-3.5">
                  {Object.values(card.notes).map((note, index) => (
                    <div
                      key={index}
                      className={`cursor-pointer  comment text-[14px] text-gray-700 line-clamp-2 ${index === activeIndex ? "line-clamp-none" : ""} transition-all duration-500`}
                      onClick={() => setActiveIndex(index)}
                    >
                      <p className="font-bold text-gray-950">{card.name}</p>
                      {note}
                    </div>
                  ))}
                </div>
              </>
            )}
          </div>
        </>
      ) : null}
    </Overlay>
  );
}
