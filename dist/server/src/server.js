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
const path_1 = __importDefault(require("path"));
// Declarations
const app = (0, express_1.default)();
const port = process.env.PORT || 5000;
// * - MIDDLEWARE -
app.use(body_parser_1.default.urlencoded({ extended: true }));
app.use(body_parser_1.default.json());
// Serve static files from the "public" directory (which should contain your React app build files)
app.use(express_1.default.static(path_1.default.join(__dirname, "client", "public/index.html")));
// * - ROUTES -
// Bored API
app.use("/api/activity", activities_router_1.default);
// * - START SERVER -
app.listen(port, () => {
    console.log("Listening on port: ", port);
});
