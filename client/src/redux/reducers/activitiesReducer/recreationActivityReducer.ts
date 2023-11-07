// * - IMPORTING -
// Types
import { DispatchedActivityType } from "../../../types/categories/CategoryTypes";
import { Activity } from "../../../../../shared/models/activity";

// Properly typed initial state for the reducer
const initialState: { recreationActivity: Activity | null } = {
  recreationActivity: null, // Null initial value
};

// * - Recreation ACTIVITY REDUCER -
const recreationActivityReducer = (
  state = initialState,
  action: DispatchedActivityType
) => {
  switch (action.type) {
    case "SET_RECREATIONAL_ACTIVITY":
      // Setting new activity
      const newRecreationActivity = action.payload as Activity;
      return { ...state, recreationActivity: newRecreationActivity };
    case "CLEAR_RECREATION_CATEGORY":
      const noRecreationalActivity = null;
      return { ...state, recreationActivity: noRecreationalActivity };
    default:
      return state;
  }
};

// * Exporting recreationActivityReducer
export default recreationActivityReducer;
