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
const DIYActivityController_1 = require("../../controllers/activityController/DIYActivityController"); // DIY activity
// Express Router
const DIYActivityRouter = (0, express_1.Router)();
// * GET Request DIY Activity
DIYActivityRouter.get("/", (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        // Declaring activity
        const DIYActivity = yield (0, DIYActivityController_1.getDIYActivity)(req, res);
        // If true, send data
        if (DIYActivity) {
            res.json(DIYActivity);
            console.log("Request sent! DIY activity is:", DIYActivity);
        } // If void, send error
        else {
            res.status(500).send("Failed to get DIY activity.");
        }
    }
    catch (error) {
        console.error("Error handling DIY activity request:", error);
        res.status(500).send("Internal server error.");
    }
})); // * end GET Request DIY Activity
// * Exporting Router
exports.default = DIYActivityRouter;
