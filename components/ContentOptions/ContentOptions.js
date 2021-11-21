import Link from "next/link";
import contentOptionLinks from "constant/contentOptionLinks";

export default function ContentOptions() {
  return (
    <div className=" flex items-center font-normal text-lg">
      {contentOptionLinks.map((item, index) => (
        <Link href={item.url} key={index}>
          <a className=" px-2 py-3">{item.linkText}</a>
        </Link>
      ))}
    </div>
  );
}
