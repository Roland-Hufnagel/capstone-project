import Header from "./Header";
import styled from "styled-components";

export default function Layout({ children }) {
  return (
    <>
      <Header />
      <StyledMain>{children}</StyledMain>
    </>
  );
}
const StyledMain=styled.main`
max-width: 600px;
margin: 0 auto;

`;
