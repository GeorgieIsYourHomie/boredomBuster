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
const musicActivityController_1 = require("../../controllers/activityController/musicActivityController"); // music activity
// Express Router
const musicActivityRouter = (0, express_1.Router)();
// * GET Request Social Activity
musicActivityRouter.get("/", (_req, _res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        // Declaring activity
        const musicActivity = yield (0, musicActivityController_1.getMusicActivity)(_req, _res);
        // If true, send data
        musicActivity && _res.status(200).json(musicActivity); // Send response
        console.log(`Request for activity sent! Activity is:`, musicActivity);
    }
    catch (error) {
        console.error("Error handling music activity request:", error);
        _res.status(500).send("Internal server error.");
    }
})); // * end GET Request Social Activity
// * Exporting Router
exports.default = musicActivityRouter;
