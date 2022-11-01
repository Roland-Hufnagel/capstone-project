import SurveyCard from "../../components/SurveyCard";
import styled from "styled-components";
import { useRouter } from "next/router";
import { getAllSurveys } from "../../services/surveyService";
import AddButton from "../../components/Buttons/AddButton";

export async function getServerSideProps(context) {
  const surveys = await getAllSurveys();

  return {
    props: {
      surveys: JSON.stringify(surveys),
    },
  };
}
export default function Surveys({ surveys }) {
  const router = useRouter();

  async function handleDelete(surveyId) {
    try {
      await fetch(`/api/edit/${surveyId}`, {
        method: "DELETE",
        body: JSON.stringify(surveyId),
      });
      router.reload();
    } catch (error) {
      console.error(error);
    }
  }

  return (
    <>
      <StyledSurveyList>
        <StyledContainer>
          <AddButton
            onClick={() => {
              router.push("/create");
            }}
          />
          <h2>My Surveys:</h2>
        </StyledContainer>
        {JSON.parse(surveys).map((survey, index) => (
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
const StyledContainer = styled.section`
  display: flex;
  gap: 30px;
  justify-content: center;
`;
const StyledSurveyList = styled.ul`
  all: unset;
  max-width: 600px;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  gap: 10px;
`;
