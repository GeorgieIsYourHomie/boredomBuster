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
exports.getCookingActivity = void 0;
// Axios
const axios_1 = __importDefault(require("axios"));
// * - Cooking ACTIVITY -
// Function to...
// 1. Make get request for boredAPI cooking activity
// 2. Create an object from Activity interface
const getCookingActivity = (_req, _res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        // Get request to the API for a cooking activity
        const response = yield axios_1.default.get("https://bored-api.appbrewery.com/filter?type=cooking", {
            headers: {
                "User-Agent": "Mozilla/5.0 (compatible; BoredAPIClient/1.0)",
            },
        });
        // Declaring data from the response; using type to check data
        const data = response.data;
        // Generate a random cooking activity or throw an error if none found
        const cookingActivity = (Array.isArray(data) &&
            data.length > 0 &&
            data[Math.floor(Math.random() * data.length)]) ||
            (() => {
                throw new Error("No cooking activities found.");
            })();
        // Creating an object
        return {
            activity: cookingActivity.activity,
            type: cookingActivity.type,
            participants: cookingActivity.participants,
            price: cookingActivity.price,
            key: cookingActivity.key,
            accessibility: cookingActivity.accessibility,
        };
        // No need to send the response here
        // The response will be sent in the route handler
    }
    catch (error) {
        console.error("Error handling cooking activity request:", error);
        throw error; // Rethrow the error to handle it in the route handler
    }
}); // * - END Cooking ACTIVITY -
exports.getCookingActivity = getCookingActivity;
