import Head from "next/head";
import Header from "./Header";

export default function Layout({ title, descriptoin, keywords, children }) {
  return (
    <>
      <Head>
        <title>{title}</title>
        <meta name="description" content={descriptoin} />
        <meta name="keywords" content={keywords} />
        {/* Favicon loading from /public/favicon.png */}
        <link rel="icon" href="favicon.png" />
      </Head>
      {/* Header / navigation */}
      <Header />
      <div>{children}</div>
      {/* Footer */}
    </>
  );
}

Layout.defaultProps = {
  title: "Hdev | Made for developers",
  description: "Developer/programmer can find what they want",
  keywords: "nextjs, blog, programmer, ",
};
