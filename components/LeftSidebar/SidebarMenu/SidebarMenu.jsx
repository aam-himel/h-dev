import sidebarMenu from "@constant/sidebarMenu";
import Link from "next/link";
export default function SidebarMenu({ item }) {
  return (
    <div className="px-4 bg-white flex flex-col py-6">
      {sidebarMenu.map((item, index) => (
        <Link href={item.path}>
          <a className=" text-sm py-1 px-4 hover:bg-gray-100">
            {item.linkText}
          </a>
        </Link>
      ))}
    </div>
  );
}
