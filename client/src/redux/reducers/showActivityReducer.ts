// * - IMPORTING -
// Type
import { DispatchedActivityType } from "../../types/categories/CategoryTypes";

// Declaring error prompts variable
let initialState: { toggleShowActivity: boolean } = {
  toggleShowActivity: false,
};

// * - ERROR REDUCER -
const toggleShowActivityReducer = (
  state = initialState,
  action: DispatchedActivityType
) => {
  switch (action.type) {
    case "TOGGLE_SHOW_ACTIVITY_ON":
      // Setting toggleShowActivity on
      const toggleShowActivityOn = true;
      return { ...state, toggleShowActivity: toggleShowActivityOn };
    case "TOGGLE_SHOW_ACTIVITY_OFF":
      // Setting toggleShowActivity off
      const toggleShowActivityOff = true;
      return { ...state, toggleShowActivity: toggleShowActivityOff };
    default:
      return state;
  }
};

// * Exporting toggleShowActivityReducer
export default toggleShowActivityReducer;
