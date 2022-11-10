import styled from "styled-components";
import { TiDeleteOutline } from "react-icons/ti";

export default function DeleteButton({ onClick }) {
  return (
    <MyButton aria-label="delete" type="button" onClick={onClick}>
      <MyIcon />
    </MyButton>
  );
}
const MyButton = styled.button`
  all: unset;
  border: none;
  color: #FF5A33;
  &:hover {
    cursor: pointer;
    color: #a52502;
  }
`;
const MyIcon = styled(TiDeleteOutline)`
  width: 100%;
  height: 100%;
`;
