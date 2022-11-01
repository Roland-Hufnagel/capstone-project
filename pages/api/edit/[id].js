import dbConnect from "../../../lib/dbConnect";
import SurveyModel from "../../../models/SurveyModel";

export default async function handler(request, response) {
  const { id } = request.query;
  await dbConnect();
  if (request.method === "DELETE") {
    const survey = await SurveyModel.findByIdAndDelete(id);
    return response
      .status(200)
      .json({ message: "Survey deleted", deletedId: id });
  } else if (request.method === "PATCH") {
    const postData = JSON.parse(request.body);
    const newSurvey = await SurveyModel.findByIdAndUpdate(id, {
      title: postData.title,
      questions: postData.questions,
    });
    return response
      .status(200)
      .json({ message: "Survey updated", updatedId: newSurvey.id });
  } else {
    return response.status(405).json({ message: "HTTP method not allowed" });
  }
}
