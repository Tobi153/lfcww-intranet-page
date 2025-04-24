import "./TutorialsPage.css";
import { TutorialCard } from "../../components/ui/TutorialCard/TutorialCard";
import { watchTutorials } from "../../services/api/data";
import { TutorialsIcon } from "../../components/ui/TutorialsIcon";
import { ExitIcon } from "../../components/ui/ExitIcon";
import { Link } from "react-router-dom";
import { SearchBar } from "../../components/ui/SearchBar";
// import { useSideBar } from "../../hooks/SideBarContext";
// import
export function TutorialsPage() {
  // const { searched } = useSideBar();

  return (
    <div className="tutorials-container w-full h-full  mt-2 lg:mt-5">
      <SearchBar />
      <div className="tutorials-header mb-5 ">
        <div className="tutorials-header-container flex items-center gap-2 lg:gap-3 flex-wrap mb-1">
          <TutorialsIcon />
          <h2 className="tutorials-title text-[1.3rem] lg:text-4xl text-gray-950 dark:text-gray-50  font-semibold mb-1 flex-1">
            Watch Tutorials
          </h2>
          <Link
            to="/"
            className="exit-icon cursor-pointer mt-[-5px]"
            title="Exit"
          >
            <ExitIcon />
          </Link>
        </div>
        <p className="tutorials-description text-gray-800 dark:text-gray-200 lg:text-lg text-[0.9rem] w-full  ">
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
