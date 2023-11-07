// * - IMPORTING AND DECLARING -
// Express
import express from "express";
// Body Parser
import bodyParser from "body-parser";
// Routers
import randomActivityRouter from "./routes/activityRoutes/randomActivityRouter";
import recreationalActivityRouter from "./routes/activityRoutes/recreationalActivityRouter";
import socialActivityRouter from "./routes/activityRoutes/socialActivityRouter";
import educationalActivityRouter from "./routes/activityRoutes/educationalRouter";
import DIYActivityRouter from "./routes/activityRoutes/DIYActivityRouter";
import cookingActivityRouter from "./routes/activityRoutes/cookingActivityRouter";
import charityActivityRouter from "./routes/activityRoutes/charityActivityRouter";
import relaxationActivityRouter from "./routes/activityRoutes/relaxationActivityRouter";
import busyworkActivityRouter from "./routes/activityRoutes/busyworkActivityRouter";
import musicActivityRouter from "./routes/activityRoutes/musicActivityRouter";
// Path for constructing correct url paths
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
// Bored API All Activity Categories
app.use("/bored/activity/random", randomActivityRouter); // random activity
app.use("/bored/activity/recreation", recreationalActivityRouter); // recreational activity
app.use("/bored/activity/social", socialActivityRouter); // social activity
app.use("/bored/activity/education", educationalActivityRouter); // educational activity
app.use("/bored/activity/DIY", DIYActivityRouter); // DIY activity
app.use("/bored/activity/cooking", cookingActivityRouter); // cooking activity
app.use("/bored/activity/charity", charityActivityRouter); // charity activity
app.use("/bored/activity/relaxation", relaxationActivityRouter); // relaxation activity
app.use("/bored/activity/busywork", busyworkActivityRouter); // busywork activity
app.use("/bored/activity/music", musicActivityRouter); // music activity

// * - START SERVER -
app.listen(port, (): void => {
  console.log("Listening on port: ", port);
});
