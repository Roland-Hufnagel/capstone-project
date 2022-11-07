import SurveyCard from "../../components/SurveyCard";
import styled from "styled-components";
import { useRouter } from "next/router";
import { getAllSurveysByOwner } from "../../services/surveyService";
import AddButton from "../../components/Buttons/AddButton";
import { authOptions } from "../api/auth/[...nextauth]";
import { unstable_getServerSession } from "next-auth";
import { PrimaryButton } from "../../components/Buttons/PrimaryButton";
import { TbPlus } from "react-icons/tb";
export async function getServerSideProps(context) {
  const session = await unstable_getServerSession(
    context.req,
    context.res,
    authOptions
  );
  if (!session) {
    return {
      redirect: {
        destination: "/",
        permanent: false,
      },
    };
  }

  const surveys = await getAllSurveysByOwner(session.user.email);

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
          <h2>My Surveys:</h2>
          
          <PrimaryButton bg="#9BD77C" color="101828" onClick={() => {
              router.push("/create");
            }}>
            <TbPlus />
            New
          </PrimaryButton>
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
  justify-content: space-between;
  align-items: center;
`;
const StyledSurveyList = styled.ul`
  all: unset;
  max-width: 600px;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  gap: 10px;
`;
