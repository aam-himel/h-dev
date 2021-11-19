import Layout from "@components/Layout";
import Head from "next/head";
import { LeftSidebar, RightSidebar, ContentSection } from "../components";

export default function Home() {
  return (
    <>
      <Layout>
        <Head>
          <title>Hdev - resources for developer</title>
          <link rel="icon" href="/favicon.ico" />
        </Head>

        {/* 3 layout grid */}
        <main
          className="max-w-7xl mx-auto mt-16 grid grid-flow-col 
          grid-cols-[240px,2fr,1fr] gap-4 shadow-md "
        >
          {/* left sidebar */}
          <LeftSidebar />
          {/* content section */}
          <ContentSection />
          {/* Right sidebar */}
          <RightSidebar />
        </main>
      </Layout>
    </>
  );
}
