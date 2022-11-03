import dbConnect from "../../../lib/dbConnect";
import SurveyModel from "../../../models/SurveyModel";
import { unstable_getServerSession } from "next-auth/next";
import { authOptions } from "../auth/[...nextauth]";

export default async function handler(req, res) {
  const session = await unstable_getServerSession(req, res, authOptions);
  if (session) {
    const { id } = req.query;
    await dbConnect();
    if (req.method === "DELETE") {
      const survey = await SurveyModel.findByIdAndDelete(id);
      return res.status(200).json({ message: "Survey deleted", deletedId: id });
    } else if (req.method === "PATCH") {
      const postData = JSON.parse(request.body);
      const newSurvey = await SurveyModel.findByIdAndUpdate(id, postData);
      return res
        .status(200)
        .json({ message: "Survey updated", updatedId: newSurvey.id });
    } else {
      return res.status(405).json({ message: "HTTP method not allowed" });
    }
  } else {
    res.send({ errror: "You must be signed in!" });
  }
}
