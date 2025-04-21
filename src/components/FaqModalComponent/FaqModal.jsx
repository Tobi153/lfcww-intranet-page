import { Overlay } from "../ui/OverlayComponent/Overlay";
import "./FaqModal.css";
import { faqs } from "../../services/api/data";
import { useState } from "react";

export function FaqModal() {
  const [selectedItemIndex, setSelectedItemIndex] = useState(null);

  function toggleSelected(index) {
    if (selectedItemIndex === index) {
      return setSelectedItemIndex(null);
    }
    setSelectedItemIndex(index);
  }
  return (
    <div className="text-black mt-4 text-lg flex flex-col gap-5  ">
      <h2 className="text-3xl text-center font-bold mb-5 dark:text-gray-100 text-black">
        Frequently Asked Questions
      </h2>
      <div className="faq-container flex flex-col gap-5">
        {faqs.map((faq, index) => (
          <div
            className={`faq cursor-pointer py-5 border-b-1 border-gray-500 bg-gray-200 rounded-2xl px-5  transition-all duration-300`}
            key={index}
            onClick={() => toggleSelected(index)}
          >
            {/* <div className=""></div> */}
            <div className={`flex items-center `}>
              <h3 className="w-full text-[20px] font-semibold">
                {faq.question}
              </h3>
              <div
                className={`text-2xl faq-toggle-btn font-semibold ${selectedItemIndex === index ? "open" : ""}`}
              >
                <p>{selectedItemIndex === index ? "-" : "+"}</p>
              </div>
            </div>
            <p
              className={`overflow-hidden transition-all duration-300  ${selectedItemIndex === index ? "max-h-[500px] " : "max-h-0"}  `}
            >
              {faq.answer}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}
