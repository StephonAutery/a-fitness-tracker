# a-fitness-tracker

[<img src="https://img.shields.io/badge/Stephon_Autery-let's_begin_here_...-goldenrod.svg" target="_blank">](http://stephonautery.com) [<img src="https://img.shields.io/badge/license-MIT-blue.svg">](https://opensource.org/licenses/MIT) [<img src="https://img.shields.io/badge/_ES_-_6_-green.svg">](http://www.ecma-international.org/ecma-262/6.0/) [<img src=https://img.shields.io/badge/_path_-_7.1.0_-green.svg>](https://www.npmjs.com/package/path) [<img src=https://img.shields.io/badge/_express_-_4.16.4-pink.svg>](https://www.npmjs.com/package/fs-extra) [<img src=https://img.shields.io/badge/_MongoDB_-4.2.6_-orange.svg>](https://www.mongodb.com/company) [<img src=https://img.shields.io/badge/_JSON-RFC_8259_-brown.svg>](https://www.npmjs.com/package/console.table)

The fitness tracker allows users to view create and track daily workouts. The user is able to log multiple exercises in a workout on a given day and to track the name, type, weight, sets, reps, and duration of exercise. If the exercise is a cardio exercise, the users is able to track distance traveled.


## Site Picture
![Site](/public/assets/fitness-tracker.PNG)


## code Snippet
MongoDB is a cross-platform document-oriented database program. Classified as a NoSQL database program, MongoDB uses JSON-like documents with schema. MongoDB is developed by MongoDB Inc. and licensed under the Server Side Public License.

This is a MongoDB aplication. Below is the database module

```javaScript

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

```
# dependencies
- express
- MogoDB


# use

# fitness tracker on GitHub
[fitness tracker on GitHub](https://github.com/StephonAutery/a-fitness-tracker)

# deployed app on Heroku
[fitness tracker on Heroku](https://glacial-mesa-85546.herokuapp.com/?id=5eb9e6621d66e80017aca5eb)

# contributors
- Stephon Autery


 ![StephonAutery](/public/assets/stephon-headshot-garden.jpg)