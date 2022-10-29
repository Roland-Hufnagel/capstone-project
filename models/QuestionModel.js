import mongoose from "mongoose";
import "./SurveyModel";
const { Schema } = mongoose;

const questionSchema = new Schema({
  survey_id: { type: Schema.Types.ObjectId, ref: "SurveyModel", required: true },
  title: { type: String, required: true },
  type: { type: String, required: true },
  results: { type: [] },
});

const QuestionModel =
  mongoose.models.QuestionModel ||
  mongoose.model("QuestionModel", questionSchema, "questions");

export default QuestionModel;
