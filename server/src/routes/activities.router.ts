// * - IMPORTING AND DECLARATIONS -
// Express
import { Router, Request, Response } from "express";
// BoredAPI requests
import { getRandomActivityAndCategory } from "../controllers/activity.controller"; // random activity and category
import { getRandomActivityByCategory } from "../controllers/activity.controller"; // random activity searched by category
// Activity Model
import { Activity } from "../../../shared/models/activity";
// Express Router
const activityRouter = Router();

// * GET request for random activity and category
activityRouter.get(
  "/random-activity-and-category",
  async (req: Request, res: Response): Promise<void> => {
    try {
      // Declaring activity
      const randomActivityAndCategory: Activity | void =
        await getRandomActivityAndCategory(req, res);

      // Send random activity and category to client
      res.json(randomActivityAndCategory);
      console.log(
        "Request sent! Random activity and category is:",
        randomActivityAndCategory
      );
    } catch (error) {
      console.error(
        "Error handling random activity and category request:",
        error
      );
      res.status(500).send("Server error.");
    }
  }
);

// * GET request for random activity by category
activityRouter.get(
  "/random-activity-by-category",
  async (req: Request, res: Response): Promise<void> => {
    try {
      // Declaring activity
      const randomActivityByCategory: Activity | void =
        await getRandomActivityByCategory(req, res);

      // Send random activity and category to client
      res.json(randomActivityByCategory);
      console.log(
        "Request sent! Random activity by category is:",
        randomActivityByCategory
      );
    } catch (error) {
      console.error(
        "Error handling random activity by category request:",
        error
      );
      res.status(500).send("Server error.");
    }
  }
);

// * Exporting Router
export default activityRouter;
