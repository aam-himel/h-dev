import hashTags from "@constant/tags";

export default function ArticleCard({ article }) {
  let expression = "himel vai";
  return (
    <section className="h-auto  bg-white rounded p-8 mb-2 border-b-2">
      <h1 className=" text-2xl font-bold text-black antialiased">
        {article.title}
      </h1>

      <div className="py-4">
        {article.tags.map((tag) => (
          <span className=" font-normal pr-4 text-gray-800"> {`#${tag}`} </span>
        ))}
      </div>
    </section>
  );
}
