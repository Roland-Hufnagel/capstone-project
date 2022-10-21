import SurveyCard from "../../components/SurveyCard";
import { getAllSurveys } from "../../services/surveyService";
import styled from "styled-components";

export default function Surveys() {
  const surveys = getAllSurveys();
  return (
    <>
      <StyledSurveyList>
        {surveys.map((survey, index) => (
          <SurveyCard key={index} title={survey.title} date={survey.date} id={survey.id}/>
        ))}
      </StyledSurveyList>
    </>
  );
}

const StyledSurveyList = styled.ul`
  all: unset;
  max-width: 600px;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  gap: 10px;
`;
