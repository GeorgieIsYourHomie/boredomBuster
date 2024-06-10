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
const relaxationActivityController_1 = require("../../controllers/activityController/relaxationActivityController"); // relaxation activity
// Express Router
const relaxationActivityRouter = (0, express_1.Router)();
// * GET Request relaxation Activity
relaxationActivityRouter.get("/", (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        // Declaring activity
        const relaxationActivity = yield (0, relaxationActivityController_1.getRelaxationActivity)(req, res);
        // If true, send data
        if (relaxationActivity) {
            res.json(relaxationActivity);
            console.log("Request sent! relaxation activity is:", relaxationActivity);
        } // If void, send error
        else {
            res.status(500).send("Failed to get relaxation activity.");
        }
    }
    catch (error) {
        console.error("Error handling relaxation activity request:", error);
        res.status(500).send("Internal server error.");
    }
})); // * end GET Request relaxation Activity
// * Exporting Router
exports.default = relaxationActivityRouter;
