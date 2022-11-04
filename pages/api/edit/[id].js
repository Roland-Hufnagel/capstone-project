import dbConnect from "../../../lib/dbConnect";
import SurveyModel from "../../../models/SurveyModel";
import { unstable_getServerSession } from "next-auth/next";
import { authOptions } from "../auth/[...nextauth]";

export default async function handler(req, res) {
  const session = await unstable_getServerSession(req, res, authOptions);
  if (!session) {
    res.send({ errror: "You must be signed in!" });
    return;
  }

  const { id } = req.query;
  await dbConnect();
  if (req.method === "DELETE") {
    const survey = await SurveyModel.findByIdAndDelete(id);
    res.status(200).json({ message: "Survey deleted", deletedId: survey.id });
    return;
  } else if (req.method === "PATCH") {
    const postData = JSON.parse(request.body);
    const newSurvey = await SurveyModel.findByIdAndUpdate(id, postData);
    res
      .status(200)
      .json({ message: "Survey updated", updatedId: newSurvey.id });
    return;
  } else {
    res.status(405).json({ message: "HTTP method not allowed" });
    return;
  }
}
