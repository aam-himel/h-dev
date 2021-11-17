import Head from "next/head";

export default function Home() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen py-2">
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className="w-auto  bg-indigo-800 text-center ">
        <h1 className="text-5xl font-black text-indigo-100 p-3">
          Hello, Nextjs lovers 🔥{" "}
        </h1>
      </main>
    </div>
  );
}
