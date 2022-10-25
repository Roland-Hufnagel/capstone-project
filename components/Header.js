import styled from "styled-components";
import Image from "next/image";

export default function Header() {
  return (
    <StyledHeader>
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
    </StyledHeader>
  );
}

const StyledHeader = styled.header`
  max-width: 600px;
  font-family: "Bungee Outline";
  font-size: 1.5rem;
  margin: 0.5em auto;
  display: flex;
  justify-content: center;
`;
