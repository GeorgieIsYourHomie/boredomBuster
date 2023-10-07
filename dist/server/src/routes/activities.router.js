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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
// * - IMPORTING AND DECLARATIONS -
// Express
const express_1 = require("express");
// Axios
const axios_1 = __importDefault(require("axios"));
// Express Router
const router = (0, express_1.Router)();
// GET request for boredAPI data
router.get("/", (_req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        // Get request for completely random activity
        const response = yield axios_1.default.get("http://www.boredapi.com/api/activity/");
        // Declaring response data as variable
        const data = response.data;
        // Sending data as response
        res.send(data);
        console.log("Request sent!");
    }
    catch (error) {
        console.log("Error requesting data.");
        res.sendStatus(500);
    }
}));
exports.default = router;
