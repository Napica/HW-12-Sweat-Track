const db = require("../models");

module.exports = function (app) {
  // test route for making sure server is connected
  app.get("/api/config", (req, res) => {
    res.json({
      success: true,
    });
  });
  // displays current workout
  app.get("/api/workouts", (req, res) => {
    db.Workout.find({})
      .then((dbWorkout) => {
        res.json(dbWorkout);
      })
      .catch((err) => {
        res.json(err);
      });
  });

  // creates now workout
  app.post("/api/workouts", (req, res) => {
    db.Workout.create(req.body)
      .then((dbWorkout) => {
        res.json(dbWorkout);
      })
      .catch((err) => {
        res.json(err);
      });
  });

  // logs new input
  app.put("/api/workouts/:id", (req, res) => {
    db.Workout.findByIdAndUpdate(
      req.params.id,
      {
        $push: { exercises: req.body },
      },
      { new: true }
    )
      .then((dbExercise) => {
        res.json(dbExercise);
      })
      .catch((err) => {
        res.json(err);
      });
  });

  // get route for dashboard for all workouts
  app.get("/api/workouts/range", (req, res) => {
    db.Workout.find({})
      .then((rangeWorkout) => {
        res.json(rangeWorkout);
      })
      .catch((err) => {
        res.json(err);
      });
  });
};
