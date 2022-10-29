import QuestionCard from "../../components/QuestionCard";
import styled from "styled-components";
import { useRouter } from "next/router";
import dbConnect from "../../lib/dbConnect";
import SurveyModel from "../../models/SurveyModel";
import QuestionModel from "../../models/QuestionModel";

export async function getServerSideProps(context) {
  const { id } = context.params;
  await dbConnect();
  const survey = await SurveyModel.findById(id);
  const title = survey.title;
  const questions = await QuestionModel.find({ survey_id: id });
  const sanitizedQuestions = questions.map((question) => ({
    id: question.id,
    title: question.title,
    type: question.type,
  }));
  return { props: { title: title, questions: [...sanitizedQuestions] } };
}

export default function Survey({ title, questions }) {
  const router = useRouter();

  function handleSubmit(event) {
    event.preventDefault();
    const formData = new FormData(event.target);
    const data = Object.fromEntries(formData);
    router.push("./thankyou");
  }

  return (
    <StyledForm onSubmit={handleSubmit}>
      <h2>{title}</h2>
      <ul>
        {questions.map((question, index) => (
          <QuestionCard
            key={index}
            index={index}
            question={question.title}
            type={question.type}
          />
        ))}
      </ul>
      <button type="submit">Submit</button>
    </StyledForm>
  );
}

const StyledForm = styled.form`
  max-width: 600px;
  margin: 0 auto;

  & button {
    width: 100%;
    font-size: 1em;
    border-radius: 0.3em;
    padding: 0.3em;
  }
  & ul {
    all: unset;
  }
`;
