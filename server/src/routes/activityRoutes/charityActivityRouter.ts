// * - IMPORTING AND DECLARATIONS -
// Express
import { Router, Request, Response } from "express";
// BoredAPI Requests from Controllers
import { getCharityActivity } from "../../controllers/activityController/charityActivityController"; // charity activity
// Activity Type
import { Activity } from "../../../../shared/models/activity";
// Express Router
const charityActivityRouter = Router();

// * GET Request Social Activity
charityActivityRouter.get(
  "/",
  async (req: Request, res: Response): Promise<void> => {
    try {
      // Declaring activity
      const socialActivity: Activity | void = await getCharityActivity(
        req,
        res
      );

      // If true, send data
      if (socialActivity) {
        res.json(socialActivity);
        console.log("Request sent! social activity is:", socialActivity);
      } // If void, send error
      else {
        res.status(500).send("Failed to get social activity.");
      }
    } catch (error) {
      console.error("Error handling social activity request:", error);
      res.status(500).send("Internal server error.");
    }
  }
); // * end GET Request Social Activity

// * Exporting Router
export default charityActivityRouter;
