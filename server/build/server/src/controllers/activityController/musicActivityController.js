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
exports.getMusicActivity = void 0;
// Axios
const axios_1 = __importDefault(require("axios"));
// * - Music ACTIVITY -
// Function to...
// 1. Make get request for boredAPI music activity
// 2. Create an object from Activity interface
const getMusicActivity = (_req, _res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        // Get request to the API for a music activity
        const response = yield axios_1.default.get("http://www.boredapi.com/api/activity?type=music");
        // Declaring data from the response; using type to check data
        const data = response.data;
        // Creating an object
        const musicActivity = {
            activity: data.activity,
            type: data.type,
            participants: data.participants,
            price: data.price,
            key: data.key,
            accessibility: data.accessibility,
        };
        return musicActivity; // Return the result
        // No need to send the response here
        // The response will be sent in the route handler
    }
    catch (error) {
        console.error("Error handling music activity request:", error);
        throw error; // Rethrow the error to handle it in the route handler
    }
}); // * - END Music ACTIVITY -
exports.getMusicActivity = getMusicActivity;
