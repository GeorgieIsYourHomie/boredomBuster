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
const busyworkActivityController_1 = require("../../controllers/activityController/busyworkActivityController"); // busywork activity
// Express Router
const busyworkActivityRouter = (0, express_1.Router)();
// * GET Request busywork Activity
busyworkActivityRouter.get("/", (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        // Declaring activity
        const busyworkActivity = yield (0, busyworkActivityController_1.getBusyworkActivity)(req, res);
        // If true, send data
        if (busyworkActivity) {
            res.json(busyworkActivity);
            console.log("Request sent! busywork activity is:", busyworkActivity);
        } // If void, send error
        else {
            res.status(500).send("Failed to get busywork activity.");
        }
    }
    catch (error) {
        console.error("Error handling busywork activity request:", error);
        res.status(500).send("Internal server error.");
    }
})); // * end GET Request busywork Activity
// * Exporting Router
exports.default = busyworkActivityRouter;
