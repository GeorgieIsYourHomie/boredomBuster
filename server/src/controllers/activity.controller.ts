// * - IMPORTING -
// Express
import { Request, Response } from "express";
// Body
// import bodyParser from "body-parser";
// Axios
import axios, { AxiosResponse } from "axios";
// Activity Type
import { Activity } from "../../../shared/models/activity";

// * - RANDOM ACTIVITY AND CATEGORY -
// Function to...
// 1. Make get request for boredAPI getRandomActivityAndCategory
// 2. Create an object from Activity class
export const getRandomActivityAndCategory = async (
  _req: Request,
  _res: Response
): Promise<Activity | void> => {
  try {
    // Get request to the API for a random activity and category
    const response: AxiosResponse<Activity> = await axios.get(
      "http://www.boredapi.com/api/activity/"
    );

    // Declaring data from the response; using type to check data
    const data: Activity = response.data;

    // Creating an object
    const randomActivityAndCategory: Activity = {
      activity: data.activity,
      type: data.type,
      participants: data.participants,
      price: data.price,
      key: data.key,
      accessibility: data.accessibility,
    };

    return randomActivityAndCategory; // Return the result

    // No need to send the response here
    // The response will be sent in the route handler
  } catch (error) {
    console.error("Error handling random activity request:", error);
    throw error; // Rethrow the error to handle it in the route handler
  }
}; // * - END RANDOM ACTIVITY AND CATEGORY -

// * - RANDOM ACTIVITY BY CATEGORY -
export const getRandomActivityByCategory = async (
  _req: Request,
  _res: Response
): Promise<Activity | void> => {
  try {
    // Declaring requested category
    // const category: string = req.body.category;

    // Get request to the API for a random activity searched by category
    const response: AxiosResponse<Activity> = await axios.get(
      // `http://www.boredapi.com/api/activity?type=${category}`
      "http://www.boredapi.com/api/activity?type=recreational"
    );

    const data: Activity = response.data;

    const randomActivityByCategory: Activity = {
      activity: data.activity,
      type: data.type,
      participants: data.participants,
      price: data.price,
      key: data.key,
      accessibility: data.accessibility,
    };

    return randomActivityByCategory;
  } catch (error) {
    console.error("Error handling random activity request:", error);
    throw error; 
  }
};
// * - END RANDOM ACTIVITY BY CATEGORY -
