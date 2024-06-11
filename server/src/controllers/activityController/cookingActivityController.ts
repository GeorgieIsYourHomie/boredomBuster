// * - IMPORTING -
// Express
import { Request, Response } from "express";
// Axios
import axios, { AxiosResponse } from "axios";
// Activity Model
import { Activity } from "../../../../shared/models/activity";

// * - Cooking ACTIVITY -
// Function to...
// 1. Make get request for boredAPI cooking activity
// 2. Create an object from Activity interface
export const getCookingActivity = async (
  _req: Request,
  _res: Response
): Promise<Activity | void> => {
  try {
    // Get request to the API for a cooking activity
    const response: AxiosResponse<Activity> = await axios.get(
      "https://bored-api.appbrewery.com/filter?type=cooking",
      {
        headers: {
          "User-Agent": "Mozilla/5.0 (compatible; BoredAPIClient/1.0)",
        },
      }
    );

    // Declaring data from the response; using type to check data
    const data: Activity = response.data;

    // Generate a random cooking activity or throw an error if none found
    const cookingActivity =
      (Array.isArray(data) &&
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
  } catch (error) {
    console.error("Error handling cooking activity request:", error);
    throw error; // Rethrow the error to handle it in the route handler
  }
}; // * - END Cooking ACTIVITY -
