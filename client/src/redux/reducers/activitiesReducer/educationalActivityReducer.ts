// * - IMPORTING -
// Types
import { DispatchedActivityType } from "../../../types/categories/CategoryTypes";
import { Activity } from "../../../../../shared/models/activity";

// Properly typed initial state for the reducer
const initialState: { educationalActivity: Activity | null } = {
  educationalActivity: null, // Null initial value
};

// * - Educational ACTIVITY REDUCER -
const educationalActivityReducer = (
  state = initialState,
  action: DispatchedActivityType
) => {
  switch (action.type) {
    case "SET_EDUCATIONAL_ACTIVITY":
      // Setting new activity
      const educationalActivity = action.payload as Activity;
      return { ...state, educationalActivity: educationalActivity };
    case "CLEAR_EDUCATION_CATEGORY":
      const noEducationalActivity = null;
      return { ...state, educationalActivity: noEducationalActivity };
    default:
      return state;
  }
};

// * Exporting educationalActivityReducer
export default educationalActivityReducer;
