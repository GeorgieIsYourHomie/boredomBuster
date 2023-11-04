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
const activity_controller_1 = require("../controllers/activity.controller"); // random activity and category
// Express Router
const activityRouter = (0, express_1.Router)();
// * GET request for random activity and category
activityRouter.get("/random", (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        // Declaring activity
        const randomActivityAndCategory = yield (0, activity_controller_1.getRandomActivityAndCategory)(req, res);
        // If true, send data
        if (randomActivityAndCategory) {
            res.json(randomActivityAndCategory);
            console.log("Request sent! Random activity and category is:", randomActivityAndCategory);
        } // If void, send error
        else {
            res.status(500).send("Failed to get random activity and category.");
        }
    }
    catch (error) {
        console.error("Error handling random activity request:", error);
        res.status(500).send("Internal server error.");
    }
})); // * end get random activity
// * Exporting Router
exports.default = activityRouter;
