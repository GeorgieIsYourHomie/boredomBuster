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
  async (_req: Request, _res: Response): Promise<void> => {
    try {
      // Declaring activity
      const charityActivity: Activity | void = await getCharityActivity(
        _req,
        _res
      );

      // If true, send data
      charityActivity && _res.status(200).json(charityActivity); // Send response
      console.log(`Request for activity sent! Activity is:`, charityActivity);
    } catch (error) {
      console.error("Error handling charity activity request:", error);
      _res.status(500).send("Internal server error.");
    }
  }
); // * end GET Request Social Activity

// * Exporting Router
export default charityActivityRouter;
