import styled from "styled-components";

export default function SurveyCard({ title, date, id }) {
  function handleOnClick(id) {
    console.log("Hallo", id);
  }

  return (
    <StyledSurveyCard>
      <p>{title}</p>
      <p>{date}</p>
      <p>{id}</p>
      <button onClick={() => handleOnClick(id)}>Evaluation</button>
    </StyledSurveyCard>
  );
}

const StyledSurveyCard = styled.li`
  all: unset;
  border: 1px solid black;
  border-radius: 0.4em;
  padding: 0.5em;
`;
