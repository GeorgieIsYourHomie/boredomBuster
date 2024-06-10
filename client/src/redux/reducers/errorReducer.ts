// * - IMPORTING -
// Type
import { DispatchedActivityType } from "../../types/categories/CategoryTypes";

// Declaring error prompts variable
let errorPrompt: string;

// * - ERROR REDUCER -
const errorReducer = (
  state = { errorPrompt },
  action: DispatchedActivityType
) => {
  switch (action.type) {
    case "SELECT_A_CATEGORY":
      // Setting new errorPrompt
      errorPrompt = "Please select a category!";
      return { ...state, errorPrompt };
    case "NO_ERRORS":
      // Clear errors
      errorPrompt = "";
      return { ...state, errorPrompt };
    default:
      return state;
  }
};

// * Exporting errorReducer
export default errorReducer;
