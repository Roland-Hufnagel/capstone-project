import styled from "styled-components";

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
          <p>Yes: {count("Yes")}</p>
          <p>No: {count("No")}</p>
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
  }
`;
