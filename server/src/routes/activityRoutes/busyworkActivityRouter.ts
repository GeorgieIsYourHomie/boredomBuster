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
  async (req: Request, res: Response): Promise<void> => {
    try {
      // Declaring activity
      const busyworkActivity: Activity | void = await getBusyworkActivity(
        req,
        res
      );

      // If true, send data
      if (busyworkActivity) {
        res.json(busyworkActivity);
        console.log("Request sent! busywork activity is:", busyworkActivity);
      } // If void, send error
      else {
        res.status(500).send("Failed to get busywork activity.");
      }
    } catch (error) {
      console.error("Error handling busywork activity request:", error);
      res.status(500).send("Internal server error.");
    }
  }
); // * end GET Request busywork Activity

// * Exporting Router
export default busyworkActivityRouter;
