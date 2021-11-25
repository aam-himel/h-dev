import PopulerTags from "./PopulerTags/PopulerTags";
import SidebarMenu from "./SidebarMenu/SidebarMenu";
import SocialMediaLinks from "./SocialMediaLinks/SocialMediaLinks";
export default function LeftSidebar() {
  return (
    <aside className="h-screen rounded mt-12">
      {/* Sidebar Menu */}
      <SidebarMenu />
      {/* Populer Tags */}
      <div className=" h-60 overflow-y-scroll my-6 ">
        <PopulerTags />
      </div>

      <div className="px-4">
        <SocialMediaLinks />
      </div>
    </aside>
  );
}
