// * - IMPORTING -
// Express
import { Request, Response } from "express";
// Axios
import axios, { AxiosResponse } from "axios";
// Activity Model
import { Activity } from "../../../../shared/models/activity";

// * - DIY ACTIVITY -
// Function to...
// 1. Make get request for boredAPI DIY activity
// 2. Create an object from Activity interface
export const getDIYActivity = async (
  _req: Request,
  _res: Response
): Promise<Activity | void> => {
  try {
    // Get request to the API for a DIY activity
    const response: AxiosResponse<Activity> = await axios.get(
      "https://bored-api.appbrewery.com/filter?type=diy"
    );

    // Declaring data from the response; using type to check data
    const data: Activity = response.data;
    // Generate a random busywork activity or throw an error if none found
    const busyworkActivity =
      (Array.isArray(data) &&
        data.length > 0 &&
        data[Math.floor(Math.random() * data.length)]) ||
      (() => {
        throw new Error("No DIY activities found.");
      })();

    // Creating an object
    return {
      activity: busyworkActivity.activity,
      type: busyworkActivity.type,
      participants: busyworkActivity.participants,
      price: busyworkActivity.price,
      key: busyworkActivity.key,
      accessibility: busyworkActivity.accessibility,
    };

    // No need to send the response here
    // The response will be sent in the route handler
  } catch (error) {
    console.error("Error handling DIY activity request:", error);
    throw error; // Rethrow the error to handle it in the route handler
  }
}; // * - END DIY ACTIVITY -
