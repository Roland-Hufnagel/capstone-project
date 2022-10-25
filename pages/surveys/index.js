import SurveyCard from "../../components/SurveyCard";
import { getAllSurveys } from "../../services/surveyService";
import styled from "styled-components";
import { useState } from "react";

export default function Surveys() {
  const [surveys, setSurveys] = useState(getAllSurveys());

  function handleDelete(index) {
    console.log("handleDelete", index);
    const newObj = [...surveys];
    newObj.splice(index, 1);
    setSurveys(newObj);
  }
 
  return (
    <>
      <StyledSurveyList>
        {surveys.map((survey, index) => (
          <SurveyCard
            key={index}
            title={survey.title}
            url={survey.url}
            date={survey.date}
            id={survey.id}
            onDelete={() => handleDelete(index)}
          />
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
