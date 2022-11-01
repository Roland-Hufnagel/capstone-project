import dbConnect from "../../../lib/dbConnect";
import SurveyModel from "../../../models/SurveyModel";

export default async function handler(request, response) {
  const { id } = request.query;
  await dbConnect();
  if (request.method === "PUT") {
    const postData = JSON.parse(request.body);
    await SurveyModel.findByIdAndUpdate(id, {
      questions: postData,
    });
    return response
      .status(200)
      .json({ message: "Survey updated", updatedId: id });
  } else {
    return response.status(405).json({ message: "HTTP method not allowed" });
  }
}
