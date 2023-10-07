// * - IMPORTING AND DECLARATIONS -
// Express
import { Router, Request, Response } from "express";
// Axios
import axios from "axios";
// Express Router
const router = Router();

// GET request for boredAPI data
router.get("/", async (_req: Request, res: Response) => {
  try {
    // Get request for completely random activity
    const response = await axios.get("http://www.boredapi.com/api/activity/");

    // Declaring response data as variable
    const data = response.data;

    // Sending data as response
    res.send(data);
    console.log("Request sent!");
    
  } catch (error) {
    console.log("Error requesting data.");
    res.sendStatus(500);
  }
});

export default router;
