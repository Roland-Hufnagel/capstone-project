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
      date: survey.date,
      url: survey.url,
      questions: survey.questions,
    };
    return JSON.parse(JSON.stringify(sanitizedSurvey));
  } catch (error) {
    console.error(error);
  }
}

export async function getAllSurveysByOwner(owner) {
  await dbConnect();
  try {
    const surveys = await SurveyModel.find({ owner: owner }).sort({ date: -1 });
    const sanitizedSurveys = surveys.map((survey) => ({
      id: survey.id,
      title: survey.title,
      description: survey.description,
      date: survey.date,
      url: survey.url,
      questions: survey.questions,
    }));
    return JSON.parse(JSON.stringify(sanitizedSurveys));
  } catch (error) {
    console.error(error);
  }
}
