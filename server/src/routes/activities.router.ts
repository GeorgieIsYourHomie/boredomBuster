// * - IMPORTING AND DECLARATIONS -
// Express
import { Router, Request, Response } from "express";
// BoredAPI requests
import { getRandomActivity } from "../controllers/activityController/randomActivityController"; // random activity
// Activity Model
import { Activity } from "../../../shared/models/activity";
// Express Router
const activityRouter = Router();

// * GET request for random activity
activityRouter.get(
  "/random-activity-and-category",
  async (req: Request, res: Response): Promise<void> => {
    try {
      // Declaring activity
      const randomActivityAndCategory: Activity | void =
        await getRandomActivity(req, res);

      // Send random activity to client
      res.json(randomActivityAndCategory);
      console.log(
        "Request sent! Random activity is:",
        randomActivityAndCategory
      );
    } catch (error) {
      console.error("Error handling random activity request:", error);
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
      const randomActivityByCategory: Activity | void = await getRandomActivity(
        req,
        res
      );

      // Send random activity to client
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
