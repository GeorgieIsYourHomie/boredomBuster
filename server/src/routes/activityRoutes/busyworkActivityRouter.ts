// * - IMPORTING AND DECLARATIONS -
// Express
import { Router, Request, Response } from "express";
// BoredAPI Requests from Controllers
import { getBusyworkActivity } from "../../controllers/activityController/busyworkActivityController"; // busywork activity
// Activity Type
import { Activity } from "../../../../shared/models/activity";
// Express Router
const busyworkActivityRouter = Router();

// * GET Request busywork Activity
busyworkActivityRouter.get(
  "/",
  async (_req: Request, _res: Response): Promise<void> => {
    try {
      // Declaring activity
      const busyworkActivity: Activity | void = await getBusyworkActivity(
        _req,
        _res
      );

      // If true, send data
      busyworkActivity && _res.status(200).json(busyworkActivity); // Send response
      console.log(`Request for activity sent! Activity is:`, busyworkActivity);
    } catch (error) {
      console.error("Error handling busywork activity request:", error);
      _res.status(500).send("Internal server error.");
    }
  }
); // * end GET Request busywork Activity

// * Exporting Router
export default busyworkActivityRouter;
