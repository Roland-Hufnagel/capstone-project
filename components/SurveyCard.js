import styled from "styled-components";
import { evaluateBySurveyId } from "../services/surveyService";
import Link from "next/link";
import DeleteButton from "./Buttons/DeleteButton";
export default function SurveyCard({ title, date, id, onDelete }) {
  return (
    <StyledSurveyCard>
      <p>{title}</p>
      
      <p>{date}</p>
      <Link href={`/evaluation/${id}`} passHref>
        <StyledAnchor>Evaluation</StyledAnchor>
      </Link>
      <StyledButton onClick={onDelete} >Delete</StyledButton>
    </StyledSurveyCard>
  );
}

const StyledSurveyCard = styled.li`
  all: unset;
  border: 1px solid black;
  border-radius: 0.4em;
  padding: 0.5em;
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

