import SurveyCard from "../../components/SurveyCard";
import styled from "styled-components";
import { useState } from "react";
import dbConnect from "../../lib/dbConnect";
import SurveyModel from "../../models/SurveyModel";
import { useRouter } from "next/router";

export async function getServerSideProps(context) {
  await dbConnect();
  const surveys = await SurveyModel.find().sort({ date: -1 });
  const sanitizedSurveys = surveys.map((survey) => ({
    id: survey.id,
    date: survey.date,
    title: survey.title,
    description: survey.description,
    url: survey.url,
    author: survey.author,
    headerImage: survey.headerImage,
  }));

  return {
    props: {
      mysurveys: [...sanitizedSurveys],
    },
  };
}
export default function Surveys({ mysurveys }) {
  const router = useRouter();
  const [surveys, setSurveys] = useState([...mysurveys]);

  async function handleDelete(surveyId) {
    try {
      const response = await fetch(`/api/edit/${surveyId}`, {
        method: "DELETE",
        body: JSON.stringify(surveyId),
      });
      const result = await response.json();
      router.reload("/");
    } catch (error) {
      console.error(error);
    }
    // const newObj = [...surveys];
    // newObj.splice(index, 1);
    // setSurveys(newObj);
  }

  return (
    <>
      <StyledSurveyList>
        <h2>My Surveys:</h2>
        {surveys.map((survey, index) => (
          <SurveyCard
            key={index}
            title={survey.title}
            url={survey.url}
            date={survey.date}
            id={survey.id}
            onDelete={() => handleDelete(survey.id)}
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
