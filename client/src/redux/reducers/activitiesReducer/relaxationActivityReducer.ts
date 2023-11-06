// * - IMPORTING -
// Types
import { DispatchedActivityType } from "../../../types/categories/CategoryTypes";
import { Activity } from "../../../../../shared/models/activity";

// Properly typed initial state for the reducer
const initialState: { relaxationActivity: Activity | null } = {
  relaxationActivity: null, // Null initial value
};

// * - RELAXATION ACTIVITY REDUCER -
const relaxationActivityReducer = (
  state = initialState,
  action: DispatchedActivityType
) => {
  switch (action.type) {
    case "SET_RELAXATION_ACTIVITY":
      // Setting new activity
      const newRelaxationActivity = action.payload as Activity;
      return { ...state, relaxationActivity: newRelaxationActivity };
    case "CLEAR_RELAXATION_CATEGORY":
      const noRelaxationActivity = null;
      return { ...state, relaxationActivity: noRelaxationActivity };
    default:
      return state;
  }
};

// * Exporting relaxationActivityReducer
export default relaxationActivityReducer;
