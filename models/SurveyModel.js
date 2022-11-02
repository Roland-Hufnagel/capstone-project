import mongoose from "mongoose";

const { Schema } = mongoose;

const surveySchema = new Schema({
  title: { type: String, required: true },
  description: { type: String },
  date: { type: Date },
  url: { type: String },
  questions: [
    {
      id: { type: String },
      title: { type: String },
      type: { type: String },
      answers: [String],
    },
  ],
});
const SurveyModel =
  mongoose.models.SurveyModel ||
  mongoose.model("SurveyModel", surveySchema, "surveys");

export default SurveyModel;
