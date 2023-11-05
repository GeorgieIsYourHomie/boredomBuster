// * - IMPORTING AND DECLARATIONS -
// Express
import { Router, Request, Response } from "express";
// BoredAPI Requests from Controllers
import { getRandomActivity } from "../../controllers/activityController/randomActivityController"; // random activity
// Activity Type
import { Activity } from "../../../../shared/models/activity";
// Express Router
const randomActivityRouter = Router();

// * GET Request Random Activity
randomActivityRouter.get(
  "/",
  async (req: Request, res: Response): Promise<void> => {
    try {
      // Declaring activity
      const randomActivity: Activity | void = await getRandomActivity(req, res);

      // If true, send data
      if (randomActivity) {
        res.json(randomActivity);
        console.log("Request sent! Random activity is:", randomActivity);
      } // If void, send error
      else {
        res.status(500).send("Failed to get random activity.");
      }
    } catch (error) {
      console.error("Error handling random activity request:", error);
      res.status(500).send("Internal server error.");
    }
  }
); // * end GET Request Random Activity

// * Exporting Router
export default randomActivityRouter;
