import { useState } from "react";
import { useRouter } from "next/router";
import styled from "styled-components";
import DeleteButton from "./Buttons/DeleteButton";
import Preview from "./Preview";
import { nanoid } from "nanoid";
import { FiSave, FiPlusCircle } from "react-icons/fi";
import { ImCancelCircle } from "react-icons/im";
import { PrimaryButton } from "./Buttons/PrimaryButton";

export default function CreateSurveyForm({
  title,
  questions,
  date,
  description,
  url,
  onSubmit,
}) {
  const router = useRouter();
  const [survey, setSurvey] = useState({
    title: title,
    description: description,
    date: date,
    url: url,
    questions: questions,
  });

  function handleChangeTitle(event) {
    let newTitle = event.target.value;
    if (newTitle.startsWith(" ")) {
      newTitle = newTitle.replace(" ", "");
    }
    if (newTitle.includes("  ")) {
      newTitle = newTitle.replace("  ", " ");
    }
    setSurvey({ ...survey, title: newTitle });
  }

  function handleChangeQuestion(index, event) {
    let newQuestion = event.target.value;
    if (newQuestion.startsWith(" ")) {
      newQuestion = newQuestion.replace(" ", "");
    }
    if (newQuestion.includes("  ")) {
      newQuestion = newQuestion.replace("  ", " ");
    }
    const newObj = { ...survey };
    newObj.questions[index].title = newQuestion;
    setSurvey(newObj);
  }
  function handleChangeType(index, event) {
    const newObj = { ...survey };
    newObj.questions[index].type = event.target.value;
    setSurvey(newObj);
  }
  function handleAdd() {
    const newQuestions = [...survey.questions];
    newQuestions.push({
      title: "",
      type: "",
      id: nanoid(),
      answers: [],
    });
    const newSurvey = { ...survey, questions: newQuestions };
    setSurvey(newSurvey);
  }
  function handleDelete(index) {
    const newQuestions = [...survey.questions];
    newQuestions.splice(index, 1);
    const newSurvey = { ...survey, questions: newQuestions };
    setSurvey(newSurvey);
  }
  function handleSubmit(event) {
    event.preventDefault();

    onSubmit(survey);
  }

  return (
    <Container>
      <h2>Create your survey here:</h2>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          name="title"
          required
          placeholder="your title"
          style={{ width: "100%" }}
          value={survey.title}
          onChange={handleChangeTitle}
          onKeyPress={(e) => {
            // this prevents a submit when hitting Enter!
            e.key === "Enter" && e.preventDefault();
          }}
        />
        <hr />

        {survey.questions.map((question, index) => (
          <QuestionWrapper key={question.id}>
            <QuestionInput
              onKeyPress={(e) => {
                // this prevents a submit when hitting Enter!
                e.key === "Enter" && e.preventDefault();
              }}
              maxLength="200"
              type="text"
              name={`question-${index}`}
              placeholder="your question"
              required
              value={question.title}
              onChange={(event) => handleChangeQuestion(index, event)}
            />
            <select
              name={`type-${index}`}
              required
              value={question.type}
              onChange={(event) => handleChangeType(index, event)}
            >
              <option value="" disabled>
                choose type
              </option>
              <option value="yes/no">Yes/No</option>
              <option value="text">Text</option>
              <option value="choice">Choice</option>
            </select>
            <DeleteButton
              onClick={() => {
                handleDelete(index);
              }}
            />
            <Preview title={question.title} type={question.type} />
          </QuestionWrapper>
        ))}

        <PrimaryButton bg="#9BD77C" onClick={handleAdd}>
          <FiPlusCircle />
          New Question
        </PrimaryButton>
        <hr />
        <PrimaryButton bg="#9BD77C" type="submit">
          <FiSave />
          Save
        </PrimaryButton>
        <PrimaryButton
          bg="#E5586A"
          color="#eee"
          onClick={() => {
            router.push("/surveys");
          }}
        >
          <ImCancelCircle />
          Cancel
        </PrimaryButton>
      </form>
    </Container>
  );
}
const QuestionInput = styled.input`
  width: 100%;
`;
const QuestionWrapper = styled.section`
  position: relative;
  display: grid;
  gap: 5px;
  grid-template-columns: auto 100px 40px;

  word-break: break-word;
`;
const Container = styled.section`
  padding: 0px;
  max-width: 600px;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  align-items: stretch;
  & input,
  & select {
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