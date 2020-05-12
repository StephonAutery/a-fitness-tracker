const mongoose = require("mongoose")
const schema = mongoose.Schema;
const opts = { toJSON: { virtuals: true } };
var workoutSchema = new schema({
    day: {
        type: Date,
        default: Date.now()
    },
    exercises: [
        {
            type: {
                type: String,
            },
            name: {
                type: String
            },
            duration: {
                type: Number
            },
            distance: {
                type: Number
            },
            weight: {
                type: Number
            },
            sets: {
                type: Number
            },
            reps: {
                type: Number
            }
        }
    ]
}, opts
);
workoutSchema.virtual("totalDuration").get(function () {
    // the reduce method is applied to the exercises
    return this.exercises.reduce((total, exercise) => {
        return total + exercise.duration;
    }, 0)
})
var Workout = mongoose.model("Workout", workoutSchema)
module.exports = Workout;