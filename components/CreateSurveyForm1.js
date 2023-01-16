import { useState, useReducer, useEffect } from "react";
import { useRouter } from "next/router";
import styled from "styled-components";
import DeleteButton from "./Buttons/DeleteButton";
import Preview from "./Preview";
import { FiSave, FiPlusCircle } from "react-icons/fi";
import { ImCancelCircle } from "react-icons/im";
import { PrimaryButton } from "./Buttons/PrimaryButton";
import PulseLoader from "react-spinners/PulseLoader";
import Modal from "./Modal";
import { formReducer } from "../lib/formReducer";

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

  const INITIAL_STATE = {
    title: title,
    description: description,
    date: date,
    url: url,
    questions: questions,
  };
  const [state, dispatch] = useReducer(formReducer, INITIAL_STATE);
  // WIR HABEN JETZT EINEN 'state' !
  // WIR HABEN JETZT AUCH EINE FUNKTION 'dispatch', DIE WIR BENUTZEN KÖNNEN !
  const [saveModal, setSaveModal] = useState(false);
  const [loading, setLoading] = useState(false);

  function startLoader() {
    setLoading(!loading);
  }
  useEffect(() => {
    console.log("Loading:", loading);
  });
  function validateString(string) {
    if (string.startsWith(" ")) {
      string = string.replace(" ", "");
    }
    if (string.includes("  ")) {
      string = string.replace("  ", " ");
    }
    return string;
  }

  function handleSubmit(event) {
    onSubmit(state);
  }
  async function saveAsNew() {
    const data = { ...state };
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

  const handleChange = (e) => {
    const string = validateString(e.target.value);
    dispatch({
      type: "CHANGE_INPUT",
      payload: { name: e.target.name, value: string },
    });
  };
 
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
            value={state.title}
            onChange={handleChange}
            onKeyPress={(e) => {
              // this prevents a submit when hitting Enter!
              e.key === "Enter" && e.preventDefault();
            }}
          />
          <DescriptionInput
            type="text"
            rows="3"
            required
            name="description"
            aria-label="description"
            placeholder="your description"
            autoComplete="off"
            style={{ width: "100%" }}
            value={state.description}
            onChange={handleChange}
            onKeyPress={(e) => {}}
          />
          <hr />

          {state.questions.map((question, index) => (
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
                onChange={(e) => {
                  dispatch({
                    type: "CHANGE_QUESTION_INPUT",
                    payload: { value: e.target.value, index: index },
                  });
                }}
              />
              <select
                name={`type-${index}`}
                required
                aria-label="type"
                value={question.type}
                onChange={(e) => {
                  dispatch({
                    type: "CHANGE_SELECT",
                    payload: { value: e.target.value, index: index },
                  });
                }}
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
                  dispatch({
                    type: "DELETE_QUESTION",
                    payload: { index: index },
                  });
                }}
              />
              <Preview title={question.title} type={question.type} />
            </QuestionWrapper>
          ))}

          <PrimaryButton
            type="button"
            onClick={() => {
              dispatch({ type: "ADD_QUESTION" });
            }}
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
