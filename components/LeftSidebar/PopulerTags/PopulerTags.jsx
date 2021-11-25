import populerTags from "@constant/populerTags";
import Link from "next/link";
export default function PopulerTags() {
  return (
    <div className="px-4 flex flex-col py-6">
      {populerTags.map((tag) => (
        <Link href="/">
          <a className="px-4 py-2 text-sm">#{tag}</a>
        </Link>
      ))}
    </div>
  );
}
