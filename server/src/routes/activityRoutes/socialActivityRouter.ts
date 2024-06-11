// * - IMPORTING AND DECLARATIONS -
// Express
import { Router, Request, Response } from "express";
// BoredAPI Requests from Controllers
import { getSocialActivity } from "../../controllers/activityController/socialActivityController"; // social activity
// Activity Type
import { Activity } from "../../../../shared/models/activity";
// Express Router
const socialActivityRouter = Router();

// * GET Request Social Activity
socialActivityRouter.get(
  "/",
  async (_req: Request, _res: Response): Promise<void> => {
    try {
      // Declaring activity
      const socialActivity: Activity | void = await getSocialActivity(
        _req,
        _res
      );

      // If true, send data
      socialActivity && _res.status(200).json(socialActivity); // Send response
      console.log(`Request for activity sent! Activity is:`, socialActivity);
    } catch (error) {
      console.error("Error handling social activity request:", error);
      _res.status(500).send("Internal server error.");
    }
  }
); // * end GET Request Social Activity

// * Exporting Router
export default socialActivityRouter;
