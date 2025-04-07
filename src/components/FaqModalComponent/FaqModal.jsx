import { Overlay } from "../ui/OverlayComponent/Overlay";
import "./FaqModal.css";
import { faqs } from "../../services/api/data";

export function FaqModal() {
  return (
    <Overlay>
      <div className="text-gray-800 mt-2.5">
        <h2 className="text-2xl text-center font-bold mb-5">
          Frequently Asked Questions
        </h2>
        {faqs.map((faq, index) => (
          <div className="faq " key={index}>
            <h3>{faq.question}</h3>
            <p>{faq.answer}</p>
          </div>
        ))}
      </div>
    </Overlay>
  );
}
