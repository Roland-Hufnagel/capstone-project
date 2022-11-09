import styled from "styled-components";
import MyBarChart from "./MyBarChart";
import MyPieChart from "./MyPieChart";

export default function EvaluationCard({ question, type, answers }) {
  function countAnswers(param) {
    return answers.filter((answer) => answer === param).length;
  }
  
  return (
    <StyledEvaluationCard>
      <h2>{question}</h2>
      {type === "yes/no" && answers.length > 0 && (
        <MyPieChart
          data={[
            { name: "Yes", value: countAnswers("Yes") },
            { name: "No", value: countAnswers("No") },
          ]}
        />
      )}
      {type === "text" && answers.length > 0 && (
        <>
          {answers.map((answer, index) => (
            <p key={index}>{answer}</p>
          ))}
        </>
      )}
      {type === "choice" && answers.length > 0 && (
        <MyBarChart
          data={[
            { name: "1", value: countAnswers("1") },
            { name: "2", value: countAnswers("2") },
            { name: "3", value: countAnswers("3") },
            { name: "4", value: countAnswers("4") },
            { name: "5", value: countAnswers("5") },
          ]}
        />
      )}
      {answers.length === 0 && <NoVotes>No Votes yet.</NoVotes>}
    </StyledEvaluationCard>
  );
}
const NoVotes = styled.section`
  font-size: 2em;
  text-align: center;
`;
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
