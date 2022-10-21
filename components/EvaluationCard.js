import styled from "styled-components";

export default function EvaluationCard({ question, yes, no, na }) {
    const total = yes + no + na;
  return (
    <StyledEvaluationCard>
      <h2>{question}</h2>
      <p>Yes: {yes} / {total}</p>
      <p>No: {no} / {total}</p>
      <p>n/a: {na} / {total}</p>
    </StyledEvaluationCard>
  );
}
const StyledEvaluationCard = styled.li`
  all: unset;
  border: 1px solid black;
  border-radius: 0.4em;
  padding: 0.5em;
  & h2{
    text-align: center;
  }
`;
