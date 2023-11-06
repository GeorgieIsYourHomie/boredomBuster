// * - IMPORTING -
// Types
import { DispatchedActivityType } from "../../../types/categories/CategoryTypes";
import { Activity } from "../../../../../shared/models/activity";

// Properly typed initial state for the reducer
const initialState: { charityActivity: Activity | null } = {
  charityActivity: null, // Null initial value
};

// * - CHARITY ACTIVITY REDUCER -
const charityActivityReducer = (
  state = initialState,
  action: DispatchedActivityType
) => {
  switch (action.type) {
    case "SET_CHARITY_ACTIVITY":
      // Setting new activity
      const newCharityActivity = action.payload as Activity;
      return { ...state, charityActivity: newCharityActivity };
    case "CLEAR_CHARITY_CATEGORY":
      const noCharityActivity = null;
      return { ...state, charityActivity: noCharityActivity };
    default:
      return state;
  }
};

// * Exporting charityActivityReducer
export default charityActivityReducer;
