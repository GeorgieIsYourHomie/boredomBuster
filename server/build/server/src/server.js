"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
// * - IMPORTING AND DECLARING -
// Express
const express_1 = __importDefault(require("express"));
// Body Parser
const body_parser_1 = __importDefault(require("body-parser"));
// Routes
const activities_router_1 = __importDefault(require("./routes/activities.router"));
// Path for constructing correct paths
// import path from "path";
// Declarations
const app = (0, express_1.default)();
const port = process.env.PORT || 5000;
// * - MIDDLEWARE -
app.use(body_parser_1.default.urlencoded({ extended: true }));
app.use(body_parser_1.default.json());
// ! Issue with connecting server to public folder to load DOM at localhost: 5000
// // Serve static files from the "build" directory
// const buildPath = path.join(__dirname, "../client/build"); // Use an absolute path
// app.use(express.static(buildPath));
// * - ROUTES -
// Bored API
app.use("/api/activity", activities_router_1.default);
// ! Issue with connecting server to public folder to load DOM at localhost: 5000
// // Serve the React app's index.html for all other routes
// app.get("/", (req, res) => {
//   const requestedUrl = req.url; // Get the requested URL
//   console.log("Requested URL:", requestedUrl); // Log the URL
//   res.sendFile(path.join(__dirname, "client", "build", "index.html"));
// });
// * - START SERVER -
app.listen(port, () => {
    console.log("Listening on port: ", port);
});
