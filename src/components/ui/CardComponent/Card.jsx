import { useSideBar } from "../../../hooks/SideBarContext";
import "./Card.css";
export function Card({ post }) {
  const { onOpenPopUp } = useSideBar();
  // const validatedPost = {
  //   img: post.img || "",
  //   date: post.date || "No date",
  //   note: post.note || "No note",
  // };
  return (
    <>
      <div
        className={`card p-5  rounded-xl`}
        tabIndex="0"
        role="article"
        aria-label={`Post by ${post.name} on ${post.date}`}
      >
        <div
          className="info-img rounded-lg mb-2.5"
          style={{ backgroundImage: `url(${post.img})` }}
        ></div>
        <div className="info-top text-[0.9rem] lg:text-[1rem] mb-[0.5px]">
          <p className="info-date">{post.date}</p>
          <p className="info-name">{post.name}</p>
        </div>
        <p className="info-note text-[0.9rem] lg:text-[1rem]">
          {!post.name ? post.notes : post.notes.note1}
        </p>

        <span
          className="read-more text-[0.9rem] lg:text-[1rem]"
          onClick={() => onOpenPopUp(post)}
        >
          Read more
        </span>
      </div>
    </>
  );
}
