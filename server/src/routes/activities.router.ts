// * - IMPORTING AND DECLARATIONS -
// Express
import { Router, Request, Response } from "express";
// BoredAPI requests
import { getRandomActivityAndCategory } from "../controllers/activity.controller"; // random activity and category
// Activity Type
import { Activity } from "../../../shared/models/activity";
// Express Router
const activityRouter = Router();

// * GET request for random activity and category
activityRouter.get("/", async (req: Request, res: Response): Promise<void> => {
  try {
    // Declaring activity
    const randomActivityAndCategory: Activity | void = await getRandomActivityAndCategory(req, res);

<<<<<<< Updated upstream
    // Declaring response data as variable
    const data = response.data;

    // Sending data as response
    res.send(data);
    console.log("Request sent!");
    
=======
    // If true, send data
    if (randomActivityAndCategory) {
      res.json(randomActivityAndCategory);
      console.log("Request sent! Random activity and category is:", randomActivityAndCategory);
    } // If void, send error 
    else {
      res.status(500).send("Failed to get random activity and category.");
    }
>>>>>>> Stashed changes
  } catch (error) {
    console.error("Error handling random activity request:", error);
    res.status(500).send("Internal server error.");
  }
});

// * Exporting Router
export default activityRouter;
