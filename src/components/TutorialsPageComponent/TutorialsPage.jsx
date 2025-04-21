import "./TutorialsPage.css";
import { TutorialCard } from "../ui/TutorialCard/TutorialCard";
import { watchTutorials } from "../../services/api/data";
import { TutorialsIcon } from "../ui/TutorialsIcon";
import { ExitIcon } from "../ui/ExitIcon";
import { Link } from "react-router-dom";
// import
export function TutorialsPage() {
  return (
    <div className="tutorials-container w-full h-full  mt-5">
      <div className="tutorial-header mb-5 ">
        <div className=" flex items-center gap-3">
          <TutorialsIcon />
          <h2 className="tutorials-title text-4xl text-gray-950 dark:text-gray-50  font-semibold mb-1 flex-1">
            Watch Tutorials
          </h2>
          <Link
            to="/"
            className="exit-icon cursor-pointer "
            title="Exit"
            // onClick={handleExitTutorial}
          >
            <ExitIcon />
          </Link>
        </div>
        <p className="tutorials-description text-gray-800 dark:text-gray-200 text-lg w-7/10">
          Explore tutorials on powerful business tools to boost productivity and
          enhance professional skills.
        </p>
      </div>
      <div className="tutorial-cards-container grid lg:grid-cols-3  gap-5  xl:grid-cols-4 grid-rows-[auto_1fr] sm:grid-cols-2 grid-cols-1">
        {watchTutorials.map((tutorial, index) => (
          <TutorialCard key={index} tutorial={tutorial} />
        ))}
      </div>
    </div>
  );
}
