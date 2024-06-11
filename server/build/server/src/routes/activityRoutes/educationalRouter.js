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
const educationalController_1 = require("../../controllers/activityController/educationalController"); // educational activity
// Express Router
const educationalActivityRouter = (0, express_1.Router)();
// * GET Request Educational Activity
educationalActivityRouter.get("/", (_req, _res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        // Declaring activity
        const educationalActivity = yield (0, educationalController_1.getEducationalActivity)(_req, _res);
        // If true, send data
        educationalActivity && _res.status(200).json(educationalActivity); // Send response
        console.log(`Request for activity sent! Activity is:`, educationalActivity);
    }
    catch (error) {
        console.error("Error handling educational activity request:", error);
        _res.status(500).send("Internal server error.");
    }
})); // * end GET Request Educational Activity
// * Exporting Router
exports.default = educationalActivityRouter;
