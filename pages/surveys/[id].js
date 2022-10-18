import QuestionCard from "../../components/QuestionCard";
import { getSurveyById } from "../../services/surveyService";
import styled from "styled-components";
import { useRouter } from "next/router";

export async function getServerSideProps(context) {
  const { id } = context.params;
  const survey = await getSurveyById(id);
  return {
    props: {
      ...survey,
    },
  };
}

export default function Survey({ id, title, questions }) {
  const router = useRouter();

  function handleSubmit(event) {
    event.preventDefault();
    const formData = new FormData(event.target);
    const data = Object.fromEntries(formData);
    router.push("./thankyou");
  }

  return (
    <StyledForm onSubmit={handleSubmit}>
      <h1>{title}</h1>
      {questions.map((question, index) => {
        return <QuestionCard key={index} question={question} />;
      })}
      <button type="submit">Submit</button>
    </StyledForm>
  );
}

const StyledForm = styled.form`
  max-width: 600px;
  margin: 0 auto;
  & h1 {
    text-align: center;
  }
  & button {
    width: 100%;
    font-size: 1.2em;
  }
`;
