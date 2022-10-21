import styled from "styled-components";
import { BiMessageSquareAdd } from "react-icons/bi";

export default function AddButton({ onClick }) {
  return (
    <MyButton type="button" onClick={onClick}>
      <MyIcon />
    </MyButton>
  );
}
const MyButton = styled.button`
border: none;
  color: #44803f;
  width: 50px;
  height: 50px;
  padding: 0;
  &:hover {
    cursor: pointer;
    color: #146152;
  }
`;
const MyIcon = styled(BiMessageSquareAdd)`
width: 100%;
height: 100%;
`;
