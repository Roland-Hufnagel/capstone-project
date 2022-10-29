import CreateSurveyForm from "../../components/CreateSurveyForm";
import dbConnect from "../../lib/dbConnect";
import QuestionModel from "../../models/QuestionModel";
import SurveyModel from "../../models/SurveyModel";

export async function getServerSideProps(context) {
  const { id } = context.params;
  await dbConnect();
  const survey = await SurveyModel.findById(id);
  const title = survey.title;
  const questions = await QuestionModel.find({ survey_id: id });
  const sanitizedQuestions = questions.map((question) => ({
    id: question.id,
    title: question.title,
    type: question.type,
  }));
  return { props: { title: title, questions: [...sanitizedQuestions] } };
}

export default function Edit({ title, questions }) {
  return <CreateSurveyForm title={title} questions={questions} />;
}
