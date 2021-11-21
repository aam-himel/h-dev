import { ContentOptions } from "../index";

export default function ContentSection() {
  return (
    <div>
      {/* Content options  */}
      <ContentOptions />

      {/* Main Content Area */}
      <section className="bg-white h-screen rounded-md p-2">
        <h1>Content Section</h1>
      </section>
    </div>
  );
}
