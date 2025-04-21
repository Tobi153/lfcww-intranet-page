import "./CarouselDots.css";
export function CarouselDots({ items, activeIndex, setActiveIndex }) {
  function handleKeyPress(e, i) {
    if (e.key === "Enter" || e.key === " ") {
      setActiveIndex(i);
    }
  }

  return (
    <div className="carousel-dots  ">
      {items.map((_, i) => (
        <div
          className={`carousel-dot ${i === activeIndex ? "active" : ""}`}
          key={i}
          role="button"
          tabIndex="0"
          onClick={() => setActiveIndex(i)}
          aria-label={`Go to slide ${i + 1}`}
          onKeyDown={(e) => handleKeyPress(e, i)}
        ></div>
      ))}
    </div>
  );
}
