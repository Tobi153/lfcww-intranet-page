import { useParams } from "react-router-dom";
import "./TutorialVideosPage.css";
import { watchTutorials } from "../../services/api/data";
import { TutorialCard } from "../../components/ui/TutorialCard/TutorialCard";

export function TutorialVideosPage() {
  const { id } = useParams();
  const tutorial = watchTutorials.find((t) => t.id === id);
  const relatedVideos = watchTutorials.filter((t) => t.id !== id);
  return (
    <div className="tutorial-video-section">
      <div className="tutorial-video-container">
        <iframe
          width="560"
          height="315"
          className="w-8/10 h-[625px] rounded-2xl"
          src={`https://www.youtube.com/embed/${tutorial.id}?si=lTG9LEur9T_ypR-c`}
          title={tutorial.title}
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          referrerPolicy="strict-origin-when-cross-origin"
          allowFullScreen
        ></iframe>
      </div>

      <div className="related-videos-container w-8/10 mt-4 mr-5">
        <h1 className="related-videos-heading mb-3 text-2xl font-semibold text-center text-gray-900 ">
          Related videos
        </h1>

        <div className="related-videos h-[220px] grid grid-cols-3 gap-5  grid-rows-[auto_1fr] overflow-y-scroll">
          {relatedVideos.map((tutorial, index) => (
            <TutorialCard key={index} tutorial={tutorial} />
          ))}
        </div>
      </div>
    </div>
  );
}
