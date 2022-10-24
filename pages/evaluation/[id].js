import { getSurveyById } from "../../services/surveyService";
import EvaluationCard from "../../components/EvaluationCard";
import styled from "styled-components";
import Link from "next/link";

export async function getServerSideProps(context) {
  const { id } = context.params;
  const survey = getSurveyById(id);
  return {
    props: {
      ...survey,
    },
  };
}

export default function Evaluation({ id, date, title, questions }) {
  return (
    <StyledEvaluation>
      <h1>{title}</h1>
      <p>{date}</p>

      <StyledEvaluationList>
        {questions.map((question, index) => (
          <EvaluationCard
            key={index}
            question={question.title}
            yes={question.yes}
            no={question.no}
            na={question.na}
          />
        ))}
      </StyledEvaluationList>
      <Link href="../surveys" passHref>
        <StyledAnchor>Back to overview</StyledAnchor>
      </Link>
    </StyledEvaluation>
  );
}

const StyledEvaluation = styled.article`
  max-width: 600px;
  margin: 0 auto;
  & h1,
  & p {
    text-align: center;
  }
`;

const StyledEvaluationList = styled.ul`
  all: unset;
  display: flex;
  flex-direction: column;
  gap: 10px;
  margin-bottom: 40px;
`;

const StyledAnchor = styled.a`
  all: unset;
  background-color: #ddd;
  border: 1px solid black;
  border-radius: 0.2em;
  padding: 0.3em;
  cursor: pointer;
`;
