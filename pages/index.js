import Head from "next/head";
import Link from "next/link";

export default function Home() {
  return (
    <div>
      <Head>
        <title>My App</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <header>
        <h1>Free Feedback Form</h1>
      </header>
      <main>
        <Link href="/create">Create Survey</Link>
      </main>
    </div>
  );
}
