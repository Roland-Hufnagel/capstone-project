import styled from "styled-components";
import { evaluateBySurveyId } from "../services/surveyService";
import Link from "next/link";
export default function SurveyCard({ title, date, id }) {
  
  return (
    <StyledSurveyCard>
      <p>{title}</p>
      <p>{date}</p>
      <Link href={`/evaluation/${id}`} passHref><StyledAnchor>Evaluation</StyledAnchor></Link>
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
`;