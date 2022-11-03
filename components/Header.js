import styled from "styled-components";
import Image from "next/image";
import LoginButton from "./Buttons/LoginButton";

export default function Header() {
  return (
    <StyledHeader>
      <span>
        <Image
          src="/img/mogen.png"
          alt="lots of feedback"
          layout="fixed"
          width={65}
          height={65}
        />
        <Image
          src="/img/mogen.png"
          alt="lots of feedback"
          layout="fixed"
          width={65}
          height={65}
        />
        <Image
          src="/img/mogen.png"
          alt="lots of feedback"
          layout="fixed"
          width={65}
          height={65}
        />
      </span>
      <span>
        <LoginButton />
      </span>
    </StyledHeader>
  );
}

const StyledHeader = styled.header`
  max-width: 600px;
  font-size: 1.5rem;
  margin: 0.5em auto;
  display: flex;
  justify-content: space-between;
  border-bottom: 1px solid black;
`;
