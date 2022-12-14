import styled from "styled-components";
import { PrimaryButton } from "./Buttons/PrimaryButton";
import { MdOutlineDone } from "react-icons/md";
import { ImCancelCircle } from "react-icons/im";

export default function Modal({ text1, text2, onYes, onNo }) {
  return (
    <ModalContainer>
      <div>
        <h2>{text1}</h2>
        <p>{text2}</p>
        <PrimaryButton  onClick={onYes}>
          <MdOutlineDone />
          Yes
        </PrimaryButton>
        <PrimaryButton bg="myRed" color="white" onClick={onNo}>
          <ImCancelCircle />
          No
        </PrimaryButton>
      </div>
    </ModalContainer>
  );
}
const ModalContainer = styled.div`

  text-align: center;
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  align-content: center;
  position: fixed;
  z-index: 300;
  top: 0;
  left: 0;
  backdrop-filter: blur(12px);
  font-size: 1.2em;
  & div{
    max-width: 600px;
    background-color: hsla(0, 100%, 100%,0.9);
    border-radius: 1.0em;padding: 0.5em;
  }
  & p{
    font-weight: 400;
  }
`;
