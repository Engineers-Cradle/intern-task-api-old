const mongoose = require("mongoose");
const { Schema } = mongoose;

//build a schema
const contactFormSchema = new Schema(
  {
    Name: {
      type: String,
      required: true,
    },
    Address: {
      type: String,
      required: true,
    },
    Email: {
      type: String,
      match: /.+\@.+\..+/,
      required: true,
    },
    JobStatus: {
      type: String,
      required: true,
      enum: ["Unemployed", "Working", "Student", "Retired"],
    },
    DoLiketoCode: {
      type: Boolean,
      required: true,
    },
    Secret: {
      type: String,
      required: true,
    },
  },
  { timestamp: true }
);
//make a model using this schema and export it
module.exports = mongoose.model("ContactForm", contactFormSchema);
