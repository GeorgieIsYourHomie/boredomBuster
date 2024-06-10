// * - IMPORTING -
// Types
import { DispatchedActivityType } from "../../../types/categories/CategoryTypes";
import { Activity } from "../../../../../shared/models/activity";

// Properly typed initial state for the reducer
const initialState: { cookingActivity: Activity | null } = {
  cookingActivity: null, // Null initial value
};

// * - COOKING ACTIVITY REDUCER -
const cookingActivityReducer = (
  state = initialState,
  action: DispatchedActivityType
) => {
  switch (action.type) {
    case "SET_COOKING_ACTIVITY":
      // Setting new activity
      const newCookingActivity = action.payload as Activity;
      return { ...state, cookingActivity: newCookingActivity };
    case "CLEAR_COOKING_CATEGORY":
      const noCookingActivity = null;
      return { ...state, cookingActivity: noCookingActivity };
    default:
      return state;
  }
};

// * Exporting cookingActivityReducer
export default cookingActivityReducer;
