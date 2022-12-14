import QuestionCard from "../../components/QuestionCard";
import styled from "styled-components";
import { useRouter } from "next/router";
import { getSurveyById } from "../../services/surveyService";
import { PrimaryButton } from "../../components/Buttons/PrimaryButton";
import { AiOutlineArrowRight } from "react-icons/ai";
export async function getServerSideProps(context) {
  const { id } = context.params;
  const survey = await getSurveyById(id);

  return {
    props: {
      ...survey,
    },
  };
}

export default function Survey({ id, title, date, questions }) {
  const router = useRouter();

  async function handleSubmit(event) {
    event.preventDefault();
    const formData = new FormData(event.target);
    const data = Object.fromEntries(formData);
    for (const key in data) {
      questions.find((question) => question.id === key).answers.push(data[key]);
    }
    try {
      const response = await fetch(`/api/subscribe/${id}`, {
        method: "PUT",
        body: JSON.stringify(questions),
      });
      await response.json();
      router.push("./thankyou");
    } catch (error) {
      console.error(error);
    }
  }

  return (
    <StyledForm onSubmit={handleSubmit}>
      <h2>{title}</h2>

      <ul>
        {questions.map((question) => (
          <QuestionCard
            key={question.id}
            id={question.id}
            question={question.title}
            type={question.type}
          />
        ))}
      </ul>
      <PrimaryButton type="submit">
        <AiOutlineArrowRight />
        Submit
      </PrimaryButton>
    </StyledForm>
  );
}

const StyledForm = styled.form`
  max-width: 600px;
  margin: 0 auto;
  & ul {
    all: unset;
  }
`;
