import { Header } from "./components/HeaderComponent/header";
import { LeftSideBar } from "./components/LeftSideBarComponent/LeftSideBar";
import { RightSideBar } from "./components/RightSideBarComponent/RightSideBar";
import { QuickLinks } from "./components/QuickLinksComponent/QuickLinks";
import { Banner } from "./components/BannerComponent/Banner";
import { Overlay } from "./components/ui/OverlayComponent/Overlay";
import "./App.css";
import { PostsModal } from "./components/ui/PostsModalComponent/PostsModal";
import { FaqModal } from "./components/FaqModalComponent/FaqModal";
import { useSideBar } from "./hoooks/useSidebar";

function App() {
  const { selectedCard } = useSideBar();
  return (
    <div className="bg-[#fffbf8] mx-auto my-0 px-10 py-5 pb-10  w-full ">
      {/* {selectedCard ? <PostsModal /> : <FaqModal />} */}
      {selectedCard && <PostsModal />}
      {!selectedCard && <FaqModal />}
      {/* Grid layout (Mobile: 1 column, Desktop: 3 columns with 3 rows) */}
      <div className="grid grid-cols-1  w-full lg:grid-cols-[0.8fr_1.5fr_0.7fr] lg:grid-rows-[auto_1fr] gap-10">
        {/* Header (Spans full width in both mobile & desktop) */}
        <div className="lg:col-span-3 ">
          <Header />
        </div>

        {/* Left Sidebar (Hidden in mobile, visible in desktop) */}
        <div className="hidden w-full lg:block lg:h-full">
          <LeftSideBar />
        </div>

        {/* Main Content (Banner & QuickLinks) */}
        <div className=" lg:w-[900px]">
          <Banner />
          <QuickLinks />
        </div>

        {/* Right Sidebar (Hidden in mobile, visible in desktop) */}
        <div className="hidden w-full lg:block">
          <RightSideBar />
        </div>

        {/* Left Sidebar (Visible in mobile, hidden in desktop) */}
        <div className="lg:hidden w-full">
          <LeftSideBar />
        </div>

        {/* Right Sidebar (Visible in mobile, hidden in desktop) */}
        <div className="lg:hidden w-full">
          <RightSideBar />
        </div>
      </div>
    </div>
  );
}

export default App;
