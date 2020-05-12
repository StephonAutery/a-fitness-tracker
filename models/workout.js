
const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const workoutSchema = new Schema({
    day: {
      type: Date,
      // required: "please enter workout date",
      default: Date.now
    },
    exercises: [
      {
        type: {
          type: String,
          required: "please enter workout type"
        },
        name: {
          type: String,
          required: "please enter workout name"
        },
        duration: Number,
        weight: Number,
        reps: Number,
        sets: Number,
        distance: Number
      }
    ]
  });
  
  const Workout = mongoose.model("Workout", workoutSchema);
  
  module.exports = Workout;