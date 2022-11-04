import styled from "styled-components";

const PrimaryButton = styled.button`
  all: unset;
  background-color: ${({color}) => color ? color : "#44803f"};
  color: #edf0f5;
  padding: 0.5em;
  border-radius: 0.3em;
  display: inline-flex;
  margin-right: 5px;
  gap: 0.4em;
  align-items: center;
  &:hover {
    cursor: pointer;
    transform: scale(0.95);
  }
`;
export { PrimaryButton };
