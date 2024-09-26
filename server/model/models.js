const mongoose = require("mongoose");

const studentSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  rollno: {
    type: Number,
    required: true,
  },
  sub: {
    type: String,
    required: true,
  },
  dept: {
    type: String,
    required: true,
  },
  section: {
    type: String,
    required: true,
  }

});
module.exports = mongoose.model("Data", studentSchema);
