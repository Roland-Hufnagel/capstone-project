import { useState } from "react";
import { useRouter } from "next/router";
import styled from "styled-components";
import AddButton from "../../components/Buttons/AddButton";
import DeleteButton from "../../components/Buttons/DeleteButton";
import { getSurveyById } from "../../services/surveyService";
import Preview from "../../components/Preview";

export async function getServerSideProps(context) {
  const { id } = context.params;
  const result = { props: { title: "", questions: [{ title: "" }] } };
  if (id !== "new") {
    const survey = getSurveyById(id);
    result.props = { ...survey };
  }
  return result;
}

export default function CreateSurvey({ title, questions }) {
  const router = useRouter();
  const [survey, setSurvey] = useState({ title: title, questions: questions });

  function handleChangeTitle(event) {
    const newObj = { ...survey };
    newObj.title = event.target.value;
    setSurvey(newObj);
  }
  function handleChangeInput(index, event) {
    const newObj = { ...survey };
    newObj.questions[index].title = event.target.value;
    setSurvey(newObj);
  }
  function handleAdd() {
    const newQuestions = survey.questions;
    newQuestions.push({ title: "", type: "yes/no" });
    const newSurvey = { ...survey, questions: newQuestions };
    setSurvey(newSurvey);
  }
  function handleDelete(index) {
    const newQuestions = survey.questions;
    newQuestions.splice(index, 1);
    const newSurvey = { ...survey, questions: newQuestions };
    setSurvey(newSurvey);
  }
  function handleSubmit(event) {
    event.preventDefault();
    router.push("../surveys/");
  }

  return (
    <Container>
      <h1>Create your personal survey:</h1>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          name="title"
          placeholder="your title"
          style={{ width: "100%" }}
          value={survey.title}
          onChange={handleChangeTitle}
        />
        <hr />
        <AddButton onClick={handleAdd} />
        {survey.questions.map((question, index) => (
          <QuestionWrapper key={index}>
            <input
              onKeyPress={(e) => {
                e.key === "Enter" && e.preventDefault();
              }}
              maxLength="200"
              type="text"
              name="question"
              placeholder="your question"
              value={question.title}
              onChange={(event) => handleChangeInput(index, event)}
            />
            <DeleteButton
              onClick={() => {
                handleDelete(index);
              }}
            />
            <Preview title={question.title} />
          </QuestionWrapper>
        ))}
        <hr />
        <SubmitButton type="submit">Save</SubmitButton>
      </form>
    </Container>
  );
}

const QuestionWrapper = styled.section`
  display: grid;
  gap: 0.8rem;
  grid-template-columns: 9fr auto;
  & input[type="radio"] {
    margin-left: 20px;
    margin-right: 10px;
  }
`;
const Container = styled.main`
  padding: 10px;
  max-width: 600px;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  align-items: stretch;
  & h1 {
    text-align: center;
  }
  & input {
    border: 1px solid #ccc;
    padding: 0.7em;
    font-size: 1rem;
    border-radius: 0.5em;
  }
`;

const SubmitButton = styled.button`
  padding: 0.5em;
  border: 4px solid #44803f;
  border-radius: 0.4em;
  font-size: 1.1em;
  color: #44803f;
  font-weight: bold;
  &:hover {
    cursor: pointer;
    color: #146152;
    border: 4px solid #146152;
  }
`;
