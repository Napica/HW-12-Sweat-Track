const express = require("express");
const mongoose = require("mongoose");

const app = express();

const PORT = process.env.PORT || 3000;

// Express Middleware
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.static("public"));

mongoose.connect(
  process.emitWarning.MONGODB_URI || "mongodb://localhost/fitness",
  {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true,
    useFindAndModify: false,
  }
);

const connection = mongoose.connection;


// Connection tests for mongoose
connection.on("connected", () => {
  console.log("Mongoose successfully connected.");
});

connection.on("error", (err) => {
  console.log("Mongoose connection error: ", err);
});

// test route for making sure server is connected
app.get("/api/config", (req, res) => {
  res.json({
    success: true,
  });
});


// routes for HTML paths and API paths
require("./routes/apiRoutes")(app)
require("./routes/htmlRoutes")(app)

app.listen(PORT, () => {
  console.log(`App is listening on http://localhost:${PORT}`);
});
