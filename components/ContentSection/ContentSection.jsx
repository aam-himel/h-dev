import articles from "@constant/articleData";
import { ArticleCard, ContentOptions } from "../index";

export default function ContentSection() {
  return (
    <div>
      {/* Content options  */}
      <ContentOptions />

      {/* Main Content Area */}
      {articles.map((article, index) => (
        <section className="bg-white rounded ">
          <ArticleCard article={article} key={index} />
        </section>
      ))}
    </div>
  );
}
