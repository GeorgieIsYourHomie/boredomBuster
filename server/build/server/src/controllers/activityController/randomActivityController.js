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
exports.getRandomActivity = void 0;
// Axios
const axios_1 = __importDefault(require("axios"));
// * - RANDOM ACTIVITY -
// Function to...
// 1. Make get request for boredAPI random activity
// 2. Create an object from Activity interface
const getRandomActivity = (_req, _res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        // Get request to the API for a random activity
        const response = yield axios_1.default.get("https://bored-api.appbrewery.com/random", {
            headers: {
                "User-Agent": "Mozilla/5.0 (compatible; BoredAPIClient/1.0)",
            },
        });
        // Declaring data from the response; using type to check data
        const data = response.data;
        // Creating an object
        const randomActivity = {
            activity: data.activity,
            type: data.type,
            participants: data.participants,
            price: data.price,
            key: data.key,
            accessibility: data.accessibility,
        };
        // Return
        return randomActivity;
    }
    catch (error) {
        console.error(`Error handling random activity request:`, error.message, error.response ? error.response.data : null);
    }
}); // * - END RANDOM ACTIVITY -
exports.getRandomActivity = getRandomActivity;
