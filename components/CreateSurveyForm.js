import { useState } from "react";
import { useRouter } from "next/router";
import styled from "styled-components";
import DeleteButton from "./Buttons/DeleteButton";
import Preview from "./Preview";
import { FiSave, FiPlusCircle } from "react-icons/fi";
import { ImCancelCircle } from "react-icons/im";
import { PrimaryButton } from "./Buttons/PrimaryButton";
import { nanoid } from "nanoid";
import PulseLoader from "react-spinners/PulseLoader";
import Modal from "./Modal";

export default function CreateSurveyForm({
  title,
  questions,
  date,
  description,
  url,
  onSubmit,
  editMode,
}) {
  
  const router = useRouter();
  const [survey, setSurvey] = useState({
    title: title,
    description: description,
    date: new Date(),
    url: url,
    questions: questions,
  });
  const [saveModal, setSaveModal] = useState(false);
  const [loading, setLoading] = useState(false);
  function startLoader() {
    setLoading(!loading);
  }

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
  function handleChangeDescription(event) {
    setSurvey({ ...survey, description: event.target.value });
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
  function handleSubmit() {
    onSubmit(survey);
  }
  async function saveAsNew() {
    const data = { ...survey };
    data.date = new Date();
    data.questions.map((question) => (question.answers = []));

    try {
      const response = await fetch("/api/create", {
        method: "POST",
        body: JSON.stringify(data),
      });
      await response.json();
      router.push("../surveys");
    } catch (error) {
      console.error(error);
    }
  }

  return (
    <>
      {saveModal && (
        <Modal
          text1={`${title}`}
          text2="Are you sure to overwrite this survey?"
          onYes={() => handleSubmit()}
          onNo={() => setSaveModal(false)}
        />
      )}
      <Container>
        <h2>Create your survey here:</h2>
        <p>{new Date(date).toLocaleString()}</p>
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            name="title"
            required
            aria-label="title"
            placeholder="your title"
            autoComplete="off"
            style={{ width: "100%" }}
            value={survey.title}
            onChange={handleChangeTitle}
            onKeyPress={(e) => {
              // this prevents a submit when hitting Enter!
              e.key === "Enter" && e.preventDefault();
            }}
          />
          <DescriptionInput
            type="text"
            rows="3"
            name="description"
            aria-label="description"
            placeholder="your description"
            autoComplete="off"
            style={{ width: "100%" }}
            value={survey.description}
            onChange={handleChangeDescription}
            onKeyPress={(e) => {}}
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
                aria-label="question"
                name={`question-${index}`}
                placeholder="your question"
                autoComplete="off"
                required
                value={question.title}
                onChange={(event) => handleChangeQuestion(index, event)}
              />
              <select
                name={`type-${index}`}
                required
                aria-label="type"
                value={question.type}
                onChange={(event) => handleChangeType(index, event)}
              >
                <option value="" disabled>
                  select
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

          <PrimaryButton
            type="button"
            onClick={handleAdd}
            aria-label="add Question"
          >
            <FiPlusCircle />
            New Question
          </PrimaryButton>
          <hr />
          <PrimaryButton
            type="button"
            onClick={editMode ? () => setSaveModal(true) : () => handleSubmit()}
          >
            <FiSave />
            Save
          </PrimaryButton>
          <PrimaryButton
            bg="myRed"
            color="white"
            type="button"
            aria-label="cancel"
            onClick={() => {
              router.push("/surveys");
            }}
          >
            <ImCancelCircle />
            Cancel
          </PrimaryButton>
          {editMode && (
            <PrimaryButton
              type="button"
              aria-label="save as new survey"
              onClick={() => {
                setTimeout(startLoader, 500);
                saveAsNew();
              }}
            >
              <FiSave />
              Save as new survey
            </PrimaryButton>
          )}
          <PulseLoader loading={loading} color="#9BD77C" />
        </form>
      </Container>
    </>
  );
}
const DescriptionInput = styled.textarea`
  margin-top: 0.3em;
`;
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
  & textarea,
  & select {
    font-family: "Source Sans Pro";
    border: 1px solid #ccc;
    padding: 0.7em;
    font-size: 1rem;
    border-radius: 0.5em;
    background-color: #fff;
    resize: none;
  }
`;
