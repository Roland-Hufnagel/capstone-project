import styled from "styled-components";

export default function QuestionCard({ question }) {
  return (
    <StyledQuestionCard>
      <fieldset>
        <legend>{question}</legend>
        <input type="radio" id="yes" name={question} value="Yes" />
        <label htmlFor="yes">Yes</label>
        <input type="radio" id="no" name={question} value="No" />
        <label htmlFor="no">No</label>
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
