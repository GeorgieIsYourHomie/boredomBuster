// * - IMPORTING -
// Types
import { DispatchedActivityType } from "../../../types/categories/CategoryTypes";
import { Activity } from "../../../../../shared/models/activity";

// Properly typed initial state for the reducer
const initialState: { randomActivity: Activity | null } = {
  randomActivity: null, // Null initial value
};

// * - RANDOM ACTIVITY REDUCER -
const randomActivityReducer = (
  state = initialState,
  action: DispatchedActivityType
) => {
  switch (action.type) {
    case "SET_RANDOM_ACTIVITY":
      // Setting new activity
      const newRandomActivity = action.payload as Activity;
      return { ...state, randomActivity: newRandomActivity };
    case "CLEAR_RANDOM_CATEGORY":
      const noRandomActivity = null;
      return { ...state, randomActivity: noRandomActivity };
    default:
      return state;
  }
};

// * Exporting randomActivityReducer
export default randomActivityReducer;
