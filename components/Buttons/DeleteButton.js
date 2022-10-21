import styled from "styled-components";
import { TiDeleteOutline } from "react-icons/ti";

export default function DeleteButton({onClick}) {
  return (
    <MyButton type="button" onClick={onClick}>
      <MyIcon />
    </MyButton>
  );
}
const MyButton = styled.button`
  border: none;
  color: #e3371e;
  &:hover {
    cursor: pointer;
    color: #A52502;
  }
`;
const MyIcon = styled(TiDeleteOutline)`
  width: 40px;
  height: 40px;
`;
