import { useSession, signIn, signOut } from "next-auth/react";
import styled from "styled-components";
import Image from "next/image";

export default function LoginArea() {
  const { data: session } = useSession();
  if (session) {
    return (
      <StyledArea>
        <MyButton onClick={() => signOut()}>Sign out</MyButton>

        <ProfileImage>
          <Image
            style={{ borderRadius: "50%" }}
            src={session.user.image}
            alt="User"
            layout="fixed"
            width={65}
            height={65}
          />
        </ProfileImage>
        <span>{session.user.name}</span>
      </StyledArea>
    );
  }
  return (
    <>
      <MyButton onClick={() => signIn()}>Sign in</MyButton>
    </>
  );
}
const ProfileImage = styled.div`
  grid-column-start: 2;
  grid-row-start: 1;
  grid-row-end: 3;
`;
const StyledArea = styled.section`
  display: grid;
  grid-template-columns: 1fr auto;
  grid-template-rows: 1fr 1fr;
  font-size: 0.8em;
`;
const MyButton = styled.button`
  all: unset;

  &:hover {
    cursor: pointer;
  }
`;
