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
      "http://www.boredapi.com/api/activity?type=charity"
    );

    // Declaring data from the response; using type to check data
    const data: Activity = response.data;

    // Creating an object
    const charityActivity: Activity = {
      activity: data.activity,
      type: data.type,
      participants: data.participants,
      price: data.price,
      key: data.key,
      accessibility: data.accessibility,
    };

    return charityActivity; // Return the result

    // No need to send the response here
    // The response will be sent in the route handler
  } catch (error) {
    console.error("Error handling charity activity request:", error);
    throw error; // Rethrow the error to handle it in the route handler
  }
}; // * - END Charity ACTIVITY -
