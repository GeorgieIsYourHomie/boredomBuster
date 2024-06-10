// * - IMPORTING -
// Types
import { DispatchedActivityType } from "../../../types/categories/CategoryTypes";
import { Activity } from "../../../../../shared/models/activity";

// Properly typed initial state for the reducer
const initialState: { busyworkActivity: Activity | null } = {
  busyworkActivity: null, // Null initial value
};

// * - BUSYWORK ACTIVITY REDUCER -
const busyworkActivityReducer = (
  state = initialState,
  action: DispatchedActivityType
) => {
  switch (action.type) {
    case "SET_BUSYWORK_ACTIVITY":
      // Setting new activity
      const newBusyworkActivity = action.payload as Activity;
      return { ...state, busyworkActivity: newBusyworkActivity };
    case "CLEAR_BUSYWORK_CATEGORY":
      const noBusyworkActivity = null;
      return { ...state, busyworkActivity: noBusyworkActivity };
    default:
      return state;
  }
};

// * Exporting busyworkActivityReducer
export default busyworkActivityReducer;
