const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const WorkoutSchema = new Schema({
     totalDuration :{
        type: Number,
        default:0
     },
  day: {
        type: Date,
        default: Date.now,
        
      },
       exercises: [{}],
});

var Workout = mongoose.model("Workout", WorkoutSchema);

module.exports = Workout;
