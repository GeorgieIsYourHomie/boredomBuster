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
const socialActivityController_1 = require("../../controllers/activityController/socialActivityController"); // social activity
// Express Router
const socialActivityRouter = (0, express_1.Router)();
// * GET Request Social Activity
socialActivityRouter.get("/", (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        // Declaring activity
        const socialActivity = yield (0, socialActivityController_1.getSocialActivity)(req, res);
        // If true, send data
        if (socialActivity) {
            res.json(socialActivity);
            console.log("Request sent! social activity is:", socialActivity);
        } // If void, send error
        else {
            res.status(500).send("Failed to get social activity.");
        }
    }
    catch (error) {
        console.error("Error handling social activity request:", error);
        res.status(500).send("Internal server error.");
    }
})); // * end GET Request Social Activity
// * Exporting Router
exports.default = socialActivityRouter;
