import { useRouter } from "next/router";
import CreateSurveyForm from "../../components/CreateSurveyForm";

export default function Create() {
  const router = useRouter();

  async function handleSubmit(data) {
    console.log(data);
    try {
      const response = await fetch("/api/create", {
        method: "POST",
        body: JSON.stringify(data),
      });
      const result = await response.json();
      router.push("../surveys");
    } catch (error) {
      console.error(error);
    }
  }

  return (
    <CreateSurveyForm
      title=""
      date={Date.now()}
      questions={[{ title: "", type: "" }]}
      onSubmit={handleSubmit}
    />
  );
}
