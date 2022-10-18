import styled from "styled-components";

export default function Thankyou() {
  return (
    <StyledDiv>
      <div>Thank you for your feedback</div>
    </StyledDiv>
  );
}

const StyledDiv = styled.div`
  text-align: center;
  margin: 20px auto;
  & div{
    max-width: 600px;
    margin: 0 auto;
    border-radius: 1em;
    font-size: 3em;
    border: 2px solid black;
  }
`;
