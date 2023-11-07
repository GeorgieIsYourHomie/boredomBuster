// * - IMPORTING AND DECLARATIONS -
// Express
import { Router, Request, Response } from "express";
// BoredAPI Requests from Controllers
import { getRecreationActivity } from "../../controllers/activityController/recreationActivityController"; // recreational activity
// Activity Type
import { Activity } from "../../../../shared/models/activity";
// Express Router
const recreationalActivityRouter = Router();

// * GET Request Recreational Activity
recreationalActivityRouter.get(
  "/",
  async (req: Request, res: Response): Promise<void> => {
    try {
      // Declaring activity
      const recreationalActivity: Activity | void = await getRecreationActivity(
        req,
        res
      );

      // If true, send data
      if (recreationalActivity) {
        res.json(recreationalActivity);
        console.log(
          "Request sent! Recreational activity is:",
          recreationalActivity
        );
      } // If void, send error
      else {
        res.status(500).send("Failed to get recreational activity.");
      }
    } catch (error) {
      console.error("Error handling recreational activity request:", error);
      res.status(500).send("Internal server error.");
    }
  }
); // * end GET Request Recreational Activity

// * Exporting Router
export default recreationalActivityRouter;
