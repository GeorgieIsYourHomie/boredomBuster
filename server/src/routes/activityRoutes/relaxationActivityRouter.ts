// * - IMPORTING AND DECLARATIONS -
// Express
import { Router, Request, Response } from "express";
// BoredAPI Requests from Controllers
import { getRelaxationActivity } from "../../controllers/activityController/relaxationActivityController"; // relaxation activity
// Activity Type
import { Activity } from "../../../../shared/models/activity";
// Express Router
const relaxationActivityRouter = Router();

// * GET Request relaxation Activity
relaxationActivityRouter.get(
  "/",
  async (req: Request, res: Response): Promise<void> => {
    try {
      // Declaring activity
      const relaxationActivity: Activity | void = await getRelaxationActivity(
        req,
        res
      );

      // If true, send data
      if (relaxationActivity) {
        res.json(relaxationActivity);
        console.log("Request sent! relaxation activity is:", relaxationActivity);
      } // If void, send error
      else {
        res.status(500).send("Failed to get relaxation activity.");
      }
    } catch (error) {
      console.error("Error handling relaxation activity request:", error);
      res.status(500).send("Internal server error.");
    }
  }
); // * end GET Request relaxation Activity

// * Exporting Router
export default relaxationActivityRouter;
