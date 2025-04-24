import { LeftSideBar } from "./LeftSideBarComponent/LeftSideBar";
import { Outlet } from "react-router-dom";
import { Overlay } from "./ui/OverlayComponent/Overlay";
import { PostsModal } from "./ui/PostsModalComponent/PostsModal";
import { FaqModal } from "./FaqModalComponent/FaqModal";
import { MobileNav } from "./MobileNavComponent/MobileNav";
import { useEffect } from "react";
import { Header } from "./HeaderComponent/header";
// import { useSideBar } from "../hooks/useSidebar";
import { SideBarProvider, useSideBar } from "../hooks/SideBarContext";

export function Layout() {
  return (
    <SideBarProvider>
      <LayoutContent />
    </SideBarProvider>
  );
}

function LayoutContent() {
  const { selectedCard, isDarkMode, isTutorialActive, pageRefContainer } =
    useSideBar();
  useEffect(() => {
    if (isDarkMode) {
      document.documentElement.classList.add("dark");
      localStorage.setItem("darkMode", "true");
    } else {
      document.documentElement.classList.remove("dark");
      localStorage.setItem("darkMode", "false");
    }
  }, [isDarkMode]);
  return (
    <div
      className={`bg-[#F5F6F5] mx-auto my-0    min-h-[100vh] w-full  overflow-x-hidden relative page-container`}
      ref={pageRefContainer}
    >
      {console.log(isTutorialActive)}
      <Overlay>{selectedCard ? <PostsModal /> : <FaqModal />}</Overlay>
      <MobileNav />
      <div
        className={`grid px-8 mb-20 sm:mb-0 pr-8 md:pr-5 py-8 mx-auto grid-cols-1 ${isTutorialActive ? "lg:grid-cols-[30%_60%] xl:grid-cols-[25%_70%] 2xl:grid-cols-[22.5%_74.5%] " : "lg:grid-rows-[0.05fr_1fr_1fr]"} w-full xl:grid-cols-[25%_43%_25%] 2xl:grid-cols-[22.5%_50%_22.5%] xl:grid-rows-[auto_1fr] max-w-[2000px]  gap-x-10 gap-y-5  mx-auto lg:mx-auto`}
      >
        <div className="lg:col-span-1 header-container lg:hidden">
          <Header />
        </div>
        {/* Left Sidebar (Hidden in mobile, visible in desktop) */}
        <div className="hidden w-full lg:block lg:h-full left-sidebar-container">
          <LeftSideBar />
        </div>

        <Outlet />
      </div>
    </div>
  );
}
