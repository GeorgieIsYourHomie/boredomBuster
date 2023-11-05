// * - IMPORTING AND DECLARATIONS -
// Express
import { Router, Request, Response } from "express";
// BoredAPI Requests from Controllers
import { getEducationalActivity } from "../../controllers/activityController/educationalController"; // educational activity
// Activity Type
import { Activity } from "../../../../shared/models/activity";
// Express Router
const educationalActivityRouter = Router();

// * GET Request Educational Activity
educationalActivityRouter.get(
  "/",
  async (req: Request, res: Response): Promise<void> => {
    try {
      // Declaring activity
      const educationalActivity: Activity | void = await getEducationalActivity(
        req,
        res
      );

      // If true, send data
      if (educationalActivity) {
        res.json(educationalActivity);
        console.log(
          "Request sent! educational activity is:",
          educationalActivity
        );
      } // If void, send error
      else {
        res.status(500).send("Failed to get educational activity.");
      }
    } catch (error) {
      console.error("Error handling educational activity request:", error);
      res.status(500).send("Internal server error.");
    }
  }
); // * end GET Request Educational Activity

// * Exporting Router
export default educationalActivityRouter;
