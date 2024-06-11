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
  async (_req: Request, _res: Response): Promise<void> => {
    try {
      // Declaring activity
      const musicActivity: Activity | void = await getMusicActivity(_req, _res);

      // If true, send data
      musicActivity && _res.status(200).json(musicActivity); // Send response
      console.log(`Request for activity sent! Activity is:`, musicActivity);
    } catch (error) {
      console.error("Error handling music activity request:", error);
      _res.status(500).send("Internal server error.");
    }
  }
); // * end GET Request Social Activity

// * Exporting Router
export default musicActivityRouter;
