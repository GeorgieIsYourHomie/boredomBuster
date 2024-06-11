// * - IMPORTING AND DECLARATIONS -
// Express
import { Router, Request, Response } from "express";
// BoredAPI Requests from Controllers
import { getDIYActivity } from "../../controllers/activityController/DIYActivityController"; // DIY activity
// Activity Type
import { Activity } from "../../../../shared/models/activity";
// Express Router
const DIYActivityRouter = Router();

// * GET Request DIY Activity
DIYActivityRouter.get(
  "/",
  async (_req: Request, _res: Response): Promise<void> => {
    try {
      // Declaring activity
      const DIYActivity: Activity | void = await getDIYActivity(_req, _res);

      // If true, send data
      DIYActivity && _res.status(200).json(DIYActivity); // Send response
      console.log(`Request for activity sent! Activity is:`, DIYActivity);
    } catch (error) {
      console.error("Error handling DIY activity request:", error);
      _res.status(500).send("Internal server error.");
    }
  }
); // * end GET Request DIY Activity

// * Exporting Router
export default DIYActivityRouter;
