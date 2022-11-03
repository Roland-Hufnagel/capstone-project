import { useSession, signIn, signOut } from "next-auth/react";
import styled from "styled-components";
import Image from "next/image";

export default function LoginButton() {
  const { data: session } = useSession();
  if (session) {
    return (
      <>
       <button onClick={() => signOut()}>Sign out</button>
          <Image
            style={{ borderRadius: "50%" }}
            src={session.user.image}
            alt="User"
            layout="fixed"
            width={55}
            height={55}
          />
        <br />
        
      </>
    );
  }
  return (
    <>
      
      <button onClick={() => signIn()}>Sign in</button>
    </>
  );
}

