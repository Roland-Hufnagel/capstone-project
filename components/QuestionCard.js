import styled from "styled-components";

export default function QuestionCard({ question, id, type }) {
  return (
    <StyledQuestionCard>
      <fieldset>
        <legend>{question}</legend>
        {type === "yes/no" && (
          <>
            <label>
              <input type="radio" name={id} value="Yes" required />
              Yes
            </label>
            <label>
              <input type="radio" name={id} value="No" />
              No
            </label>
          </>
        )}
        {type === "text" && (
          <>
            <textarea rows="3" maxLength="200" name={id} />
          </>
        )}
      </fieldset>
    </StyledQuestionCard>
  );
}

const StyledQuestionCard = styled.li`
  list-style: none;
  margin: 1rem 0;
  & input {
    margin: 1.2em;
  }
  & fieldset {
    border-radius: 0.4em;
  }
  & textarea {
    width: 100%;
    font-family: "Noto Sans";
  }
`;
