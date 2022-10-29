import styled from "styled-components";

export default function EvaluationCard({ question, type, results }) {
  return (
    <StyledEvaluationCard>
      <h2>{question}</h2>
      {type === "yes/no" && (
        <>
          <p>Yes: {results[0]}</p>
          <p>No: {results[1]}</p>
          <p>n/a: {results[2]}</p>
        </>
      )}
      {type === "text" && (
        <>
          {results.map((result, index) => (
            <p key={index}>{result}</p>
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
