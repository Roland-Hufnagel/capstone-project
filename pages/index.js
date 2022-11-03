import Head from "next/head";
import Link from "next/link";
import styled from "styled-components";
import { useSession, signIn, signOut } from "next-auth/react";
import LoginButton from "../components/Buttons/LoginButton";
import Image from "next/image";
export default function Home() {
  const { data: session } = useSession();
  return (
    <div>
      <Head>
        <title>Free Feedback Form</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Headline>Free Feedback Form</Headline>
      {!session && <p>Please sign in to start...</p>}
      
{session && <>
      <Link href="/create" passHref>
          <StyledAnchor>Start a new Survey</StyledAnchor>
        </Link><br/>
        <Link href="/surveys" passHref>
          <StyledAnchor>Explore your Surveys</StyledAnchor>
        </Link></>}
    </div>
  );
}
const Headline = styled.h1`
  font-family: "Bungee Outline";
  font-size: 3.2rem;
  margin-bottom: 2.0rem;
`;
const StyledAnchor = styled.a`
  all: unset;
  font-size: 1.0em;
  border: 1px solid black;
  border-radius: 0.2em;
  background-color: #ddd;
  padding: 0.2em;
  display: inline-block;
  margin-bottom: 1.0rem;
  &:hover {
    cursor: pointer;
  }
`;
