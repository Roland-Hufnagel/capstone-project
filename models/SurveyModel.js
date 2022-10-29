import mongoose from "mongoose";

const { Schema } = mongoose;

const surveySchema = new Schema({
  //_id: {type: Schema.Types.ObjectId},
  date: { type: String, required: true },
  title: { type: String, required: true },
  description: { type: String },
  url: { type: String, required: true },
  author: { type: String },
  headerImage: { type: String },
});
const SurveyModel =
  mongoose.models.SurveyModel ||
  mongoose.model("SurveyModel", surveySchema, "surveys");

export default SurveyModel;
