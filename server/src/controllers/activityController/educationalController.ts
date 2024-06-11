// * - IMPORTING -
// Express
import { Request, Response } from "express";
// Axios
import axios, { AxiosResponse } from "axios";
// Activity Model
import { Activity } from "../../../../shared/models/activity";

// * - Educational ACTIVITY -
// Function to...
// 1. Make get request for boredAPI educational activity
// 2. Create an object from Activity interface
export const getEducationalActivity = async (
  _req: Request,
  _res: Response
): Promise<Activity | void> => {
  try {
    // Get request to the API for a education activity
    const response: AxiosResponse<Activity> = await axios.get(
      "https://bored-api.appbrewery.com/filter?type=education",
      {
        headers: {
          "User-Agent": "Mozilla/5.0 (compatible; BoredAPIClient/1.0)",
        },
      }
    );

    // Declaring data from the response; using type to check data
    const data: Activity = response.data;

    // Generate a random educational activity or throw an error if none found
    const educationalActivity =
      (Array.isArray(data) &&
        data.length > 0 &&
        data[Math.floor(Math.random() * data.length)]) ||
      (() => {
        throw new Error("No educational activities found.");
      })();

    // Creating an object
    return {
      activity: educationalActivity.activity,
      type: educationalActivity.type,
      participants: educationalActivity.participants,
      price: educationalActivity.price,
      key: educationalActivity.key,
      accessibility: educationalActivity.accessibility,
    };

    // No need to send the response here
    // The response will be sent in the route handler
  } catch (error) {
    console.error("Error handling education activity request:", error);
    throw error; // Rethrow the error to handle it in the route handler
  }
}; // * - END education ACTIVITY -
