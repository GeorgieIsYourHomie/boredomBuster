// * - IMPORTING -
// Express
import { Request, Response } from "express";
// Axios
import axios, { AxiosResponse } from "axios";
// Activity Model
import { Activity } from "../../../../shared/models/activity";

// * - Relaxation ACTIVITY -
// Function to...
// 1. Make get request for boredAPI relaxation activity
// 2. Create an object from Activity interface
export const getRelaxationActivity = async (
  _req: Request,
  _res: Response
): Promise<Activity | void> => {
  try {
    // Get request to the API for a relaxation activity
    const response: AxiosResponse<Activity> = await axios.get(
      "https://bored-api.appbrewery.com/filter?type=relaxation"
    );

    // Declaring data from the response; using type to check data
    const data: Activity = response.data;

    // Generate a random relaxation activity or throw an error if none found
    const relaxationActivity =
      (Array.isArray(data) &&
        data.length > 0 &&
        data[Math.floor(Math.random() * data.length)]) ||
      (() => {
        throw new Error("No relaxation activities found.");
      })();

    // Creating an object
    return {
      activity: relaxationActivity.activity,
      type: relaxationActivity.type,
      participants: relaxationActivity.participants,
      price: relaxationActivity.price,
      key: relaxationActivity.key,
      accessibility: relaxationActivity.accessibility,
    };

    // No need to send the response here
    // The response will be sent in the route handler
  } catch (error) {
    console.error("Error handling relaxation activity request:", error);
    throw error; // Rethrow the error to handle it in the route handler
  }
}; // * - END Relaxation ACTIVITY -
