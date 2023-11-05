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
  async (req: Request, res: Response): Promise<void> => {
    try {
      // Declaring activity
      const cookingActivity: Activity | void = await getCookingActivity(
        req,
        res
      );

      // If true, send data
      if (cookingActivity) {
        res.json(cookingActivity);
        console.log("Request sent! cooking activity is:", cookingActivity);
      } // If void, send error
      else {
        res.status(500).send("Failed to get cooking activity.");
      }
    } catch (error) {
      console.error("Error handling cooking activity request:", error);
      res.status(500).send("Internal server error.");
    }
  }
); // * end GET Request cooking Activity

// * Exporting Router
export default cookingActivityRouter;
