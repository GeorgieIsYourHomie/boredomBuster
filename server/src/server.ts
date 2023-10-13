// * - IMPORTING AND DECLARING -
// Express
import express from "express";
// Body Parser
import bodyParser from "body-parser";
// Routes
import activityRouter from "./routes/activities.router";
// Path for constructing correct paths
import path from "path";
// Declarations
const app = express();
const port = process.env.PORT || 5000;

// * - MIDDLEWARE -
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

// Serve static files from the "build" directory in client folder
// File path needed to be this as it wouldn't work otherwise
const buildPath = path.join(__dirname, "../../../../client/build");
app.use(express.static(buildPath));

// * - ROUTES -
// Bored API
app.use("/api/activity", activityRouter);

// * - START SERVER -
app.listen(port, (): void => {
  console.log("Listening on port: ", port);
});
