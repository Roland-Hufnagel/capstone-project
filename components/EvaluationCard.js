import styled from "styled-components";
import Chart from "./Chart";

export default function EvaluationCard({ question, type, answers }) {
  function count(param) {
    if (param === "Yes") {
      return answers.filter((answer) => answer === "Yes").length;
    } else if (param === "No") {
      return answers.filter((answer) => answer === "No").length;
    }
  }

  return (
    <StyledEvaluationCard>
      <h2>{question}</h2>
      {type === "yes/no" && (
        <>
          <Chart
            data={[
              { name: "Yes", value: count("Yes") },
              { name: "No", value: count("No") },
            ]}
          />
        </>
      )}
      {type === "text" && (
        <>
          {answers.map((answer, index) => (
            <p key={index}>{answer}</p>
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
