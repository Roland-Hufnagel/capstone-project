import { useRouter } from "next/router";
import CreateSurveyForm from "../../components/CreateSurveyForm";
import { getSurveyById } from "../../services/surveyService";
import { authOptions } from "../api/auth/[...nextauth]";
import { unstable_getServerSession } from "next-auth";

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
  const { id } = context.params;
  const survey = await getSurveyById(id);
  return {
    props: {
      ...survey,
    },
  };
}

export default function Edit({ id, title, description, date, url, questions }) {
  const router = useRouter();
  async function handleSubmit(data) {
    try {
      const response = await fetch(`/api/edit/${id}`, {
        method: "PATCH",
        body: JSON.stringify(data),
      });
      await response.json();
      router.push("../surveys");
    } catch (error) {
      console.error(error);
    }
  }

  return (
    <CreateSurveyForm
      title={title}
      description={description}
      date={date}
      url={url}
      questions={questions}
      onSubmit={handleSubmit}
    />
  );
}
