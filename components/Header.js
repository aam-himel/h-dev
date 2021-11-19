import Image from "next/image";
import logo from "../public/images/logo.png";
export default function Header() {
  return (
    <nav className="bg-white w-screen z-20 top-0 fixed shadow-sm">
      <div className=" max-w-7xl mx-auto px-2 md:px-4 h-14 flex items-center justify-between">
        {/* Left nav links */}
        <div className="flex items-center">
          <Image src={logo} width="118" height="42" />
        </div>
        {/* Right nav links */}
        <div className="">
          <ul className="flex">
            <li className="pl-6">
              <a href="#">About Us</a>
            </li>
            <li className="pl-6">
              <a href="#">Contact</a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}
