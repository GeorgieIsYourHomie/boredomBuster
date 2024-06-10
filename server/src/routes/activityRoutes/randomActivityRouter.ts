// * - IMPORTING AND DECLARATIONS -
// Express
import { Router, Request, Response } from "express";
// BoredAPI Requests from Controllers
import { getRandomActivity } from "../../controllers/activityController/randomActivityController"; // random activity request
// Activity Type
import { Activity } from "../../../../shared/models/activity";
// Express Router
const randomActivityRouter = Router();

// * GET Request Random Activity
randomActivityRouter.get(
  "/",
  async (_req: Request, _res: Response): Promise<void> => {
    try {
      // Declaring activity
      const randomActivity: Activity | void = await getRandomActivity(
        _req,
        _res
      );

      // If true, send data
      randomActivity && _res.status(200).json(randomActivity); // Send response
      console.log(`Request for activity sent! Activity is:`, randomActivity);
    } catch (error) {
      console.error("Error handling random activity request:", error);
      _res.status(500).send("Internal server error.");
    }
  }
); // * end GET Request Random Activity

// * Exporting Router
export default randomActivityRouter;
