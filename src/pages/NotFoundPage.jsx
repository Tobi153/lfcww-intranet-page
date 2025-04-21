import { Link } from "react-router-dom";

export function NotFoundPage() {
  return (
    <div className="not-found-container text-white p-10 text-7xl">
      <div>404 Not Found </div>
      <Link
        to="/"
        className="button bg-blue-600 transition-all duration-300 text-2xl py-1.5 px-4 hover:bg-blue-800 rounded-2xl"
      >
        Back to home
      </Link>
    </div>
  );
}
