import styled from "styled-components";

export default function SurveyCard({title, date}) {
  
  
  
  
    return (
        <StyledSurveyCard>
            <p>{title}</p>
            <p>{date}</p>
        </StyledSurveyCard>
    );
}

const StyledSurveyCard = styled.li`
all: unset;
border: 1px solid black;
border-radius: 0.4em;
padding: 0.5em;

`;