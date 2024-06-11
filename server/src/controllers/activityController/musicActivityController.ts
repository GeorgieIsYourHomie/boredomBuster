// * - IMPORTING -
// Express
import { Request, Response } from "express";
// Axios
import axios, { AxiosResponse } from "axios";
// Activity Model
import { Activity } from "../../../../shared/models/activity";

// * - Music ACTIVITY -
// Function to...
// 1. Make get request for boredAPI music activity
// 2. Create an object from Activity interface
export const getMusicActivity = async (
  _req: Request,
  _res: Response
): Promise<Activity | void> => {
  try {
    // Get request to the API for a music activity
    const response: AxiosResponse<Activity> = await axios.get(
      "https://bored-api.appbrewery.com/filter?type=music"
    );

    // Declaring data from the response; using type to check data
    const data: Activity = response.data;

    // Generate a random busywork activity or throw an error if none found
    const musicActivity =
      (Array.isArray(data) &&
        data.length > 0 &&
        data[Math.floor(Math.random() * data.length)]) ||
      (() => {
        throw new Error("No music activities found.");
      })();

    // Creating an object
    return {
      activity: musicActivity.activity,
      type: musicActivity.type,
      participants: musicActivity.participants,
      price: musicActivity.price,
      key: musicActivity.key,
      accessibility: musicActivity.accessibility,
    };

    // No need to send the response here
    // The response will be sent in the route handler
  } catch (error) {
    console.error("Error handling music activity request:", error);
    throw error; // Rethrow the error to handle it in the route handler
  }
}; // * - END Music ACTIVITY -
