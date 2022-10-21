import { useState } from "react";
import { useRouter } from "next/router";
import styled from "styled-components";
import AddButton from "../../components/Buttons/AddButton";
import DeleteButton from "../../components/Buttons/DeleteButton";

export default function CreateSurvey() {
  const router = useRouter();
  const [inputFields, setInputFields] = useState([
    {
      question: "",
    },
  ]);

  const handleChangeInput = (index, event) => {
    const values = [...inputFields];
    values[index].question = event.target.value;
    setInputFields(values);
  };

  function handleSubmit(event) {
    event.preventDefault();
    console.log("in handleSubmit");
    router.push("../surveys/");
  }

  function handleDelete(index) {
    const values = [...inputFields];
    values.splice(index, 1);
    setInputFields(values);
  }
  function handleAdd() {
    setInputFields((pre) => [...pre, { question: "" }]);
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
        />
        <hr />
        <AddButton onClick={handleAdd} />
        {inputFields.map((inputField, index) => (
          <MyWrapper key={index}>
            <input
              onKeyPress={(e) => {
                e.key === "Enter" && e.preventDefault();
              }}
              maxLength="200"
              type="text"
              name="question"
              placeholder="your question"
              value={inputField.question}
              onChange={(event) => handleChangeInput(index, event)}
            />

            <DeleteButton
              onClick={() => {
                handleDelete(index);
              }}
            />

            <MyBox>
              <legend>Preview:</legend>
              <p>{inputField.question}</p>
              <input type="radio" disabled />
              Yes
              <input type="radio" disabled />
              No
            </MyBox>
          </MyWrapper>
        ))}
        <hr />
        <SubmitButton type="submit" >Save</SubmitButton>
      </form>
    </Container>
  );
}

const MyWrapper = styled.section`
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
const MyBox = styled.fieldset`
  grid-column-start: 1;
  grid-column-end: 3;
  background-color: #ddd;
  color: #666;
  border-radius: 5px;
  border: 1px solid #aaa;
  margin-bottom: 30px;
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
