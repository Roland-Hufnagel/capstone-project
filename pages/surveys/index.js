import SurveyCard from "../../components/SurveyCard";
import { getAllSurveys, getSurveyById } from "../../services/surveyService";
import styled from "styled-components";
import { useState } from "react";
//import dbConnect from "../../lib/dbConnect";

// export async function getServerSideProps(context) {
//   const { id } = context.params;
//   // const result = {
//   //   props: {
//   //     title: "",
//   //     questions: [{ title: "", type: "" }],
//   //   },
//   // };
//   // if (id !== "new") {
//   //   await dbConnect();
//   //   const survey = getSurveyById(id);
//   //   result.props = { ...survey };
//   // }
//   // return result;
//   await dbConnect();
//   const survey = await getSurveyById(id);
//   return { props: {...survey} };
// }
export async function getServerSideProps(context) {
  const surveys = getAllSurveys();
  return {
    props: {
      mysurveys: [...surveys],
    },
  };
}
export default function Surveys({ mysurveys }) {
  console.log(mysurveys);
  const [surveys, setSurveys] = useState([...mysurveys]);

  function handleDelete(index) {
    console.log("handleDelete", index);
    const newObj = [...surveys];
    newObj.splice(index, 1);
    setSurveys(newObj);
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
