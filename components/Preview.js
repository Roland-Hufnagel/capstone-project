import styled from "styled-components";

export default function Preview({ title, type }) {
  return (
    <StyledPreview>
      <legend>Preview:</legend>
      <p>{title}</p>
      {type === "text" && (
        <textarea rows="3" disabled style={{ width: "100%" }}></textarea>
      )}
      {type === "yes/no" && (
        <YesNoContainer>
          <input type="radio" disabled />
          Yes
          <input type="radio" disabled />
          No
        </YesNoContainer>
      )}
      {type === "choice" && (
        <>
          <ChoiceContainer>
            <span>1</span>
            <span>2</span>
            <span>3</span>
            <span>4</span>
            <span>5</span>

            <input type="radio" disabled />
            <input type="radio" disabled />
            <input type="radio" disabled />
            <input type="radio" disabled />
            <input type="radio" disabled />
          </ChoiceContainer>
        </>
      )}
    </StyledPreview>
  );
}
const YesNoContainer=styled.section`
display: flex;
gap: 10px;
`;
const ChoiceContainer = styled.section`  
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr 1fr;
  grid-template-rows: 1fr 1fr auto;
  justify-items: center;
`;
const StyledPreview = styled.fieldset`
  grid-column-start: 1;
  grid-column-end: 4;
  background-color: #ddd;
  color: black;
  border-radius: 5px;
  border: 1px solid #aaa;
  margin-bottom: 30px;
  & textarea {
    resize: none;
  }
`;
