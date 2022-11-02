import dbConnect from "../../../lib/dbConnect";
import SurveyModel from "../../../models/SurveyModel";

export default async function handler(request, response) {
  if (request.method === "POST") {
    await dbConnect();
    const postData = JSON.parse(request.body);
    const newSurvey = await SurveyModel.create(postData);
    await SurveyModel.findByIdAndUpdate(newSurvey.id, {
      url: newSurvey.url + newSurvey.id,
    });
    return response
      .status(201)
      .json({ message: "Survey created", createdId: newSurvey.id });
  } else {
    return response.status(405).json({ message: "HTTP Method not allowed" });
  }
}
