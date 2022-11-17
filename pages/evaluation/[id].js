import EvaluationCard from "../../components/EvaluationCard";
import styled from "styled-components";
import Link from "next/link";
import { getSurveyById } from "../../services/surveyService";
import { authOptions } from "../api/auth/[...nextauth]";
import { unstable_getServerSession } from "next-auth";
import { PrimaryButton } from "../../components/Buttons/PrimaryButton";
import { useRouter } from "next/router";
import { IoMdArrowRoundBack } from "react-icons/io";
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
  const router = useRouter();
  return (
    <StyledEvaluation>
      <h2>{title}</h2>
      <p>{date}</p>
      <StyledEvaluationList>
        {questions.map((question) => (
          <EvaluationCard
            key={question.id}
            question={question.title}
            type={question.type}
            answers={question.answers}
          />
        ))}
      </StyledEvaluationList>
      <PrimaryButton
        bg="myGreen"
        color="dark"
        onClick={() => router.push(`/surveys`)}
      ><IoMdArrowRoundBack/>
        My Surveys
      </PrimaryButton>
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
  gap: 15px;
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
