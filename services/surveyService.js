import dbConnect from "../lib/dbConnect";
import SurveyModel from "../models/SurveyModel";

export async function getSurveyById(id) {
  await dbConnect();
  try {
    const survey = await SurveyModel.findById(id);
    const sanitizedSurvey = {
      id: survey.id,
      title: survey.title,
      description: survey.description,
      date: survey.date.toDateString(),
      url: survey.url,
      questions: JSON.parse(JSON.stringify(survey.questions)),
    };
    return sanitizedSurvey;
  } catch (error) {
    console.error(error);
  }
}

export async function getAllSurveys() {
  await dbConnect();
  try {
    const surveys = await SurveyModel.find().sort({ date: -1 });
    const sanitizedSurveys = surveys.map((survey) => ({
      id: survey.id,
      title: survey.title,
      description: survey.description,
      date: survey.date.toDateString(),
      url: survey.url,
      questions: JSON.parse(JSON.stringify(survey.questions)),
    }));
    return sanitizedSurveys;
  } catch (error) {
    console.error(error);
  }
}
