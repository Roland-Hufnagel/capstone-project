import styled from "styled-components";

export default function QuestionCard({ question, index }) {
  return (
    <StyledQuestionCard>
      <fieldset>
        <legend>{question}</legend>
        <label><input type="radio" name={question} value="Yes" />Yes</label>
        <label><input type="radio" name={question} value="No" />No</label>
      </fieldset>
    </StyledQuestionCard>
  );
}

const StyledQuestionCard = styled.li`
  list-style: none;
  margin: 1.0rem 0;
  & input {
    margin: 1.2em;
  }
  & fieldset{
    border-radius: 0.4em;
  }
`;
