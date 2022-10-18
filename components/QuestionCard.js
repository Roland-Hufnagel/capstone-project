import styled from "styled-components";

export default function QuestionCard({ question }) {
  return (
    <StyledQuestionCard>
      <legend>{question}</legend>
      <input type="radio" id="yes" name={question} value="Yes" required/>
      <label htmlFor="yes">Yes</label>
      <input type="radio" id="no" name={question} value="No" />
      <label htmlFor="no">No</label>
    </StyledQuestionCard>
  );
}

const StyledQuestionCard = styled.fieldset`
  border: 1px solid black;
  margin: 1em auto;
  padding: 1.0em;
  & input{
    margin: 1.2em;
  }
`;
