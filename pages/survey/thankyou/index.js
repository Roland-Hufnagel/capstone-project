import styled from "styled-components";

export default function Thankyou() {
  return (
    <StyledSection>
      <p>Thank you for your feedback</p>
    </StyledSection>
  );
}

const StyledSection = styled.section`
  text-align: center;
  padding: 10px;
  & p{
    //max-width: 600px;
    margin: 0 auto;
    border-radius: 1em;
    font-size: 3em;
    border: 2px solid black;
    padding: 20px;
  }
`;
