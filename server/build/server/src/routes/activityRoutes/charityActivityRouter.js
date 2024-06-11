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
const charityActivityController_1 = require("../../controllers/activityController/charityActivityController"); // charity activity
// Express Router
const charityActivityRouter = (0, express_1.Router)();
// * GET Request Social Activity
charityActivityRouter.get("/", (_req, _res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        // Declaring activity
        const charityActivity = yield (0, charityActivityController_1.getCharityActivity)(_req, _res);
        // If true, send data
        charityActivity && _res.status(200).json(charityActivity); // Send response
        console.log(`Request for activity sent! Activity is:`, charityActivity);
    }
    catch (error) {
        console.error("Error handling charity activity request:", error);
        _res.status(500).send("Internal server error.");
    }
})); // * end GET Request Social Activity
// * Exporting Router
exports.default = charityActivityRouter;
