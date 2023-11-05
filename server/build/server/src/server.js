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
// Routers
const randomActivityRouter_1 = __importDefault(require("./routes/activityRoutes/randomActivityRouter"));
const recreationalActivityRouter_1 = __importDefault(require("./routes/activityRoutes/recreationalActivityRouter"));
const socialActivityRouter_1 = __importDefault(require("./routes/activityRoutes/socialActivityRouter"));
const educationalRouter_1 = __importDefault(require("./routes/activityRoutes/educationalRouter"));
const DIYActivityRouter_1 = __importDefault(require("./routes/activityRoutes/DIYActivityRouter"));
const cookingActivityRouter_1 = __importDefault(require("./routes/activityRoutes/cookingActivityRouter"));
const charityActivityRouter_1 = __importDefault(require("./routes/activityRoutes/charityActivityRouter"));
const relaxationActivityRouter_1 = __importDefault(require("./routes/activityRoutes/relaxationActivityRouter"));
const busyworkActivityRouter_1 = __importDefault(require("./routes/activityRoutes/busyworkActivityRouter"));
const musicActivityRouter_1 = __importDefault(require("./routes/activityRoutes/musicActivityRouter"));
// Path for constructing correct url paths
const path_1 = __importDefault(require("path"));
// Declarations
const app = (0, express_1.default)();
const port = process.env.PORT || 5000;
// * - MIDDLEWARE -
app.use(body_parser_1.default.urlencoded({ extended: true }));
app.use(body_parser_1.default.json());
// Serve static files from the "build" directory in client folder
// File path needed to be this as it wouldn't work otherwise
const buildPath = path_1.default.join(__dirname, "../../../../client/build");
app.use(express_1.default.static(buildPath));
// * - ROUTES -
// Bored API All Activity Categories
app.use("/bored/activity/random", randomActivityRouter_1.default); // random activity
app.use("/bored/activity/recreation", recreationalActivityRouter_1.default); // recreational activity
app.use("/bored/activity/social", socialActivityRouter_1.default); // social activity
app.use("/bored/activity/education", educationalRouter_1.default); // educational activity
app.use("/bored/activity/DIY", DIYActivityRouter_1.default); // DIY activity
app.use("/bored/activity/cooking", cookingActivityRouter_1.default); // cooking activity
app.use("/bored/activity/charity", charityActivityRouter_1.default); // charity activity
app.use("/bored/activity/relaxation", relaxationActivityRouter_1.default); // relaxation activity
app.use("/bored/activity/busywork", busyworkActivityRouter_1.default); // busywork activity
app.use("/bored/activity/music", musicActivityRouter_1.default); // music activity
// * - START SERVER -
app.listen(port, () => {
    console.log("Listening on port: ", port);
});
