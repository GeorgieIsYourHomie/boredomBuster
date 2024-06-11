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
  async (_req: Request, _res: Response): Promise<void> => {
    try {
      // Declaring activity
      const educationalActivity: Activity | void = await getEducationalActivity(
        _req,
        _res
      );

      // If true, send data
      educationalActivity && _res.status(200).json(educationalActivity); // Send response
      console.log(
        `Request for activity sent! Activity is:`,
        educationalActivity
      );
    } catch (error) {
      console.error("Error handling educational activity request:", error);
      _res.status(500).send("Internal server error.");
    }
  }
); // * end GET Request Educational Activity

// * Exporting Router
export default educationalActivityRouter;
