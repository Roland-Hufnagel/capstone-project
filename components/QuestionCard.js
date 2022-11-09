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
        {type==="choice"&&(
        
        
        <ChoiceContainer>
            <label for="one">1</label>
            <label for="two">2</label>
            <label for="three">3</label>
            <label for="four">4</label>
            <label for="five">5</label>

            <input type="radio" name={id} id="one" value="1" />
            <input type="radio" name={id} id="two" value="2" />
            <input type="radio" name={id} id="three" value="3" />
            <input type="radio" name={id} id="four" value="4" />
            <input type="radio" name={id} id="five" value="5" />
          </ChoiceContainer>
      
        )}
      </fieldset>
    </StyledQuestionCard>
  );
}
const ChoiceContainer = styled.section`  
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr 1fr;
  grid-template-rows: 1fr ;
  justify-items: center;
`;
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
