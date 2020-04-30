const router = require("express").Router();

// TODO: import required model/s
const db = require("../models")
// TODO: and add code to the routes so that the app functions correctly

// Creates a workout using data in the request body.
router.post("/api/workouts", (req, res) => {
  db.Workout.create(req.body)
    .then((data) => {
      console.log(data);
      res.json(data);
    })
    .catch((err) => {
      res.json(err);
    });
  
});

// Respond with workout for id url parameter. This should
// respond with the updated workout json
router.put("/api/workouts/:id", (req, res) => {
  // CODE HERE
});

// Respond with json for all the workouts in an array.
router.get("/api/workouts", (req, res) => {
  db.Workout.find({})
  .then((dbWorkouts) => {
    res.json(dbWorkouts)
  })
  .catch((err) => {
    res.json(err);
  });
});


// Respond with json array containing the last 7 workouts
router.get("/api/workouts/range", (req, res) => {
  // CODE HERE
});

// Delete workout with id matching id in the request body.
router.delete("/api/workouts", (req, res) => {
  // CODE HERE
});

module.exports = router;
