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
// BoredAPI Requests from Controllers
const randomActivityController_1 = require("../../controllers/activityController/randomActivityController"); // random activity request
// Express Router
const randomActivityRouter = (0, express_1.Router)();
// * GET Request Random Activity
randomActivityRouter.get("/", (_req, _res) => __awaiter(void 0, void 0, void 0, function* () {
    // Logging requests
    let requests = 0;
    try {
        requests++;
        // Declaring activity
        const randomActivity = yield (0, randomActivityController_1.getRandomActivity)(_req, _res);
        // If true, send data
        randomActivity && _res.status(200).json(randomActivity); // Send response
        console.log(`Request (${requests}) for activity sent! Activity is:`, randomActivity);
    }
    catch (error) {
        console.error("Error handling random activity request:", error);
        _res.status(500).send("Internal server error.");
    }
})); // * end GET Request Random Activity
// * Exporting Router
exports.default = randomActivityRouter;
