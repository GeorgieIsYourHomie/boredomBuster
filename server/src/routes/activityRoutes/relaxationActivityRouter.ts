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
  async (_req: Request, _res: Response): Promise<void> => {
    try {
      // Declaring activity
      const relaxationActivity: Activity | void = await getRelaxationActivity(
        _req,
        _res
      );

      // If true, send data
      relaxationActivity && _res.status(200).json(relaxationActivity); // Send response
      console.log(
        `Request for activity sent! Activity is:`,
        relaxationActivity
      );
    } catch (error) {
      console.error("Error handling relaxation activity request:", error);
      _res.status(500).send("Internal server error.");
    }
  }
); // * end GET Request relaxation Activity

// * Exporting Router
export default relaxationActivityRouter;
