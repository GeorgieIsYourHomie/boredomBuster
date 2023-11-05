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
  async (req: Request, res: Response): Promise<void> => {
    try {
      // Declaring activity
      const DIYActivity: Activity | void = await getDIYActivity(req, res);

      // If true, send data
      if (DIYActivity) {
        res.json(DIYActivity);
        console.log("Request sent! DIY activity is:", DIYActivity);
      } // If void, send error
      else {
        res.status(500).send("Failed to get DIY activity.");
      }
    } catch (error) {
      console.error("Error handling DIY activity request:", error);
      res.status(500).send("Internal server error.");
    }
  }
); // * end GET Request DIY Activity

// * Exporting Router
export default DIYActivityRouter;
