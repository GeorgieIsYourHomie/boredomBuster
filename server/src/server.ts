// * - IMPORTING AND DECLARING -
// Express
import express from "express";
// Body Parser
import bodyParser from "body-parser";
// Routes
import activityRouter from "./routes/activities.router";
// Path for constructing correct paths
// import path from "path";
// Declarations
const app = express();
const port = process.env.PORT || 5000;

// * - MIDDLEWARE -
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
// ! Issue with connecting server to public folder to load DOM at localhost: 5000
// // Serve static files from the "build" directory
// const buildPath = path.join(__dirname, "../client/build"); // Use an absolute path
// app.use(express.static(buildPath));

// * - ROUTES -
app.use("/api/activity", activityRouter);
// ! Issue with connecting server to public folder to load DOM at localhost: 5000
// // Serve the React app's index.html for all other routes
// app.get("/", (req, res) => {
//   const requestedUrl = req.url; // Get the requested URL
//   console.log("Requested URL:", requestedUrl); // Log the URL
//   res.sendFile(path.join(__dirname, "client", "build", "index.html"));
// });

// * - START SERVER -
app.listen(port, (): void => {
  console.log("Listening on port: ", port);
});
