import { Link } from "react-router-dom";

export function TutorialCard({ tutorial }) {
  return (
    <Link to={`/tutorials/${tutorial.id}`}>
      <div className="tutorial-card p-5 bg-white ring-2 ring-gray-300 rounded-2xl   shadow-xl shadow-black/2 cursor-pointer hover:translate-y-[-3px] hover:shadow-2xl hover:shadow-black/10 transition-all duration-300">
        <div
          className="tutorial-card-img w-full h-[100px] rounded-xl bg-[top center] bg-cover mb-2.5 ring-1 ring-gray-100"
          style={{ backgroundImage: `url(${tutorial.thumbnail})` }}
        ></div>
        <div className="tutorial-description">
          <p className="font-semibold text-gray-900 text-[1rem]  leading-5 mb-1">
            {tutorial.title}
          </p>
          <p className="text-gray-700 text-[0.9rem] lg:text-[1rem] leading-5">
            {tutorial.description}
          </p>
        </div>
      </div>
    </Link>
  );
}
