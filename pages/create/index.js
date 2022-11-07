import { useRouter } from "next/router";
import CreateSurveyForm from "../../components/CreateSurveyForm";
import { nanoid } from "nanoid";
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
  const { req } = context;
  const host = req.headers.host;
  return { props: { host: host } };
}

export default function Create({ host }) {
  const router = useRouter();

  async function handleSubmit(data) {
    try {
      const response = await fetch("/api/create", {
        method: "POST",
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
      title=""
      description=""
      date={new Date()}
      url={`${host}/survey/`}
      questions={[
        {
          id: nanoid(),
          title: "",
          type: "",
          answers: [],
        },
      ]}
      onSubmit={handleSubmit}
    />
  );
}
