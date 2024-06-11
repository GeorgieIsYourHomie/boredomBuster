// * - IMPORTING AND DECLARATIONS -
// Express
import { Router, Request, Response } from "express";
// BoredAPI Requests from Controllers
import { getCookingActivity } from "../../controllers/activityController/cookingActivityController"; // cooking activity
// Activity Type
import { Activity } from "../../../../shared/models/activity";
// Express Router
const cookingActivityRouter = Router();

// * GET Request cooking Activity
cookingActivityRouter.get(
  "/",
  async (_req: Request, _res: Response): Promise<void> => {
    try {
      // Declaring activity
      const cookingActivity: Activity | void = await getCookingActivity(
        _req,
        _res
      );

      // If true, send data
      cookingActivity && _res.status(200).json(cookingActivity); // Send response
      console.log(`Request for activity sent! Activity is:`, cookingActivity);
    } catch (error) {
      console.error("Error handling cooking activity request:", error);
      _res.status(500).send("Internal server error.");
    }
  }
); // * end GET Request cooking Activity

// * Exporting Router
export default cookingActivityRouter;
