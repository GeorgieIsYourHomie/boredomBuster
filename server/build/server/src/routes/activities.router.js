"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
// * - IMPORTING AND DECLARATIONS -
// Express
const express_1 = require("express");
// BoredAPI requests
const randomActivityController_1 = require("../controllers/activityController/randomActivityController"); // random activity
// Express Router
const activityRouter = (0, express_1.Router)();
// * GET request for random activity
activityRouter.get("/random-activity-and-category", (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        // Declaring activity
        const randomActivityAndCategory = yield (0, randomActivityController_1.getRandomActivity)(req, res);
        // Send random activity to client
        res.json(randomActivityAndCategory);
        console.log("Request sent! Random activity is:", randomActivityAndCategory);
    }
    catch (error) {
        console.error("Error handling random activity request:", error);
        res.status(500).send("Server error.");
    }
}));
// * GET request for random activity by category
activityRouter.get("/random-activity-by-category", (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        // Declaring activity
        const randomActivityByCategory = yield (0, randomActivityController_1.getRandomActivity)(req, res);
        // Send random activity to client
        res.json(randomActivityByCategory);
        console.log("Request sent! Random activity by category is:", randomActivityByCategory);
    }
    catch (error) {
        console.error("Error handling random activity by category request:", error);
        res.status(500).send("Server error.");
    }
}));
// * Exporting Router
exports.default = activityRouter;
