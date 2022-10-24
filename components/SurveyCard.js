import styled from "styled-components";
import { evaluateBySurveyId } from "../services/surveyService";
import Link from "next/link";
import { MdOutlineContentCopy } from "react-icons/md";
import DeleteButton from "./Buttons/DeleteButton";
export default function SurveyCard({ title, url, date, id, onDelete }) {
  return (
    <StyledSurveyCard>
      <h2>{title}</h2>
      <time>{date}</time>
      <DisplayLink>
        <span>{url}</span>
        <button
          onClick={() => {
            navigator.clipboard.writeText(url);
          }}
        >
          <MdOutlineContentCopy />
        </button>
      </DisplayLink>
      <ButtonContainer>
        <Link href={`/evaluation/${id}`} passHref>
          <StyledAnchor>Evaluation</StyledAnchor>
        </Link>
        <Link href={`/create/${id}`} passHref>
          <StyledAnchor>Edit</StyledAnchor>
        </Link>
        <StyledButton onClick={onDelete}>Delete</StyledButton>
      </ButtonContainer>
    </StyledSurveyCard>
  );
}
const ButtonContainer = styled.section``;

const DisplayLink = styled.section`
  border: 1px solid #aaa;
  border-radius: 0.2em;
  background-color: #dedede;
  padding: 0.3em;
  display: flex;
  justify-content: space-between;
  color: #555;
  & button {
    border: none;
    &:hover {
      cursor: pointer;
      background-color: #fff;
    }
  }
`;

const StyledSurveyCard = styled.li`
  all: unset;
  border: 1px solid black;
  border-radius: 0.4em;
  padding: 0.5em;
  display: flex;
  flex-direction: column;
  gap: 10px;
  & h2{
    margin-bottom: 0;
  }
  )
`;
const StyledAnchor = styled.a`
  all: unset;
  background-color: #ddd;
  border: 1px solid black;
  border-radius: 0.2em;
  padding: 0.3em;
  cursor: pointer;
  margin-right: 0.8em;
`;
const StyledButton = styled.button`
  all: unset;
  background-color: #ddd;
  border: 1px solid black;
  border-radius: 0.2em;
  padding: 0.3em;
  cursor: pointer;
  margin-right: 0.8em;
`;
