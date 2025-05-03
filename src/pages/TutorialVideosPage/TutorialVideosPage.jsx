import { useParams } from "react-router-dom";
import "./TutorialVideosPage.css";
import { watchTutorials } from "../../services/api/data";
import { TutorialCard } from "../../components/ui/TutorialCard/TutorialCard";
import { useEffect } from "react";

export function TutorialVideosPage() {
  const { id } = useParams();
  const tutorial = watchTutorials.find((t) => t.id === id);
  const relatedVideos = watchTutorials.filter((t) => t.id !== id);
  // const tutorialTitle = watchTutorials.map((tutorial) => tutorial.title);
  const currentTutorialTitle = tutorial?.title;
  console.log(currentTutorialTitle);
  useEffect(
    function () {
      if (!currentTutorialTitle) return;
      document.title = `Intranet Page - ${currentTutorialTitle}`;

      return function () {
        document.title = "Intranet Page - Faith Tabernacle";
      };
    },
    [currentTutorialTitle]
  );

  return (
    <div className="tutorial-video-section flex gap-10">
      <div className="tutorial-video-container w-[75%]">
        <div className="tutorial-video">
          <iframe
            width="560"
            height="315"
            className="w-full h-[625px] rounded-2xl"
            src={`https://www.youtube.com/embed/${tutorial.id}?si=lTG9LEur9T_ypR-c`}
            title={tutorial.title}
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            referrerPolicy="strict-origin-when-cross-origin"
            allowFullScreen
          ></iframe>
        </div>

        <div className="related-videos-container  mt-4 mr-5">
          <h1 className="related-videos-heading mb-3 text-2xl font-semibold text-center text-gray-900 ">
            Related videos
          </h1>

          <div className="related-videos h-[220px] grid grid-cols-3 gap-5  grid-rows-[auto_1fr] overflow-y-scroll">
            {relatedVideos.map((tutorial) => (
              <TutorialCard key={tutorial.id} tutorial={tutorial} />
            ))}
          </div>
        </div>
      </div>
      <div className="tutorial-summay w-full max-w-[350px]">
        <h3 className="text-[20px] mb-3 font-semibold summary-heading ">
          Summary
        </h3>

        <p className="summary-text text-[16px] leading-7">
          This is a summary for the tutorial titled {tutorial.title} -
          {tutorial.description} <br />
          This is a summary for the tutorial titled {tutorial.title} -
          {tutorial.description} <br />
          This is a summary for the tutorial titled {tutorial.title} -
          {tutorial.description}
        </p>
      </div>
    </div>
  );
}
