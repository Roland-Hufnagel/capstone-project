import Head from "next/head";
import styled from "styled-components";

export default function Home() {
  return (
    <div>
      <Head>
        <title>My App</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <h1>My App</h1>
        <MyDiv>Welcome World</MyDiv>
      </main>
    </div>
  );
}

const MyDiv=styled.div`
width: 200px;
height: 200px;
color: blue;
`;