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
    // console.log(req.body)
    db.Workout.create(req.body)
      .then((dbWorkout) => {
        res.json(dbWorkout);
      })
      .catch((err) => {
        res.json(err);
      });
  });
};
