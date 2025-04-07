import "./QuickLink.css";
import iconArrow from "../../assets/right-up.svg";
export function QuickLink({ quickLink }) {
  return (
    <div
      className={`quick-link flex flex-col justify-between  p-5 bg-[#060505b0] rounded-2xl h-[150px] lg:ml-4`}
      style={{ backgroundImage: `url(${quickLink.img})` }}
    >
      <div className="top mb-2">
        <div className="icon">
          <img src={quickLink.logo} alt={quickLink.name} />
        </div>
        <img className="icon-arrow" src={iconArrow} alt="arrow icon" />
      </div>
      <p className="title">{quickLink.name}</p>
    </div>
  );
}
