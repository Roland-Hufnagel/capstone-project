import styled from "styled-components";

const PrimaryButton = styled.button`
  all: unset;
  background-color: ${({ color }) => (color ? color : "#44803f")};
  border: 3px solid ${({ color }) => (color ? color : "#44803f")};
  color: #edf0f5;
  padding: 0.3em;
  border-radius: 0.3em;
  display: inline-flex;
  margin: 0 5px 5px 0;
  gap: 0.4em;
  align-items: center;
  &:hover {
    cursor: pointer;
    transform: scale(0.95);
  }
`;
export { PrimaryButton };
