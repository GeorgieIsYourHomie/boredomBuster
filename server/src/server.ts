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
// Serve static files from the "public" directory (which should contain your React app build files)
app.use(express.static(path.join(__dirname, "client", "public/index.html")));

// * - ROUTES -
// Bored API
app.use("/api/activity", activityRouter);

// * - START SERVER -
app.listen(port, (): void => {
  console.log("Listening on port: ", port);
});
