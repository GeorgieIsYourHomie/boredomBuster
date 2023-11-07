// * - IMPORTING -
// Types
import { DispatchedActivityType } from "../../../types/categories/CategoryTypes";
import { Activity } from "../../../../../shared/models/activity";

// Properly typed initial state for the reducer
const initialState: { DIYActivity: Activity | null } = {
  DIYActivity: null, // Null initial value
};

// * - DIY ACTIVITY REDUCER -
const DIYActivityReducer = (
  state = initialState,
  action: DispatchedActivityType
) => {
  switch (action.type) {
    case "SET_DIY_ACTIVITY":
      // Setting new activity
      const newDIYActivity = action.payload as Activity;
      return { ...state, DIYActivity: newDIYActivity };
    case "CLEAR_DIY_CATEGORY":
      const noDIYActivity = null;
      return { ...state, DIYActivity: noDIYActivity };
    default:
      return state;
  }
};

// * Exporting DIYActivityReducer
export default DIYActivityReducer;
