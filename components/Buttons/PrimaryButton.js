import styled from "styled-components";

const PrimaryButton = styled.button`
  all: unset;
  background-color: ${({ bg }) => (bg ? bg : "#44803f")};
  border: 3px solid ${({ bg }) => (bg ? bg : "#44803f")};
  color: ${({ color }) => (color ? color : "#101828")};

  padding: 0.3em;
  border-radius: 0.3em;
  display: inline-flex;
  margin: 5px 5px 5px 0;
  gap: 0.4em;
  align-items: center;
  &:hover {
    cursor: pointer;
    
    transform: scaleY(1.1);
  }
`;
export { PrimaryButton };
