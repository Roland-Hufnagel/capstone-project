import styled from "styled-components";

export default function Preview({title, type}) {
  return (
    <StyledPreview>
      <legend>Preview:</legend>
      <p>{title}</p>
      {type==="text" && <textarea rows="3" disabled style={{width: "100%"}}></textarea>}
      {type==="yes/no" && <><input type="radio" disabled />
      Yes
      <input type="radio" disabled />
      No</>}
     </StyledPreview>
  );
}

const StyledPreview = styled.fieldset`
  grid-column-start: 1;
  grid-column-end: 4;
  background-color: #ddd;
  color: #666;
  border-radius: 5px;
  border: 1px solid #aaa;
  margin-bottom: 30px;
`;
