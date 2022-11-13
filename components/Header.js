import styled from "styled-components";
import Image from "next/image";
import LoginArea from "./LoginArea";
import Link from "next/link";
import { useRouter } from "next/router";

export default function Header() {
  const router = useRouter();

  return (
    <StyledHeader>
      <Link href="/" passHref>
        <a>
          <Image
            src="/img/mogen.png"
            alt="lots of feedback"
            layout="fixed"
            width={65}
            height={65}
          />
        </a>
      </Link>
    {!router.pathname.includes("subscribe")&&<LoginArea />}
    {router.pathname.includes("subscribe")&&<TextLogo>FREE FEEDBACK FORM</TextLogo>}
    </StyledHeader>
  );
}
const TextLogo=styled.p`

`;
const StyledHeader = styled.header`
  max-width: 600px;
  font-size: 1.5rem;
  margin: 0.5em auto;
  display: flex;
  justify-content: space-between;
  border-bottom: 1px solid black;
`;
