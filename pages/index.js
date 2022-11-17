import Head from "next/head";
import styled from "styled-components";
import { useSession, signIn, signOut } from "next-auth/react";
import { useRouter } from "next/router";
import { AiOutlinePieChart } from "react-icons/ai";
import { FiPlusCircle } from "react-icons/fi";
import { AiOutlineArrowRight } from "react-icons/ai";
import { PrimaryButton } from "../components/Buttons/PrimaryButton";
import Image from "next/image";

export default function Home() {
  const { data: session } = useSession();
  const router = useRouter();
  return (
    <div>
      <Head>
        <title>Free Feedback Form</title>
        <meta name="description" content="Create your own surveys here" />
      </Head>
      <ImageContainer>
        <Image
          src="/img/fff_matisse.svg"
          alt="home"
          layout="responsive"
          width={300}
          height={40}
        />
      </ImageContainer>
      <Image
        src="/img/roland_capstone_home_illustration.svg"
        alt="home illustration"
        layout="responsive"
        width={100}
        height={80}
      />

      {!session && (
        <Teaser>
          <h2>PRECIOUS FEEDBACK</h2>
          <p>
            Create surveys in a minute and invite your students, customers,
            employeers to get precious feedback. Start now and sign in.
          </p>
          <PrimaryButton  onClick={() => signIn()}>
            <AiOutlineArrowRight />
            Sign in
          </PrimaryButton>
        </Teaser>
      )}

      {session && (
        <>
          <PrimaryButton
            onClick={() => {
              router.push("/create");
            }}
          >
            <FiPlusCircle />
            Create a new Survey
          </PrimaryButton>
          <PrimaryButton
            onClick={() => {
              router.push("/surveys");
            }}
          >
            <AiOutlinePieChart />
            Explore your Surveys
          </PrimaryButton>
        </>
      )}
    </div>
  );
}
const ImageContainer = styled.div`
  margin: 0 0.8em;
`;
const Teaser = styled.section`
  background-color: #fff;
  box-shadow: 0px 12px 16px -4px rgba(16, 24, 40, 0.2),
    0px 4px 6px -2px rgba(16, 24, 40, 0.03);
  border-radius: 0.4em;
  padding: 0.8em;
  & h2 {
    font-weight: 300;
    color: #1f73b5;
  }
`;
const Headline = styled.h1`
  font-family: "Source Sans Pro";
  font-weight: 200;
  font-size: 2.4rem;
  margin-bottom: 2rem;
  position: absolute;
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
