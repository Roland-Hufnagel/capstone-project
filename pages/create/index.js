import { useRouter } from "next/router";
import CreateSurveyForm from "../../components/CreateSurveyForm";
import { authOptions } from "../api/auth/[...nextauth]";
import { unstable_getServerSession } from "next-auth";
import { nanoid } from "nanoid";

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

  return { props: {} };
}

export default function Create() {
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
      url=""
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
