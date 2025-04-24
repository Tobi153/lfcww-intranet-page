import { useParams } from "react-router-dom";
import "./TutorialVideosPage.css";
import { watchTutorials } from "../../services/api/data";

export function TutorialVideosPage() {
  const { id } = useParams();
  const tutorial = watchTutorials.find((t) => t.id === id);

  return (
    <div className="tutorial-video-container">
      <iframe
        width="560"
        height="315"
        className="w-full h-[600px] rounded-2xl"
        src={`https://www.youtube.com/embed/${tutorial.id}?si=lTG9LEur9T_ypR-c`}
        title={tutorial.title}
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        referrerPolicy="strict-origin-when-cross-origin"
        allowFullScreen
      ></iframe>
    </div>
  );
}
