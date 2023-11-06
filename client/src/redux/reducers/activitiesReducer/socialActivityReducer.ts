// * - IMPORTING -
// Types
import { DispatchedActivityType } from "../../../types/categories/CategoryTypes";
import { Activity } from "../../../../../shared/models/activity";

// Properly typed initial state for the reducer
const initialState: { socialActivity: Activity | null } = {
  socialActivity: null, // Null initial value
};

// * - Social ACTIVITY REDUCER -
const socialActivityReducer = (
  state = initialState,
  action: DispatchedActivityType
) => {
  switch (action.type) {
    case "SET_SOCIAL_ACTIVITY":
      // Setting new activity
      const socialActivity = action.payload as Activity;
      return { ...state, socialActivity: socialActivity };
    case "CLEAR_SOCIAL_CATEGORY":
      const noSocialActivity = null;
      return { ...state, socialActivity: noSocialActivity };
    default:
      return state;
  }
};

// * Exporting socialActivityReducer
export default socialActivityReducer;
