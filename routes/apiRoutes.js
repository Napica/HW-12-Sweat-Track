const db = require("../models");

module.exports = function (app) {
  // test route for making sure server is connected
  app.get("/api/config", (req, res) => {
    res.json({
      success: true,
    });
  });

  app.get("/api/workouts", function (req, res) {
    // console.log(req.body)
    db.Workout.find({})
      .then((dbWorkout) => {
        res.json(dbWorkout);
      })
      .catch((err) => {
        res.json(err);
      });
  });

  app.post("/api/workouts", function (req, res) {
    console.log(req.body);
    db.Workout.create(req.body)
      .then((dbWorkout) => {
        res.json(dbWorkout);
      })
      .catch((err) => {
        res.json(err);
      });
  });


  // logs new input
  app.put("/api/workouts/:id", function (req, res) {
    console.log(req.params.id);
    db.Workout.findByIdAndUpdate(
      req.params.id,
      {
        $push: { exercises: req.body },
      },
      { new: true }
    )
      .then((dbExercise) => {
        // console.log(dbExercise);
        res.json(dbExercise)
      })
      .catch((err) => {
        res.json(err);
      });
  });

  // for testing
  // app.put("/api/workouts/:id", function (req, res) {
  //   console.log(req.params.id);
  //   db.Workout.findByIdAndUpdate(req.params.id, { exercises: req.body })
  //     .then((dbExercise) => {
  //       console.log(dbExercise);
  //     })
  //     .catch((err) => {
  //       res.json(err);
  //     });
  // });
};
