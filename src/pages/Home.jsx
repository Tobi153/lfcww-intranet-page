import { Header } from "../components/HeaderComponent/header";
import { RightSideBar } from "../components/RightSideBarComponent/RightSideBar";
import { QuickLinks } from "../components/QuickLinksComponent/QuickLinks";
import { Banner } from "../components/BannerComponent/Banner";
import { LeftSideBar } from "../components/LeftSideBarComponent/LeftSideBar";

export function HomePage() {
  return (
    <>
      <div className="hidden lg:block lg:col-span-1 header-container">
        <Header />
      </div>
      <div className="w-full mx-auto main-content lg:flex flex-col lg:w-full lg:relative">
        <Banner />
        <QuickLinks />
      </div>
      <div className="hidden w-full  xl:w-full lg:block right-sidebar-container">
        <RightSideBar />
      </div>

      <div className="lg:hidden w-full">
        <LeftSideBar />
      </div>
      {/* Right Sidebar (Visible in mobile, hidden in desktop) */}
      <div className="lg:hidden w-full">
        <RightSideBar />
      </div>
    </>
  );
}
