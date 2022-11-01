import { useRouter } from "next/router";
import CreateSurveyForm from "../../components/CreateSurveyForm";
import { getSurveyById } from "../../services/surveyService";

export async function getServerSideProps(context) {
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
      const result = await response.json();
      console.log(result);
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
