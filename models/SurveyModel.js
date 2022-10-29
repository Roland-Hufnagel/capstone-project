import mongoose from "mongoose";

const { Schema } = mongoose;

const surveySchema = new Schema({
  //_id: {type: Schema.Types.ObjectId},
  date: { type: Date, default: Date.now },
  title: { type: String, required: true },
  description: { type: String },
  url: { type: String },
  author: { type: String },
  headerImage: { type: String },
});
const SurveyModel =
  mongoose.models.SurveyModel ||
  mongoose.model("SurveyModel", surveySchema, "surveys");

export default SurveyModel;
