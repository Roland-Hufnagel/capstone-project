import Head from "next/head";
import Link from "next/link";
import styled from "styled-components";
import { useSession } from "next-auth/react";
import { Router, useRouter } from "next/router";
import { AiOutlinePieChart } from "react-icons/ai";
import { FiPlusCircle } from "react-icons/fi";
import { PrimaryButton } from "../components/Buttons/PrimaryButton";
export default function Home() {
  const { data: session } = useSession();
  const router = useRouter();
  return (
    <div>
      <Head>
        <title>Free Feedback Form</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Headline>Free Feedback Form</Headline>
      {!session && <p>Please sign in to start...</p>}

      {session && (
        <>
          <PrimaryButton bg="#9BD77C"
            onClick={() => {
              router.push("/create");
            }}
          >
            <FiPlusCircle />
            Create a new Survey
          </PrimaryButton>
          <PrimaryButton bg="#9BD77C"
            onClick={() => {
              router.push("/surveys");
            }}
          >
            <AiOutlinePieChart />
            Explore your Surveys
          </PrimaryButton>
          {/* <Link href="/create" passHref>
            <StyledAnchor>Start a new Survey</StyledAnchor>
          </Link>
          <br />
          <Link href="/surveys" passHref>
            <StyledAnchor>Explore your Surveys</StyledAnchor>
          </Link> */}
        </>
      )}
    </div>
  );
}
const Headline = styled.h1`
  font-family: "Bungee Outline";
  font-size: 3.2rem;
  margin-bottom: 2rem;
`;
const StyledAnchor = styled.a`
  all: unset;
  font-size: 1em;
  border: 1px solid black;
  border-radius: 0.2em;
  background-color: #ddd;
  padding: 0.2em;
  display: inline-block;
  margin-bottom: 1rem;
  &:hover {
    cursor: pointer;
  }
`;
