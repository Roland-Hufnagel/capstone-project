import styled from "styled-components";
import { AiOutlineArrowRight } from "react-icons/ai";
import Image from "next/image";
import { PrimaryButton } from "../../../components/Buttons/PrimaryButton";
export default function Thankyou() {
  return (
    <StyledSection>
      <p>THANK YOU FOR YOUR FEEDBACK</p>
      <Image
        src="/img/roland_capstone_home_illustration.svg"
        alt="home illustration"
        layout="responsive"
        width={100}
        height={60}
      />
      <Teaser>
        You like what you see? Try out making your own surveys and get precious
        feedback. It's free.
        <hr />
        <PrimaryButton bg="#9BD77C">
          <AiOutlineArrowRight />
          Try out
        </PrimaryButton>
      </Teaser>
    </StyledSection>
  );
}

const StyledSection = styled.section`
  text-align: center;
  padding: 10px;
  & p {
    margin: 0 auto;
    color: #1f73b5;
    font-size: 2.5em;
    font-weight: 200;
    padding: 20px;
  }
`;
const Teaser = styled.section`
  margin-top: 20px;
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
