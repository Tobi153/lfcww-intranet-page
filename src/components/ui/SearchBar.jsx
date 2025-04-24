import { SearchIcon } from "./SearchIcon";
import { useSideBar } from "../../hooks/SideBarContext";

export function SearchBar() {
  const { search, setSearch } = useSideBar();

  return (
    <form className="bg-white items-center text-[1rem] mx-auto shadow-xl shadow-black/2  focus-within:shadow-black/6 focus-within:translate-x-[-2px] transition-all duration-300 w-full lg:w-5/10 flex gap-2 px-4 py-3 rounded-4xl cursor-pointer mb-4">
      <SearchIcon />
      <input
        type="text"
        placeholder="Search..."
        aria-label="Search bar"
        className="bg-white text-gray-700 w-full"
        value={search}
        onChange={(e) => setSearch(e.target.value)}
      ></input>
    </form>
  );
}
