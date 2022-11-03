import dbConnect from "../../../lib/dbConnect";
import SurveyModel from "../../../models/SurveyModel";
import { unstable_getServerSession } from "next-auth/next";
import { authOptions } from "../auth/[...nextauth]";

export default async function handler(req, res) {
  const session = await unstable_getServerSession(req, res, authOptions);
  if (session) {
    if (req.method === "POST") {
      await dbConnect();
      const postData = JSON.parse(req.body);
      postData.owner = session.user.email;
      const newSurvey = await SurveyModel.create(postData);
      await SurveyModel.findByIdAndUpdate(newSurvey.id, {
        url: newSurvey.url + newSurvey.id,
      });
      return res
        .status(201)
        .json({ message: "Survey created", createdId: newSurvey.id });
    } else {
      return res.status(405).json({ message: "HTTP Method not allowed" });
    }
  } else {
    res.send({ errror: "You must be signed in!" });
  }
}
