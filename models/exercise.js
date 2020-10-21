const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const ExerciseSchema = new Schema({
    
  type: {
    type: String,
    trim: true,
    required: "Type of exercise is required",
  },

  name: {
    type: String,
    trim: true,
    required: "Name is required",
  },

  duration: {
    type: Number,
    required: true,
  },
  reps: {
    type: Number,
    required: true,
  },
  sets: {
    type: Number,
    required: true,
  },
});

const Exercise = mongoose.model("Exercise", ExerciseSchema);

module.exports = Exercise;