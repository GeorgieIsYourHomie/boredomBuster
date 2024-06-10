// * - IMPORTING -
// Express
import { Request, Response } from "express";
// Axios
import axios, { AxiosResponse } from "axios";
// Activity Model
import { Activity } from "../../../../shared/models/activity";

// * - RANDOM ACTIVITY -
// Function to...
// 1. Make get request for boredAPI random activity
// 2. Create an object from Activity interface
export const getRandomActivity = async (
  _req: Request,
  _res: Response
): Promise<Activity | void> => {
  try {
    // Get request to the API for a random activity
    const response: AxiosResponse<Activity> = await axios.get(
      "https://bored-api.appbrewery.com/random",
      {
        headers: {
          "User-Agent": "Mozilla/5.0 (compatible; BoredAPIClient/1.0)",
        },
      }
    );

    // Declaring data from the response; using type to check data
    const data: Activity = response.data;

    // Creating an object
    const randomActivity: Activity = {
      activity: data.activity,
      type: data.type,
      participants: data.participants,
      price: data.price,
      key: data.key,
      accessibility: data.accessibility,
    };

    // Return
    return randomActivity;
  } catch (error: any) {
    console.error(
      `Error handling random activity request:`,
      error.message,
      error.response ? error.response.data : null
    );
  }
}; // * - END RANDOM ACTIVITY -
