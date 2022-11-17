import styled from "styled-components";

const PrimaryButton = styled.button`
  all: unset;
  background-color: ${({ bg }) =>
    bg === "myBlue"
      ? "var(--myBlue)"
      : bg === "myRed"
      ? "var(--myRed)"
      : "var(--myGreen)"};

  color: ${({ color }) =>
    color === "white" ? "var(--whitetext)" : "var(--darktext)"};
  font-weight: 400;
  padding: 0.5em;
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
