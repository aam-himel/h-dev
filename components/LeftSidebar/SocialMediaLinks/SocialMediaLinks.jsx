import { Facebook, Linkedin, Dribble, Github } from "@images/index";
import FacebookImg from "@images/facebook.svg";
import Image from "next/image";

export default function SocialMediaLinks() {
  return (
    <div className="px-4 flex">
      <div className="p-2">
        <Image src={Github} width="20" height="20" />
      </div>
      <div className="p-2">
        <Image src={Linkedin} width="20" height="20" />
      </div>
      <div className="p-2">
        <Image src={Dribble} width="20" height="20" />
      </div>
      <div className="p-2">
        <Image src={Facebook} width="20" height="20" />
      </div>
    </div>
  );
}
