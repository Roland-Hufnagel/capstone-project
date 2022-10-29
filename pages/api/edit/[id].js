import dbConnect from "../../../lib/dbConnect";
import SurveyModel from "../../../models/SurveyModel";
import QuestionModel from "../../../models/QuestionModel";

export default async function handler(request, response) {
  const { id } = request.query;
  await dbConnect();
  if (request.method === "DELETE") {
    const survey = await SurveyModel.findByIdAndDelete(id);
    const questions = await QuestionModel.deleteMany({ survey_id: id });
    return response
      .status(200)
      .json({ message: "Survey deleted", deletedId: id });
  }
}
