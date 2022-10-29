import EvaluationCard from "../../components/EvaluationCard";
import styled from "styled-components";
import Link from "next/link";
import dbConnect from "../../lib/dbConnect";
import SurveyModel from "../../models/SurveyModel";
import QuestionModel from "../../models/QuestionModel";

export async function getServerSideProps(context) {
  const { id } = context.params;
  await dbConnect();
  const survey = await SurveyModel.findById(id);
  const title = survey.title;
  const date = survey.date;
  const questions = await QuestionModel.find({ survey_id: id });
  const sanitizedQuestions = questions.map((question) => ({
    id: question.id,
    title: question.title,
    type: question.type,
    results: question.results,
  }));
  return {
    props: {
      id: id,
      title: title,
      date: date,
      questions: [...sanitizedQuestions],
    },
  };
}

export default function Evaluation({ id, date, title, questions }) {
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
            results={question.results}
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
