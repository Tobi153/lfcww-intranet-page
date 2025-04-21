import "./QuickLink.css";
import { ArrowIcon } from "../ui/ArrowIcon";
export function QuickLink({ quickLink }) {
  return (
    <div
      className={`quick-link flex  flex-col justify-between  p-5 bg-[#060505b0] rounded-2xl h-[150px] lg:ml-[16px] lg:mr-[2px] `}
      style={{ backgroundImage: `url(${quickLink.img})` }}
      tabIndex={0}
    >
      <div className="top mb-2">
        <div className="icon">
          <img src={quickLink.logo} alt={quickLink.name} />
        </div>
        {/* <img className="icon-arrow" src={ArrowIcon} alt="arrow icon" /> */}
        <div className="icon-arrow">
          <ArrowIcon />
        </div>
      </div>
      <p className="title">{quickLink.name}</p>
    </div>
  );
}
