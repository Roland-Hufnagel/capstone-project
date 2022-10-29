import dbConnect from "../../../lib/dbConnect";
import SurveyModel from "../../../models/SurveyModel";
import QuestionModel from "../../../models/QuestionModel";

export default async function handler(request, response) {
  if (request.method === "POST") {
    await dbConnect();
    const postData = JSON.parse(request.body);
    const surveyData = {
      date: postData.date,
      title: postData.title,
      description: "example description",
      url: "example url",
      author: "Roland",
      headerImage: "example Image",
    };
    const newSurvey = await SurveyModel.create(surveyData);

    const questionsData = postData.questions.map((question) => {
      return { ...question, survey_id: newSurvey.id };
    });
    await QuestionModel.create(questionsData);
    return response
      .status(201)
      .json({ message: "Product created", createdId: newSurvey.id });
  }
}
