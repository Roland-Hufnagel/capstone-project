import EvaluationCard from "../../components/EvaluationCard";
import styled from "styled-components";
import Link from "next/link";
import { getSurveyById } from "../../services/surveyService";
import { authOptions } from "../api/auth/[...nextauth]";
import { unstable_getServerSession } from "next-auth";

export async function getServerSideProps(context) {
  const session = await unstable_getServerSession(
    context.req,
    context.res,
    authOptions
  );
  if (!session) {
    return {
      redirect: {
        destination: "/",
        permanent: false,
      },
    };
  }
  const { id } = context.params;
  const survey = await getSurveyById(id);
  return {
    props: {
      ...survey,
    },
  };
}

export default function Evaluation({ title, date, questions }) {
  return (
    <StyledEvaluation>
      <h2>{title}</h2>
      <p>{date}</p>
      <StyledEvaluationList>
        {questions.map((question, index) => (
          <EvaluationCard
            key={index}
            question={question.title}
            type={question.type}
            answers={question.answers}
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
