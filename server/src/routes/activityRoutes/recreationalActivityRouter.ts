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
  async (_req: Request, _res: Response): Promise<void> => {
    try {
      // Declaring activity
      const recreationalActivity: Activity | void = await getRecreationActivity(
        _req,
        _res
      );

      // If true, send data
      recreationalActivity && _res.status(200).json(recreationalActivity); // Send response
      console.log(
        `Request for activity sent! Activity is:`,
        recreationalActivity
      );
    } catch (error) {
      console.error("Error handling recreational activity request:", error);
      _res.status(500).send("Internal server error.");
    }
  }
); // * end GET Request Recreational Activity

// * Exporting Router
export default recreationalActivityRouter;
