// * - IMPORTING -
// Express
import { Request, Response } from "express";
// Axios
import axios, { AxiosResponse } from "axios";
// Activity Model
import { Activity } from "../../../../shared/models/activity";

// * - Charity ACTIVITY -
// Function to...
// 1. Make get request for boredAPI charity activity
// 2. Create an object from Activity interface
export const getCharityActivity = async (
  _req: Request,
  _res: Response
): Promise<Activity | void> => {
  try {
    // Get request to the API for a charity activity
    const response: AxiosResponse<Activity> = await axios.get(
      "https://bored-api.appbrewery.com/filter?type=charity",
      {
        headers: {
          "User-Agent": "Mozilla/5.0 (compatible; BoredAPIClient/1.0)",
        },
      }
    );

    // Ensure data is an array
    const data: Activity = response.data;

    // Generate a random charity activity or throw an error if none found
    const charityActivity =
      (Array.isArray(data) &&
        data.length > 0 &&
        data[Math.floor(Math.random() * data.length)]) ||
      (() => {
        throw new Error("No charity activities found.");
      })();

    // Creating an object
    return {
      activity: charityActivity.activity,
      type: charityActivity.type,
      participants: charityActivity.participants,
      price: charityActivity.price,
      key: charityActivity.key,
      accessibility: charityActivity.accessibility,
    };

    //No need to send the response here
    // The response will be sent in the route handler
  } catch (error) {
    console.error("Error handling charity activity request:", error);
    throw error; // Rethrow the error to handle it in the route handler
  }
}; // * - END Charity ACTIVITY -
