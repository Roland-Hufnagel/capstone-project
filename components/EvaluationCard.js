import styled from "styled-components";
import Chart from "./Chart";
import { nanoid } from "nanoid";
export default function EvaluationCard({ question, type, answers }) {
  
  function countAnswers(param) {
    return answers.filter((answer) => answer === param).length;
  }

  return (
    <StyledEvaluationCard>
      <h2>{question}</h2>
      {type === "yes/no" && (
        <>
          <Chart
            data={[
              { id: nanoid(), name: "Yes", value: countAnswers("Yes") },
              { id: nanoid(), name: "No", value: countAnswers("No") },
            ]}
          />
        </>
      )}
      {type === "text" && (
        <>
          {answers.map((answer) => (
            <p key={answer.id}>{answer}</p>
          ))}
        </>
      )}
    </StyledEvaluationCard>
  );
}
const StyledEvaluationCard = styled.li`
  all: unset;
  border: 1px solid black;
  border-radius: 0.4em;
  padding: 0.5em;
  & h2 {
    text-align: center;
    word-break: break-word;
  }
  & p {
    word-break: break-word;
  }
`;
