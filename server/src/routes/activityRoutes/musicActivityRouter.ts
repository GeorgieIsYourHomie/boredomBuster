// * - IMPORTING AND DECLARATIONS -
// Express
import { Router, Request, Response } from "express";
// BoredAPI Requests from Controllers
import { getMusicActivity } from "../../controllers/activityController/musicActivityController"; // music activity
// Activity Type
import { Activity } from "../../../../shared/models/activity";
// Express Router
const musicActivityRouter = Router();

// * GET Request Social Activity
musicActivityRouter.get(
  "/",
  async (req: Request, res: Response): Promise<void> => {
    try {
      // Declaring activity
      const musicActivity: Activity | void = await getMusicActivity(req, res);

      // If true, send data
      if (musicActivity) {
        res.json(musicActivity);
        console.log("Request sent! social activity is:", musicActivity);
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
export default musicActivityRouter;
